import { useState, useEffect } from "react"
import { useFetcher } from "react-router-dom"
import TitleForm from "./TitleForm"
import QuestionForm from "./QuestionForm"


export default function Quizzer(props) {

    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        title: "",
        date: "",
        subject: "",
        score: 0,
        questions: []
    })

    var initialInput = {
        title: "SMELLASS",
        subject: "looornan'",
        score: 0,
        questions: [{
            question: "what is your favorite color",
            answer: "a",
            choice: "a",
            choices: { a: "orange", b: "your other mom", c: "black", d: "laksdjf" }
        },
        {
            question: "what is your favorite FOOD",
            answer: "b",
            choice: "a",
            choices: { a: "orange", b: "your other mom", c: "MACARONI AND CHEESE", d: "oidjfoi" }
        }
        ]

    }
    // const { HandleGet } = props

    // const data = useEffect(() => {
    //     HandleGet("http://localhost:8000/quizzes")
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted", initialInput)

        // HandlePost(initialInput)
    }

    const handleNext = (e) => {
        if (page === 1) {
            setPage(1)
        } else {
            console.log('poooo', e.target[1].value)
            setData({title: e.target[0].value, subject: e.target[1].value, date: new Date(e.target[2].value).toLocaleDateString()})
            setPage(prev => prev + 1)
            console.log('daaate', data)
        }
    }

    const handlePrevious = () => {
        if (page === 0){
            setPage(0)
        } else {
            setPage(prev => prev - 1)
        }

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


    let Form
    switch (page) {
        case 0:
            Form = <TitleForm page={page} handleNext={event => handleNext(event)} />
            break
        case 1:
            Form = <QuestionForm />
            break
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