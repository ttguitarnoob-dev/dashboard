import { useNavigate } from "react-router-dom"

export default function NewJournal() {

    var initialInput = {}
    const journalURL = "https://api.ttguitarnoob.cloud/kizzi-journals"
    const navigate = useNavigate()


    const handleChange = (e) => {
        //take e.target.name and use it as the key for which initialInput to change
        var edited = e.target.name
        initialInput[edited] = e.target.value
        console.log('omgchanged', initialInput)
    }

  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted", initialInput)
        initialInput.date = new Date(`${e.target[1].value}T00:00:00`).toLocaleDateString()
        console.log('blee', initialInput)
        createItem(initialInput)

    }

    const createItem = async (data) => {
        console.log('creating journal entry', data)
        const URL = journalURL
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        }
        try {
            const createdJournal = await fetch(URL, options)
            console.log("it's working so far", options)
            const parsedJournal = await createdJournal.json()
            console.log("what is the data I'm trying to send", parsedJournal)
            navigate('/academy/journal')

        } catch (err) {
            console.log('error creating journal', err)
        }
        console.log('Journal created', data)
    }

    return <div>
        <div>
            <h2>New Learning Journal</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    
                    <li>
                        <label htmlFor="entry">What happened at KC Academy today?</label>
                        <textarea
                            name="entry"
                            id="entry"
                            type="textarea"
                            placeholder="Enter response here"
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="date">What date is this entry for?</label>
                        <input
                            name="date"
                            id="date"
                            type="date"
                            placeholder="Enter response here"
                            onChange={handleChange}
                        />
                    </li>
                    
                </ul>
                <button>Submit</button>
            </form>
            <div>
                <a href="/academy/journal">Back to Learning Journal</a>
            </div>
        </div>
    </div>


}