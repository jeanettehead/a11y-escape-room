import React from 'react';
import KeyboardButton from './KeyboardButton';

function Homepage(props) {
    const onClickOtherApp = () => { };


    const renderOtherApps = (appNames) => {
        return appNames.map((name, i) => {
            return <KeyboardButton onClick={() => { onClickOtherApp(name) }} className="Homepage__app" key={i}>
                {name}
            </KeyboardButton>
        })

    };
    return (
        <section className="Homepage">
            <div className="Homepage__apps">
                {renderOtherApps(["Email", "Reddit", "Facebook", "Twitter", "Google", "Youtube", "WebAIM", "Pivotal Tracker", "Online Slots"])}
                <KeyboardButton onClick={props.advance} className="Homepage__app">
                    US Government Alien Threat Reporting & Response
                </KeyboardButton>
                {renderOtherApps(["Online Poker", "Amazon", "Yelp", "Bank", "PVTL stock price", "Kitty rescue webcam"])}
            </div>
        </section>
    );
}


export default Homepage;
