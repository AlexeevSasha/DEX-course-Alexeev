import React, { useRef, useState } from "react";
import { InputHistory } from "./InputHistory";
import { Error } from "./Error";
import { useSelector, useDispatch } from 'react-redux'
import { historyActions } from "./store/inputHistory/actions";
import { сommandBufferActions } from './store/сommandBuffer/action'





export function Console() {
    const [flag, setFlag] = useState([false])
    const inputRef = useRef(null);
    const { history } = useSelector((state) => state)

    const { сommandBuffer } = useSelector((state) => state)
    const dispatch = useDispatch();


    let countUp = сommandBuffer.length - 1;
    const arrowUp = () => {
        if (countUp > 0) return сommandBuffer[countUp--]
        return сommandBuffer[0] || null;
    }
    const arrowDown = () => {
        if (countUp === сommandBuffer.length - 1) return null;
        return сommandBuffer[++countUp]
    }


    const continueTheButton = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            if (inputRef.current.value.trim()) {
                if (inputRef.current.value.slice(0, 3) === 'cd ') {
                    dispatch(historyActions.setHistory(inputRef.current.value.slice(3)))
                } else if (inputRef.current.value.slice(0, 6) === 'print ') {
                    dispatch(historyActions.setMessagePrint(inputRef.current.value.slice(6)))
                } else {
                    setFlag(prev => [...prev, true])
                    setTimeout(() => setFlag(prev => prev.slice(0, -1)), 2000)
                }
                dispatch(сommandBufferActions.setCommandBuffer(inputRef.current.value))
                inputRef.current.value = '';

            }

        }
        if (e.keyCode === 38) {
            inputRef.current.value = arrowUp()
        }
        if (e.keyCode === 40) {
            inputRef.current.value = arrowDown()
        }
    }





    return (
        <div className="console__container">
            <h2 className="console__title">Console</h2>
            <ul className="console__items">
                {history.length === 0 ? <h3 className="console__items--nohistory">No history</h3> : <h3 className="console__items--title">History:</h3>}
                {history.map((elem, i) => {
                    return <InputHistory key={i} history={elem} />
                })}
            </ul>
            <input ref={inputRef} className="console__input" type='text' placeholder="$ " onKeyDown={continueTheButton} />
            {flag.map(elem => elem ? <Error /> : null)}
        </div>
    );
}







