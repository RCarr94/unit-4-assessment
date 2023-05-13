import React from 'react';
import { useState } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

export default function App() {
  const [idx, setIdx] = useState(0);

  const changeIdx = function(newIdx) {
    setIdx(newIdx);
  };

  return (
    <div className="App">
      <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
      <main>
        <div>
          <CircleSelector idx={idx} changeIdx={changeIdx}></CircleSelector>
        </div>
        <Circles idx={idx}></Circles>
      </main>
    </div>
  );
};


