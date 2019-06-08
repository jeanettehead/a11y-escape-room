import React, { useState } from 'react';
import KeyboardButton from './KeyboardButton';

export default function Govpage({ advance }) {
  const [openPage, setOpenPage] = useState(null);

  const onClickOtherPage = (name) => {
    setOpenPage(name);
  };

  const closeOtherPage = () => {
    setOpenPage(null);
  };

  const renderLinks = (pageNames) => {
    return pageNames.map((name, i) => {
      return <KeyboardButton onClick={() => { onClickOtherPage(name) }} className="Govpage__link" key={i}>
        {name}
      </KeyboardButton>
    })
  };

  if (openPage !== null) {
    return (
      <section className="homepage">
        <h1>{openPage}</h1>
        <KeyboardButton className="Govpage__openPageBack" onClick={closeOtherPage}>
          ← Back
        </KeyboardButton>
      </section>
    )
  }
  return (
    <div className="Govpage">
      <h1> US Government Alien Threat Reporting & Response Center</h1>
      <nav className="Govpage__nav">
        {renderLinks(["About", "Bureaus & Offices", "Priorities", "News", "Like us on Facebook"])}
      </nav>
      <section>
        <div className="Govpage__paragraph">
          The US Government Alien Threat Reporting & Response Center (ATRRC) is an organization in the United States that investigates UFO sightings and/or alien contacts. ATRRC has been in continuous operation since 1974. It was founded in 1974 by Robert J. Gribble.[1] It has catalogued almost 90,000 reported UFO sightings over its history, most of which were in the United States.[2] In addition to record keeping, the center has provided statistics and graphs to assist others looking for information. Slate published an interactive graph published by Davenport, which showed the density of sightings relative to an area.[3]
        </div>
        <div className="Govpage__paragraph">
          Due to an increase in recent UFO and alien activity and attacks, ATRRC has increased its presence and programs. We have many agents on standby to help you in the case of an incident. Just click the link below to start the request process.
        </div>
      <KeyboardButton onClick={() => { advance() }} className="Govpage__link">
        Request assistance
      </KeyboardButton>
      </section>
      <footer className="Govpage__footer">
        {renderLinks(["Notices", "Privacy policy", "Security", "Threat general", "Follow us on Twitter"])}
      </footer>
    </div>
  )
}