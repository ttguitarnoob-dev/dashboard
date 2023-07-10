export default function NewJournal() {

    var initialInput = {}
    const journalURL = "https://api.ttguitarnoob.cloud/journals"


    const handleChange = (e) => {
        //take e.target.name and use it as the key for which initialInput to change
        var edited = e.target.name
        initialInput[edited] = e.target.value
        console.log('omgchanged', initialInput)
    }

  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted", initialInput)
        const formBody = Object.keys(initialInput).map(key =>
            encodeURIComponent(key) + '=' +
            encodeURIComponent(initialInput[key])).join('&')
        
        createItem(formBody)

    }

    const createItem = async (data) => {
        console.log('creating journal entry', data)
        const URL = journalURL
        const options = {
            method: "POST",
            body: data,
            // mode: "cors",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }
        try {
            const createdJournal = await fetch(URL, options)
            console.log("it's working so far", createdJournal)
            const parsedJournal = await createdJournal.json()
            console.log("what is the data I'm trying to send", parsedJournal)

        } catch (err) {
            console.log('error creating journal', err)
        }
        console.log('Journal created', data)
    }

    console.log('smelljournalnewthing')

    return <div>
        <div>
            <h2>New Learning Journal</h2>
            <form>
                <ul>
                    <li>
                        <label htmlFor="hilow">What was your high and low today?</label>
                        <input
                            name="hilow"
                            id="hilow"
                            type="text"
                            placeholder="Enter response here"
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="learn">What Did You Learn at School Today?</label>
                        <textarea
                            name="learn"
                            id="learn"
                            type="textarea"
                            placeholder="Enter response here"
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="fail">Name one thing that you failed at today.</label>
                        <input
                            name="fail"
                            id="fail"
                            type="text"
                            placeholder="Enter response here"
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="failTeach">What did failing teach you?.</label>
                        <input
                            name="failTeach"
                            id="failTeach"
                            type="text"
                            placeholder="Enter response here"
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="failImprove">How can you improve next time?</label>
                        <input
                            name="failImprove"
                            id="failImprove"
                            type="text"
                            placeholder="Enter response here"
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <button onClick={handleSubmit}>Submit</button>
                    </li>
                </ul>
            </form>
            <div>
                <a href="/academy/journal">Back to Learning Journal</a>
            </div>
        </div>
    </div>


}