import React from 'react';
import { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = ({timeStart}) => {

    console.log('timeStart', timeStart)

    // const [days, setDays] = useState(0);
    // const [hours, setHours] = useState(0);
    // const [minutes, setMinutes] = useState(0);
    // const [seconds, setSeconds] = useState(0);
    //
    // const deadline = "3/05/2023";
    //
    // const getTime = () => {
    //     const time = Date.parse(timeStart ) - Date.now();
    //
    //     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    //     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    //     setMinutes(Math.floor((time / 1000 / 60) % 60));
    //     setSeconds(Math.floor((time / 1000) % 60));
    // };
    //
    // useEffect(() => {
    //     const interval = setInterval(() => getTime(timeStart), 1000);
    //
    //     return () => clearInterval(interval);
    // }, []);


    const { seconds, minutes, hours } = useTimer({
        autoStart: true,
        expiryTimestamp: new Date(timeStart).setHours(new Date(timeStart).getHours() + 10 ),
    });

    return (

        // <div>
        //     <div>{hours} годин</div>
        //     <div>{minutes} хвилин</div>
        //     <div>{seconds} секунд</div>
        // </div>

        <div className="TimerBlock d-flex">

            {/*<div className="days">*/}
            {/*    { days > 9 ? ( days ) : ( `0${days}` ) }d*/}
            {/*    <span>:</span>*/}
            {/*</div>*/}
            <div className="hours">
                { hours > 9 ? ( hours ) : ( `0${hours}` ) }h
                <span>:</span>
            </div>
            <div className="minutes">
                { minutes > 9 ? ( minutes ) : ( `0${minutes}` ) }m
                <span>:</span>
            </div>
            <div className="seconds">
                { seconds > 9 ? ( seconds ) : ( `0${seconds}` ) }s
            </div>

        </div>
    );
};

export default Timer;