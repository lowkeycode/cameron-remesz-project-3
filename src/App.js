import { useState, useEffect } from 'react';

import { ref, onValue, push, remove } from 'firebase/database';

import realtime from './firebase';

import Header from './components/Header';
import Comments from './components/Comments';
import Send from './components/Send';

import './styles.scss';

function App() {

  const [ commentList, setCommentList ] = useState([]);


  useEffect(() => {

    const dbRef = ref(realtime);

    onValue(dbRef, snapshot => {
      const comments = snapshot.val();

      const dbList = [];

      
    });

  }, []);

  return (
    <main className="main">
      <Header/>
      <Comments/>
      <Send/>
    </main>
  );
}

export default App;
