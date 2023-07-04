import { useState } from "react"

export default function TaskRandom() {

    var [task, setTask] = useState("Your Next Task Awaits!")

    const tasks = ["Cat Box", "Sweep", "Poo", "Pet Your Cat", "Pet Your Husband", "Feed The Fishes"]

    let initialInput = {
        item: ""
    }

    function Spin() {
        const length = tasks.length
        task = tasks[Math.floor(Math.random() * length)]
        console.log('tasky', task)
        setTask(task)
    }

    const handleAddItem = (e) => {
        initialInput.item = e.target.value
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("clicked", initialInput)
        createItem(initialInput)
    }

    const createItem = async (data) => {
        const URL = "http://10.24.24.165:8000/todos"
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            mode: "cors",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            }
        }
        try {
            const createdTodo = await fetch(URL, options)
            console.log('I guess it worked')
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
                                name="name"
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