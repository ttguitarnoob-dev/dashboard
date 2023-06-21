export default function TaskRandom(){

    const tasks = ["Cat Box", "Sweep", "Poo", "Pet Your Cat", "Pet Your Husband"]
    const length = tasks.length
    var task = tasks[Math.floor(Math.random() * length)]
    console.log('tasky', task)

    return <div>
        <h2>Spin the not wheel to see your next task!</h2>
    </div>
}