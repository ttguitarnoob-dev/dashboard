import { useState } from "react"

export default function TaskRandom() {

    var [task, setTask] = useState("Your Next Task Awaits!")

    const tasks = ["Cat Box", "Sweep", "Poo", "Pet Your Cat", "Pet Your Husband"]
    
    function Spin() {
        const length = tasks.length
        task = tasks[Math.floor(Math.random() * length)]
        console.log('tasky', task)
        setTask(task)
    }


    return <div>
        <h2>Spin the not wheel to see your next task!</h2>
        <button onClick={Spin}>{task}</button>
        
    </div>
}