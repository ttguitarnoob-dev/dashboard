import { useState, useEffect } from "react"


export default function CountdownList() {

    //Page State
    var [countdownList, setCountdownList] = useState([])


    const countdownURL = "https://api.ttguitarnoob.cloud/countdowns"


    async function handleFetch() {
        try {
            const URL = countdownURL
            const options = {
                method: "GET"
            }

            const response = await fetch(URL, options)
            const results = await response.json()
            var array = results.map(countdown => countdown)

            setCountdownList(array)
            console.log(array)

        } catch (err) {
            console.log('something bad happened when fetching', err)
        }

    }

    //handleFetch function call
    useEffect(() => {
        handleFetch()
    }, [])

    return <div>
        <div className="journal-list">

            <div>
                <h2>Countdowns!</h2>
                <a href="/countdown/new"><button>New Countdown</button></a>
            </div>

            <ul>
                {countdownList && countdownList.map((countdown, index) => (
                    // <a href={`/academy/journal/${journal._id}`} key={journal._id}><li>{journal.date}</li></a>
                    <li className="journal-entry" key={countdown._id}>

                        <a href={`/countdown/${countdown._id}`} ><button>{countdown.title}</button></a>
                    </li>
                ))}




            </ul>
        </div>

    </div>
}