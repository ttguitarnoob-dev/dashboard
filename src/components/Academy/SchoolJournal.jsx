import { useState, useEffect } from "react"


export default function SchoolJournal() {

    var [journalList, setJournalList] = useState([])

    const smell = new Date().toDateString()


    console.log("smellass", smell)

    const journalURL = "https://api.ttguitarnoob.cloud/journals"

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




    return <div>
        <h2>Learning Journal</h2>
        <div>
            <a href="/academy/journal/new">New Journal</a>
        </div>

        <h3>Look back at your old journals!</h3>
        <div>
            <ul>
                {journalList && journalList.map((journal, index) => (
                    <a href={`${journalURL}/${journal._id}`} key={journal._id}><li>{journal.date}</li></a>
                ))}
            </ul>
        </div>



    </div>
}