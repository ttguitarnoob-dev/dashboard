import { useState, useEffect } from "react"

export default function TaskRandom() {

    var [task, setTask] = useState("Your Next Task Awaits!")
    var [tasklist, setTaskList] = useState([])

    var tasks = []

    //Fetch current tasks
    const handleFetch = async () => {
        const URL = "http://10.24.24.165:8000/todos"
        const options = {
            method: "GET"
        }
        const response = await fetch(URL, options)
        const results = await response.json()
        //Create array by iterating through json results and filtering out each item key
        const array = results.map(item =>
            item.item)
        setTaskList(array)
    }

    //handleFetch function call
    useEffect(() => {
        handleFetch()
    }, [])

    //Form input
    let initialInput = {
        item: ""
    }

    function Spin() {
        const length = tasklist.length
        task = tasklist[Math.floor(Math.random() * length)]
        setTask(task)
    }

    const handleAddItem = (e) => {
        initialInput.item = e.target.value
        console.log('omg', initialInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("clicked", initialInput)
        //convert input to urlencoded
        const formBody = Object.keys(initialInput).map(key => 
            encodeURIComponent(key) + '=' +
            encodeURIComponent(initialInput[key])).join('&')
            
        createItem(formBody)
    }

    const createItem = async (data) => {
        console.log('createitem', data)
        const URL = "http://10.24.24.165:8000/todos"
        const options = {
            method: "POST",
            body: data,
            // mode: "cors",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }
        try {
            const createdTodo = await fetch(URL, options)
            const parsedTodo = await createdTodo.json()
            console.log('I guess it worked', parsedTodo)
        } catch (err) {
            console.log('create todo error', err)
        }
        console.log('itemcreated', data)

    }


    return <div className="task-random">
        <div className="spinner-container">
            <div className="spinner">
                <h2>Spin the not wheel to see your next task?!</h2>
                <button className="random-button" onClick={Spin}>{task}</button>
            </div>
        </div>

        <div className="spinner-container">
            <div className="create-form">
                <form onSubmit={handleSubmit}>
                    <h2>Add A Thing</h2>
                    <ul className="form">
                        <li>
                            <label htmlFor="item">Item Name</label>
                            <input
                                name="item"
                                id="title"
                                type="text"
                                placeholder="New Todo Thing"
                                onChange={handleAddItem}
                            />
                        </li>
                        <li>
                            <button>Add The Thing</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
}