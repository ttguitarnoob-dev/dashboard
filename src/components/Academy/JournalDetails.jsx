import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function JournalDetails() {
    const { id } = useParams()
    const URL = `https://api.ttguitarnoob.cloud/kizzi-journals/${id}`

    //state
    const [journal, setJournal] = useState()

    async function handleFetch(){
        const options = {
            method: "GET"
        }

        try {
            const response = await fetch(URL, options)
            const data = response.json()
            console.log('dada', data)
            setJournal(data)
            console.log(journal)
        } catch(err){
            console.log('something tremendously awful happened when fetching the journal entry', err)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return <div>
        <h2>Helloooo </h2>
    </div>
}