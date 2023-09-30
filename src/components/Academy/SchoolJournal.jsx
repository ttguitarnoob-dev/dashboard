import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function SchoolJournal() {

    var [journalList, setJournalList] = useState([])

    const smell = new Date().toDateString()


    console.log("smellass", smell)

    const journalURL = "https://api.ttguitarnoob.cloud/kizzi-journals"

    async function handleFetch() {
        try {
            const URL = journalURL
            const options = {
                method: "GET"
            }

            const response = await fetch(URL, options)
            const results = await response.json()
            var array = results.map(journal => journal)
            console.log("poohole", array)

            setJournalList(array)

        } catch (err) {
            console.log('something bad happened when fetching', err)
        }

    }

    //handleFetch function call
    useEffect(() => {
        handleFetch()
    }, [])


    if (journalList.length < 1) {
        return <div className="container">
            <div className="journal-items">
                <h1>Loading the musings of sexy teacher lady....</h1>
            </div>
        </div>
    }

    return <div className="container">
        <div className="journal-container">
            <h2>The Journal of the Prettiest Teacher in the Land!</h2>
            <div>
                <a href="/academy/journal/new"><button>New Journal</button></a>
            </div>
            <hr></hr>
            <h3>Look back at your old journals!</h3>
            <div className="journal-list">
                <ul className="trav-buttons">
                    {journalList && journalList.map((journal, index) => (

                        <Link to={`/academy/journal/${journal._id}`}>
                            <div className="journal-items">
                                <li className="main-buttons" key={journal._id}>
                                    {journal.date}
                                </li>
                            </div>
                        </Link>

                    ))}
                </ul>
            </div>

        </div>

    </div>
}