import { useState, useEffect } from "react"
import { getRemainingTime } from "./CountDownUtils"


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const countdownURL = 'https://api.ttguitarnoob.cloud/countdowns'



export default function Countdown({ countdownTimestampMs }) {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
    const [timestamp, setTimestamp] = useState([])

    async function handleFetch() {
        try {
            const URL = countdownURL
            const options = {
                method: "GET"
            }
            
            const response = await fetch(URL, options)
            const results = await response.json()
            var array = results.map(countdown => countdown)
            console.log("poohole", array)

            setTimestamp(array)

        } catch (err) {
            console.log('something bad happened when fetching', err)
        }

    }
    
    useEffect(() => {
        handleFetch()
    }, [])




    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(timestamp[0].date)
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