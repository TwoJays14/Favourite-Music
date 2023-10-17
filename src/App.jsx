import React, { useState, useRef } from 'react';
import Form from './assets/components/Form/Form';
import Header from './assets/components/Header/Header';
import Songs from './assets/components/Songs/Songs';
import './index.css';

export default function App() {
  const [input, setInput] = useState({
    songName: '',
    numPlays: '',
    duration: '',
  });

  // const nextId = useRef(1);

  const [submittedData, setSubmittedData] = useState([
    {
      // id: nextId.current,
      songName: input.songName,
      numPlays: input.numPlays,
      duration: input.duration,
    },
  ]);

  // nextId.current++;

  return (
    <>
      <Header />
      <div className="bg-gradient-to-t from-slate-900 to-slate-600">
        <Songs
          submittedData={submittedData}
          setSubmittedData={setSubmittedData}
        />
        <Form
          input={input}
          setInput={setInput}
          submittedData={submittedData}
          setSubmittedData={setSubmittedData}
        />
      </div>
    </>
  );
}
