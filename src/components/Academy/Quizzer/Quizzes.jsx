import { useEffect, useState } from "react"

export default function Quizzes() {

    const URL = "https://api.ttguitarnoob.cloud/quizzes"
    const [quizzes, setQuizzes] = useState()


    async function handleFetch() {
        const options = {
            method: "GET"
        }

        const responst = await fetch(URL, options)
        const data = await responst.json()
        setQuizzes(data)

    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <div className="container">
            <h1>Quizzes</h1>
            <a href="/academy/quizzer"><button>New Quiz</button></a>
            <div className="thing">
                {quizzes && quizzes.map((oneQuiz, index) => (

                    <div className="detail-card" key={index}>
                        <p>Title: {oneQuiz.title}</p>
                        <p>Subject: {oneQuiz.subject}</p>
                        <p>{new Date(oneQuiz.date).toLocaleDateString()}</p>
                        <p>Number of Questions: {oneQuiz.questions.length}</p>
                        <p>Score: {oneQuiz.score}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}