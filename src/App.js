import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ref, onValue, push, remove} from "firebase/database";

// Utils
import realtime from "./firebase/realtime";
import redirect from "./firebase/auth";

// Components
import Header from "./components/Header";
import Comments from "./components/Comments";
import Send from "./components/Send";
import SignIn from "./components/SignIn";

// Styles
import "./styles.scss";

function App() {
  // State
  const [commentList, setCommentList] = useState([]);
  const [sendInput, setSendInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  //  Set up subscription for auth
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {

      if (user) {
        //  If user signs in put them in state (don't really do anything with this but could be handy in the future)
        setUser(user);
        //  Set logged in to true to remove sign in componenet and display main appp
        setLoggedIn(true);
      }
    });
  }, []);

  // Set up subscription for db
  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(
      dbRef,
      (snapshot) => {
        const comments = snapshot.val();

        // Initialize empty array to push each formatted comment object to
        const dbList = [];

        //  Loop comments in db and format
        for (let comment in comments) {
          const commentObj = {
            userName: comments[comment].userName,
            comment: comments[comment].comment,
            commentDate: comments[comment].commentDate,
          };

          dbList.push(commentObj);
        }

        // Set to state so we can utilize
        setCommentList(dbList);
      },
      (err) => {
        // Spent too long looking into error handling with firebase and getting nowhere and couldn't get this to throw

        // An optional callback that will be notified if your event subscription is ever canceled because your client does not have permission to read this data (or it had permission but has now lost it). This callback will be passed an Error object indicating why the failure occurred.
        console.log(err);
      }
    );
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

      // Format date stamp from time of submit
      const currentDateTime = new Date(Date.now());

      const formattedDateTime = new Intl.DateTimeFormat("en-us", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(currentDateTime);

      // Format message object
      const formattedSendInput = {
        userName: user.displayName,
        comment: sendInput,
        commentDate: formattedDateTime,
      };

      // Push to db
      push(dbRef, formattedSendInput);

      setSendInput("");
    }
  };

  // Clear db & in turn all comments
  const handleClear = () => {
    const dbRef = ref(realtime);

    remove(dbRef);
  };

  // Sign out user
  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoggedIn(false);
        setUser({});
      })
      .catch((err) => {
        alert(err.messsage);
      });
  };

  // If logged in render app, otherwise show sign in
  return (
    <main className="main">
      {loggedIn ? (
        <>
          <Header
            currentUser={user.displayName}
            onClick={handleClear}
            signOut={signOutUser}
          />
          <Comments commentList={commentList} />
          <Send
            onSubmit={handleSubmit}
            onChange={handleChange}
            value={sendInput}
          />
        </>
      ) : (
        <SignIn signIn={redirect} />
      )}
    </main>
  );
}

export default App;
