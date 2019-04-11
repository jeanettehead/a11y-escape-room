import React, { useState } from 'react';
import ScreenreaderButton from './ScreenreaderButton';

export default function Govpage({advance}) {
  return (
    <div className="Govpage">
      <h1> US Government Alien Threat Reporting & Response Center</h1>
      <section>
        <div className="Govpage__paragraph">
          The US Government Alien Threat Reporting & Response Center (ATRRC) is an organization in the United States that investigates UFO sightings and/or alien contacts. ATRRC has been in continuous operation since 1974. It was founded in 1974 by Robert J. Gribble.[1] It has catalogued almost 90,000 reported UFO sightings over its history, most of which were in the United States.[2] In addition to record keeping, the center has provided statistics and graphs to assist others looking for information. Slate published an interactive graph published by Davenport, which showed the density of sightings relative to an area.[3]
        </div>
        <div className="Govpage__paragraph">
          Due to an increase in recent UFO and alien activity and attacks, ATRRC has increased its presence and programs. We have many agents on standby to help you in the case of an incident. Just click the link below to start the request process.
         </div>

        <ScreenreaderButton onClick={advance}>
          Request assistance
        </ScreenreaderButton>

      </section>
    </div>
  )
}