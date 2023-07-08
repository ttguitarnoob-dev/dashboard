export default function NewJournal() {

    var initialInput = {}


    const handleChange = (e) => {
        //take e.target.name and use it as the key for which initialInput to change
        var edited = e.target.name
        initialInput[edited] = e.target.value
        console.log('omgchanged', initialInput)
    }

  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted", initialInput)
    }

    console.log('smelljournalnewthing')

    return <div>
        <div>
            <h2>New Learning Journal</h2>
            <form>
                <ul>
                    <li>
                        <label htmlFor="title">Journal Title</label>
                        <input
                            name="title"
                            id="title"
                            type="text"
                            placeholder="Enter Title"
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="journal">What Did You Learn Today?</label>
                        <textarea
                            name="learn"
                            id="entry"
                            type="textarea"
                            placeholder="Enter response here"
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="journal">Name one thing that you failed at today.</label>
                        <input
                            name="fail"
                            id="entry"
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