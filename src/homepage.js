import React from 'react';
import KeyboardButton from './KeyboardButton';

function Homepage(props) {
    const onClickOtherApp = () => { };
    return (
        <section className="Homepage">
            <div className="Homepage__apps">
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Email
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Reddit
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Facebook
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Twitter
                 </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Google
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Youtube
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    WebAIM
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Pivotal Tracker
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Online Slots
                </KeyboardButton>
                <KeyboardButton onClick={props.advance} className="Homepage__app">
                    US Government Alien Threat Reporting & Response
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Online Poker
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Amazon
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Yelp
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Bank
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    PVTL stock price
                </KeyboardButton>
                <KeyboardButton onClick={onClickOtherApp} className="Homepage__app">
                    Kitty Rescue Webcam
                </KeyboardButton>
            </div>
        </section>
    );
}


export default Homepage;
