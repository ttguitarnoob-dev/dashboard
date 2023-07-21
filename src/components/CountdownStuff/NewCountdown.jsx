export default function NewCountdown() {
    


    var initialInput = {}
    const journalURL = "https://api.ttguitarnoob.cloud/countdowns"



    const handleChange = (e) => {
        //take e.target.name and use it as the key for which initialInput to change
        var edited = e.target.name
        console.log('name?', e.target.value)
        initialInput[edited] = e.target.value
        console.log('omgchanged', initialInput)
        // toTimestamp(initialInput.date)
    }

    

    return <div>
        <h2>New Countdown</h2>
        <form>
            <input type="text" name="title" id="title" placeholder="Enter a name for your countdown" onChange={handleChange}/>

            <label htmlFor="date">Select the date you're looking forward to</label>
            <input type="date" name="date"onChange={handleChange}/>
        </form>
    </div>
}