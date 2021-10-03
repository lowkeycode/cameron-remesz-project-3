import { useState, useEffect } from "react";

import { ref, onValue, push, remove } from "firebase/database";

import realtime from "./firebase";

import Header from "./components/Header";
import Comments from "./components/Comments";
import Send from "./components/Send";

import "./styles.scss";

function App() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, (snapshot) => {
      const comments = snapshot.val();

      console.log("Snapshot.val():", snapshot.val());

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

  console.log(commentList);

  return (
    <main className="main">
      <Header />
      <Comments commentList={commentList} />
      <Send />
    </main>
  );
}

export default App;