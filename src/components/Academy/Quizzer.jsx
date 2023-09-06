import { useState, useEffect } from "react"
import { useFetcher } from "react-router-dom"


export default function Quizzer(props) {

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

        HandlePost(initialInput)

    }

    const HandlePost = async (data) => {
        console.log('start of post function', data.title)
        const postURL = "http://localhost:8000/quizzes"

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





    return <div>
        <h2>Hello Quizzerr</h2>
        <form onSubmit={handleSubmit}>
            <button>Submit!</button>
        </form>
    </div>
}