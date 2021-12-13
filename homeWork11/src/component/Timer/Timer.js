import React, { useState, useEffect } from 'react';
import './Timer.scss'



export function Timer() {
    const [countdownDate, setCountdownDate] = useState(new Date('2021-12-14 18:20').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();
            const differenceTime = countdownDate - currentTime;

            let days = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
            let hours = Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),);
            let minutes = Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60),);
            let seconds = Math.floor((differenceTime % (1000 * 60)) / 1000);

            const addZero = (num) => num < 10 ? `0${num}` : num;

            setState({ days: days, hours: addZero(hours), minutes: addZero(minutes), seconds: addZero(seconds) });
        }
    };

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);


    return (
        <div className='timer'>
            <div className='timer__clock'>{+state.hours + +(state.days * 24)} : {state.minutes} : {state.seconds}</div>
        </div>
    );
}