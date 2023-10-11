import { useState, useEffect } from "react"
import { useFetcher } from "react-router-dom"
import TitleForm from "./TitleForm"
import QuestionForm from "./QuestionForm"


export default function Quizzer(props) {

    const questionForm = document.getElementById("question-form")
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        title: "",
        date: "",
        subject: "",
        score: 0,
        questions: []
    })

    
    // const { HandleGet } = props

    // const data = useEffect(() => {
    //     HandleGet("http://localhost:8000/quizzes")
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted")

        // HandlePost(initialInput)
    }

    const handleNext = (e) => {
        e.preventDefault()
        if (page === 1) {
            setPage(1)
        } else {
            console.log('poooo', e.target[1].value)
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
        data.questions.push({question: e.target[0].value, answer: e.target[1].value, choices: {a: e.target[2].value, b: e.target[3].value, c: e.target[4].value, d: e.target[5].value}})
        console.log('new question added', data)
    }

    const HandlePost = async (data) => {
        console.log('start of post function', data.title)
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
            console.log('data', data)
            console.log('results', results)
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
            />
            break
        default:
            Form = <TitleForm />
    }


    return (
        <div>
            <div>
                <button onClick={handlePrevious}>Back</button>
                <button onClick={handleNext}>Next</button>
                
            </div>
            {Form}
        </div>
    )
}