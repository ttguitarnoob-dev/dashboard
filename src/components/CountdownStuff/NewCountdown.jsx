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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked', initialInput)
        //convert input to urlencoded
        const formBody = Object.keys(initialInput).map(key =>
            encodeURIComponent(key) + '=' +
            encodeURIComponent(initialInput[key])).join('&')

        createItem(formBody)
    }

    const createItem = async (data) => {
        console.log('createitem', data)
        const URL = "https://api.ttguitarnoob.cloud/countdowns"
        const options = {
            method: "POST",
            body: data,
            // mode: "cors",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }
        try {
            const createdCountdown = await fetch(URL, options)
            const parsedCountdown = await createdCountdown.json()
            console.log('I guess it worked', parsedCountdown)
            // handleFetch()
        } catch (err) {
            console.log('create todo error', err)
        }
        console.log('itemcreated', data)

    }

    

    return <div>
        <h2>New Countdown</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" placeholder="Enter a name for your countdown" onChange={handleChange}/>

            <label htmlFor="date">Select the date you're looking forward to</label>
            <input type="date" name="date"onChange={handleChange}/>
            <button>Add The Thing</button>
        </form>
    </div>
}