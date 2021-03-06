import React, { useState } from 'react';

export default function KeyboardButton(props) {
    const [clickCount, setClickCount] = useState(0);
    const _onKeyDown = (e) => {
        switch(e.keyCode) {
            case 32: //space
            case 13: //enter
                e.preventDefault()
                props.onClick()
                break;
            default:
                break;
        }
    }

    const _onClick = (e) => {
        setClickCount(clickCount + 1);
        requestAnimationFrame(() => {
            document.activeElement.blur()
        })
    }

    return (
        <div >
            <div className={`button ${props.className}`} role="button" tabIndex={0} onKeyDown={_onKeyDown} onClick={_onClick}>
                {props.children}
            </div>
            <div className="KeyboardButton__error">
                {clickCount ? "Your hand is spasming too uncontrollably to click here!" : null}
            </div>
        </div>
    )

}