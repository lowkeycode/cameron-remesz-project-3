import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { ref, onValue, push, remove } from "firebase/database";

// Utils
import realtime from "./firebase/realtime";
import redirect from './firebase/auth';

// Components
import Header from "./components/Header";
import Comments from "./components/Comments";
import Send from "./components/Send";
import SignIn from './components/SignIn';

// Styles
import "./styles.scss";


function App() {
  const [commentList, setCommentList] = useState([]);
  const [sendInput, setSendInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({})

  //  Set up subscription for auth 
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
    
    if(user) {
      setLoggedIn(true);
      setUser(user);
    }
  })
  }, [])

  // Set up subscription for db
  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, (snapshot) => {
      const comments = snapshot.val();

      const dbList = [];

      for (let comment in comments) {
        
        const commentObj = {
          userName: comments[comment].userName,
          comment: comments[comment].comment,
          commentDate: comments[comment].commentDate,
        };

        dbList.push(commentObj);
      }

      setCommentList(dbList);
    });
  }, []);

  // Get message input and save to state
  const handleChange = (e) => {
    setSendInput(e.target.value);
  };

  // Format message object to save to db and push to db 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (sendInput) {
      const dbRef = ref(realtime);

      const currentDateTime = new Date(Date.now());

      const formattedDateTime = new Intl.DateTimeFormat("en-us", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(currentDateTime);

      const formattedSendInput = {
        userName: user.displayName,
        comment: sendInput,
        commentDate: formattedDateTime,
      };

      push(dbRef, formattedSendInput);

      setSendInput("");
    }
  };

  // Clear db
  const handleClear = () => {
    const dbRef = ref(realtime);

    remove(dbRef);
  }

  // Sign out user
  const signOutUser = () => {
    
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      setLoggedIn(false);
      setUser({});
    }).catch(err => {
      alert(err.messsage);
    })
  }

  // If logged in render app, otherwise show sign in
  return (
    <main className="main">
      {
        loggedIn ? (
          <>
            <Header currentUser={user.displayName} onClick={handleClear} signOut={signOutUser}/>
            <Comments commentList={commentList} />
            <Send onSubmit={handleSubmit} onChange={handleChange} value={sendInput} />
          </>
        ) : (
          <SignIn signIn={redirect}/>
        )
      }
    </main>
  );
}

export default App;
