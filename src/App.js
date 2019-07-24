import React, { useState } from 'react';
import './App.css';
import Intro from './intro';
import Homepage from './homepage';
import Govpage from './govpage';
import Helppage from './helppage';
import KeyboardButton from './KeyboardButton';

function App(props) {
  const steps = ["intro", "homepage", "govpage", "helppage", "end"];
  const hints = {
    "intro": ["Tab to the button and press enter"],
    "helppage": ["You will need to use a screenreader to click the button"],
    "govpage": [
      "You need to 'request assistance'",
      <span data-index={0}>There is no <a target="_blank" href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html">focus ring</a> on this page</span>,
    ],
    "homepage": [
      "You need to visit the US Government Alien Threat Reporting website",
      "Use the tab key to navigate",
    ],
    "end": ["No you don't"],
  }
  const [stepIndex, setStepIndex] = useState(0);
  const [startTime] = useState(new Date().getTime());
  const [hint, setHint] = useState(null);
  const [hintCount, setHintCount] = useState(0);

  const advance = () => {
    setStepIndex(stepIndex + 1);
    setHint(null)
  }

  //TODO make hints its own entity 
  const showHint = () => {
    const pageHints = hints[steps[stepIndex]];
    if (hint === null) {
      setHint(pageHints[0]);
    } else {
      let hintIndex;
      if (typeof hint === "object") {
        hintIndex = hint.props["data-index"]
      } else {
        hintIndex = pageHints.indexOf(hint);
      }
      const hasNewHint = (hintIndex !== pageHints.length - 1);
      const nextHint = hasNewHint ? hintIndex + 1 : hintIndex;
      if (hasNewHint) {
        setHintCount(hintCount + 1);
      }
      setHint(pageHints[nextHint]);
    }
  }

  let content;
  if (steps[stepIndex] === "intro") {
    content = <Intro advance={advance} />
  }
  else if (steps[stepIndex] === "homepage") {
    content = <Homepage advance={advance} />
  }
  else if (steps[stepIndex] === "govpage") {
    content = <Govpage advance={advance} />
  }
  else if (steps[stepIndex] === "helppage") {
    content = <Helppage advance={advance} />
  }
  else if (steps[stepIndex] === "end") {
    const elapsedSeconds = (new Date().getTime() - startTime) / 1000;
    content = <div>
      Good job! You completed the challenge in {elapsedSeconds} seconds.
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
        <div className="App__hint--text">
          {hint}
        </div>
      </main>
      <footer className="App__footer">
        <div>
          <button className="App__hint" onClick={showHint}>I need a hint</button>
        </div>
        <div>
          <a target="_blank" href="https://github.com/jeanettehead/a11y-escape-room">See this project on GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
