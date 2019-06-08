import React, { useState } from 'react';
import KeyboardButton from './KeyboardButton';

function Homepage(props) {
    const [openApp, setOpenApp] = useState(null);

    const onClickOtherApp = (name) => {
        setOpenApp(name);
    };

    const closeOtherApp = () => {
        setOpenApp(null);
    };
    const renderOtherApps = (appNames) => {
        return appNames.map((name, i) => {
            return <KeyboardButton onClick={() => { onClickOtherApp(name) }} className="Homepage__app" key={i}>
                {name}
            </KeyboardButton>
        })
    };

    if (openApp !== null) {
        return (
            <section className="homepage">
                <h1>{openApp}</h1>
                <KeyboardButton className="Homepage__openAppBack" onClick={closeOtherApp}>
                    ← Back
                </KeyboardButton>
            </section>
        )
    }
    return (
        <section className="Homepage">
            The computer's awake and you're looking at the homepage in his internet browser.
            <div className="Homepage__desktop">
                <input className="Homepage__urlBar" aria-label="Search the internet" / >
                <div className="Homepage__apps">
                    {renderOtherApps(["Email", "Reddit", "Facebook", "Twitter", "Google", "Youtube", "WebAIM", "Pivotal Tracker", "Online Slots"])}
                    <KeyboardButton onClick={props.advance} className="Homepage__app">
                        US Government Alien Threat Reporting & Response
                </KeyboardButton>
                    {renderOtherApps(["Online Poker", "Amazon", "Yelp", "Bank", "PVTL stock price", "Kitty rescue webcam"])}
                </div>
            </div>
        </section>
    );
}


export default Homepage;
