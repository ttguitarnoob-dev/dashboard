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

    return <div className="container">
        <div className="journal-container">
            <h2>New Learning Journal</h2>
            <div>
                <a href="/academy/journal"><button>Back to Learning Journal</button></a>
            </div>
            <div className="form">

                <form className="journal-form" onSubmit={handleSubmit}>
                    <ul className="form-items">

                        <li className="journal-input" >
                            <textarea
                                name="entry"
                                id="entry"
                                type="textarea"
                                placeholder="What happened at KC Academy today?"
                                onChange={handleChange}
                            />
                        </li>
                        <li className="journal-input">
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

            </div>
        </div>
    </div>


}