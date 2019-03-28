import React from 'react';
import KeyboardButton from './KeyboardButton';

function Intro(props) {
    return (
            <section className="Intro">
                <div className="Intro__story">
                    <div className="Intro__paragraph Intro__paragraph1">
                        You’re watching the news at home on your couch. The top story is 
                        a mysterious UFO landing in your town.
                    </div>
                    <div className="Intro__paragraph Intro__paragraph2">
                        Suddenly, you receive a phone call
                        from your uncle who lives near the landing site -- he sounds very disoriented.
                        You tell him to calm down, you’ll be right over to check on him.
                    </div>
                    <div className="Intro__paragraph Intro__paragraph3">
                        You show up and quickly run from your car into the house, leaving your 
                        cell phone behind. You find your uncle unresponsive and passed out on the couch.
                    </div>
                    <div className="Intro__paragraph Intro__paragraph4">
                        As you bend over to check on him,
                        you feel a ice cold pinch on your neck. Suddenly, you can only see in black and white.
                        
                    </div>
                    <div className="Intro__paragraph Intro__paragraph5">
                        You must send a message for help before you also lose all consciousness.
                        You sit down at your uncles ancient computer
                        and grab the mouse, but you can’t click on anything because your hand has
                        started spasming uncontrollably. You press “tab” on the keyboard to wake it up.
                    </div>

                   <div className="Intro__paragraph Intro__paragraph6">
                            <KeyboardButton onClick={props.advance}>Next</KeyboardButton>
                    </div>
                </div>
            </section>
        );
    }


export default Intro;
