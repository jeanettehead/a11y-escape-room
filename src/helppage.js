import React, { useRef } from 'react';
import ScreenreaderButton from './ScreenreaderButton';

export default function Helppage({ advance }) {
  const first = useRef(null);
  const last = useRef(null);
  const ssn = useRef(null);

  function formComplete() {
    return !!(first.current.value.trim() &&
      last.current.value.trim() &&
      ssn.current.value.trim())
  }

  return (
    <div className="Helppage">
      <h1>US Government Alien Threat Reporting & Response Center</h1>
      <h2>Assistance Request Process</h2>
      <section>
        <div className="helppage__paragraph">
          Please fill out this form with respect to the person who needs rescue
        </div>
        <form>
          <label htmlFor="first">First Name</label>
          <input ref={first} id="first" type="text" required /> 

          <label htmlFor="last">Last Name</label>
          <input ref={last} id="last" type="text" required /> 

          <label htmlFor="ssn">Social Security Number</label>
          <input ref={ssn} id="ssn" type="text" required /> 

        <ScreenreaderButton onClick={() => formComplete() && advance()}>
            Submit
        </ScreenreaderButton>
        </form>


      </section>
    </div>
  )
}