import React, { useState } from 'react';

export default function ScreenreaderButton(props) {
    const [clickCount, setClickCount] = useState(0);

    const _onClick = (e) => {
        setClickCount(clickCount + 1);
        requestAnimationFrame(() => {
            document.activeElement.blur()
        })
    }

    return (
        <div >
            <div className={`ScreenreaderButton ${props.className}`}>
                <div className="ScreenreaderButton__cover" onClick={_onClick}>{props.children}</div>
                <button className="ScreenreaderButton__hidden" onClick={props.onClick} tabIndex={-1}>{props.children}</button>
            </div>
            <div className="KeyboardButton__error">
                {clickCount ? "Your hand is spasming too uncontrollably to click here!" : null}
            </div>
        </div>
    )
}