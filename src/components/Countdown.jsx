import { useState, useEffect } from "react"
import { getRemainingTime } from "./Utils/CountDownUtils"


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}


export default function Countdown({countdownTimestampMs}) {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)


    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTime(countdown))
    }



    return <div>
        <div className="container">
            <h2>Time Until I'm Home!!!</h2>
        <div className="countdown">
            
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span>{remainingTime.hours}</span>
            <span>hours</span>
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
</div>
    </div>
}