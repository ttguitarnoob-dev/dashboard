import { useState, useEffect } from "react"
import { getRemainingTime } from "./CountDownUtils"


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}



export default function LiveCountdown(props) {
    
console.log('props', props)

    //State
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
    const [displayData, setDisplayData] = useState([])
    
    //variables
    const { id } = props
    const countdownURL = `https://api.ttguitarnoob.cloud/countdowns/${id}`
    var stupid = 0

    //Functions
    async function handleFetch() {
        try {
            const URL = countdownURL
            console.log('url', URL)
            const options = {
                method: "GET"
            }
            
            const response = await fetch(URL, options)
            const results = await response.json()
            const dateString = results.date
            results.date = new Date(dateString).toLocaleDateString()
            const dt = new Date(dateString).getTime()
            setDisplayData(results)
            stupid = dt
        } catch (err) {
            console.log('something badssss happened when fetching', err)
        }

    }
    
    
    useEffect(() => {
        handleFetch()
    }, [])


    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('passssssssing to the functionf', stupid)
            updateRemainingTime(stupid)
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTime(countdown))
    }



    return <div className="countdown-card">
        <div className="container">
            <h1>You can't wait for {displayData.title} on {displayData.date}!!</h1>
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