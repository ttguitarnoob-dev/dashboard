import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function JournalDetails() {
    const { id } = useParams()
    const URL = `https://api.ttguitarnoob.cloud/kizzi-journals/${id}`

    //state
    const [journal, setJournal] = useState()

    async function handleFetch() {
        const options = {
            method: "GET"
        }

        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            console.log('dada', data)
            setJournal(data)
            console.log(journal)
        } catch (err) {
            console.log('something tremendously awful happened when fetching the journal entry', err)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])

    if (!journal) {
        return <div className="container">
            <div className="journal-items">
                <h1>Loading the genius thoughts of the teacher that the IT director may have a crush on...</h1>
            </div>
        </div>
    }

    return <div className="container">
        <div className="journal-container">
            <h2>Learning Journal for {journal.date} </h2>
            <a href="/academy/journal"><button>Back to Journals</button></a>
            <hr></hr>
            <p>{journal.entry}</p>
        </div>
    </div>
}