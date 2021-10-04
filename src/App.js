import { useState, useEffect } from "react";

import { ref, onValue, push, remove } from "firebase/database";

import realtime from "./firebase";

import Header from "./components/Header";
import Comments from "./components/Comments";
import Send from "./components/Send";

import "./styles.scss";

function App() {
  let [commentList, setCommentList] = useState([]);
  const [sendInput, setSendInput] = useState("");

  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, (snapshot) => {
      const comments = snapshot.val();

      const dbList = [];

      for (let comment in comments) {
        //todo Make key the hash from firebase and pass through props to each comment
        const commentObj = {
          key: comment,
          userName: comments[comment].userName,
          comment: comments[comment].comment,
          commentDate: comments[comment].commentDate,
        };

        dbList.push(commentObj);
      }

      setCommentList(dbList);
    });
  }, []);

  const handleChange = (e) => {
    setSendInput(e.target.value);
  };

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
        userName: "Anonymous",
        comment: sendInput,
        commentDate: formattedDateTime,
      };

      push(dbRef, formattedSendInput);

      setSendInput("");
    }
  };

  const handleClear = () => {
    const dbRef = ref(realtime);

    remove(dbRef);
  }

  return (
    <main className="main">
      <Header onClick={handleClear}/>
      <Comments commentList={commentList} />
      <Send onSubmit={handleSubmit} onChange={handleChange} value={sendInput} />
    </main>
  );
}

export default App;
