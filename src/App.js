import React, { useState } from 'react';
import './App.css';
import Intro from './intro';
import Homepage from './homepage';
import KeyboardButton from './KeyboardButton';

function App(props) {
  const steps = ["intro", "homepage", "end"];
  const [stepIndex, setStepIndex] = useState(0);
  const [startTime] = useState(new Date().getTime());

  const advance = () => {
    setStepIndex(stepIndex + 1);
  }

  let content;
  if (steps[stepIndex] === "intro") {
    content = <Intro advance={advance} />
  }
  else if (steps[stepIndex] === "homepage") {
    content = <Homepage advance={advance} />
  }
  else if (steps[stepIndex] === "end") {
    const elapsedSeconds = (new Date().getTime() - startTime)/1000;
    content = <div>
      `You completed the challenge in ${elapsedSeconds} seconds` 
      <KeyboardButton className="App__retry" onClick={() => setStepIndex(0)}>Try again</KeyboardButton>
    </div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        Alien Escape
        </header>
      <main className="App__main">

        {content}

      </main>
      <footer className="App__footer">
        <a href="https://github.com/jeanettehead/a11y-escape-room">See this project on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
