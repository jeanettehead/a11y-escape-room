import React from 'react';
import KeyboardButton from './KeyboardButton';

function Homepage(props) {
    return (
        <section className="Homepage">
            <div className="Homepage__apps">
                <div className="Homepage__app">
                    Icon
                </div>
                <div className="Homepage__app">
                    Icon
                </div>
                <div className="Homepage__app">
                    Icon
                </div>
                <div className="Homepage__app">
                    Icon
                 </div>
                <div className="Homepage__app">
                    Icon
                </div>

                <div className="Homepage__app">
                    <KeyboardButton onClick={props.advance}>Next</KeyboardButton>
                </div>
            </div>
        </section>
    );
}


export default Homepage;
