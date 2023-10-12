import { useState, useEffect } from "react"
import { useFetcher, useNavigate } from "react-router-dom"
import TitleForm from "./TitleForm"
import QuestionForm from "./QuestionForm"


export default function Quizzer() {

    const navigate = useNavigate()
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        title: "",
        date: "",
        subject: "",
        score: 0,
        questions: []
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        handlePost(data)
    }

    const handleNext = (e) => {
        e.preventDefault()
        if (page === 1) {
            setPage(1)
        } else {
            setData({...data, title: e.target[0].value, subject: e.target[1].value, date: e.target[2].value})
            setPage(prev => prev + 1)
        }
    }

    const handlePrevious = () => {
        if (page === 0){
            setPage(0)
        } else {
            setPage(prev => prev - 1)
        }

    }

    const handleNewQuestion = (e) => {
        e.preventDefault()
        data.questions.push({question: e.target[0].value, answer: parseInt(e.target[1].value), choices:  [e.target[2].value, e.target[3].value, e.target[4].value, e.target[5].value], correct: false, choice: -1})
        
    }

    const handlePost = async (data) => {
        const postURL = "https://api.ttguitarnoob.cloud/quizzes"

        try {
            const options = {
                method: "POST",
                body: JSON.stringify(data),
                mode: "cors",
                headers: {
                    'Content-type': 'application/json'
                }
            }
            const response = await fetch(postURL, options)
            const results = await response.json()
            navigate('/academy/quizzes')
            return results

        } catch (err) {
            console.log("something broke when posting", err)
        }
    }

console.log('daddaa', data)
    let Form
    switch (page) {
        case 0:
            Form = <TitleForm
             data={data}
             handleNext={event => handleNext(event)} />
            break
        case 1:
            Form = <QuestionForm 
            handlePrevious={handlePrevious}
            handleNewQuestion={event => handleNewQuestion(event)}
            questions={data.questions}
            handleSubmit={handleSubmit}
            />
            break
        default:
            Form = <TitleForm />
    }


    return (
        <div className="container">
            <div>
                <h1>Quiz Creator!</h1>
                <a href="/academy/quizzes"><button>Back to Quizzes Page</button></a>
            </div>
            {Form}
        </div>
    )
}