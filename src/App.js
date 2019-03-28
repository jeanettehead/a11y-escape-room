import React, { useState } from 'react';
import './App.css';
import Intro from './intro';
import Homepage from './homepage';

function App(props) {
  const steps = ["intro", "homepage"];
  const [stepIndex, setStepIndex] = useState(0);

  const advance = () => {
    setStepIndex(stepIndex + 1);
  }

  let content;
  if (steps[stepIndex] === "intro") {
    content = <Intro advance={advance}/>
  }
  else if (steps[stepIndex] === "homepage") {
    content = <Homepage advance={advance} />
  }

  return (
    <div className="App">
      <header className="App-header">
        Alien Escape
        </header>
      <main>

        {content}

      </main>
    </div>
  );
}

export default App;
