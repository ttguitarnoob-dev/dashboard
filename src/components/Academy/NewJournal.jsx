export default function NewJournal() {

    var initialInput = {
        title: "",
        entry: ""
    }


    const handleAddTitle = (e) => {
        initialInput.title = e.target.value
        console.log('omgtitle', initialInput)
    }

    const handleAddEntry = (e) => {
        initialInput.entry = e.target.value
        console.log("entryyy", initialInput)
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
                            onChange={handleAddTitle}
                        />
                    </li>
                    <li>
                        <label htmlFor="journal">Journal Entry</label>
                        <textarea
                            name="entry"
                            id="entry"
                            type="textarea"
                            placeholder="What did you learn today?"
                            onChange={handleAddEntry}
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