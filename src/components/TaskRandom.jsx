import { useState, useEffect } from "react"

export default function TaskRandom() {

    //App State
    var [task, setTask] = useState("What will it be???!!!")
    var [tasklist, setTaskList] = useState([])


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
            item)
        
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
        const index = [Math.floor(Math.random() * length)]
        const delUrl = `http://10.24.24.165:8000/todos/${tasklist[index]._id}`
        task = <ul><li><h2>{tasklist[index].item}</h2></li><li><button className="delete-button" onClick={() => handleDelete(delUrl)}>✅</button></li></ul>
        setTask(task)
    }

    async function handleDelete(URL) {
        console.log("delete this bro", URL)
        try{
            const response = await fetch(URL, { method: "DELETE"})
            const deletedTask = await response.json()
            const updatedTasklist = tasklist.filter(task => task._id !== deletedTask._id)
            setTaskList(updatedTasklist)
            handleFetch()
        } catch(err) {
            console.log('Something broke when you tried to delete that:', err)
        }
    }

    const handleAddItem = (e) => {
        initialInput.item = e.target.value
        console.log('omg', initialInput)
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
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
            // handleFetch()
        } catch (err) {
            console.log('create todo error', err)
        }
        console.log('itemcreated', data)

    }


    return <div className="task-random">
        <div className="spinner-container">
            <div className="spinner">
                <h2>Tasky Thing</h2>
                
                <button className="random-button" onClick={Spin}>Your Next Task Awaits!</button>
                <div>
                    {task}
                </div>
                <div className="create-form">
                    <form onSubmit={handleSubmit}>
                        <h2>Add A Thing</h2>
                        <ul className="form">
                            <li>
                                <label htmlFor="item">Thing Name</label>
                                <input
                                    name="item"
                                    id="title"
                                    type="text"
                                    placeholder="New Todo Thing"
                                    onChange={handleAddItem}
                                />
                            </li>
                            <li>
                                <button className="random-button">Add The Thing</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
}