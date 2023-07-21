import { useState, useEffect } from "react"
import { getRemainingTime } from "./CountDownUtils"
import { useParams } from "react-router-dom"


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const countdownURL = 'https://api.ttguitarnoob.cloud/countdowns'



export default function Countdown({ countdownTimestampMs }) {
    console.log('deprops', countdownTimestampMs)

    //State
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
    const [timestamp, setTimestamp] = useState([])

    //variables
    const { id } = useParams()
    const countdownURL = `https://api.ttguitarnoob.cloud/countdowns/${id}`

    //Functions
    async function handleFetch() {
        try {
            const URL = countdownURL
            const options = {
                method: "GET"
            }
            
            const response = await fetch(URL, options)
            console.log('response', response)
            const results = await response.json()
            console.log('reuslt', results)
            

            setTimestamp(results)

        } catch (err) {
            console.log('something bads happened when fetching', err)
        }

    }
    
    useEffect(() => {
        handleFetch()
    }, [])


//to get this to work, this page will have to be a show page and get the timestamp from useParams

    useEffect(() => {
        const intervalId = setInterval(() => {
            //the argument for this function call will be the timestamp fetched by searching the countdown by id when clicking on the link on the index page
            console.log('timestamp im passsssing to the functionf', timestamp.date)
            updateRemainingTime(timestamp.date)
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTime(countdown))
    }



    return <div>
        <div className="container">
            <h2>{timestamp.title}</h2>
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