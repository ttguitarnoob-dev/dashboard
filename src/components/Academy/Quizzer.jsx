import { useState, useEffect } from "react"
import { useFetcher } from "react-router-dom"


export default function Quizzer(props) {

    var initialInput = {
        title: "omgsmelllBUTTTT",
        subject: "larnin'",
        score: 0,
        questions: ["question 1", "omg"]

    }
// const { HandleGet } = props

// const data = useEffect(() => {
//     HandleGet("http://localhost:8000/quizzes")
// }, [])

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted", initialInput)
    const formBody = Object.keys(initialInput).map(key =>
        encodeURIComponent(key) + '=' +
        encodeURIComponent(initialInput[key])).join('&')
    console.log('formbody', formBody)
    HandlePost(initialInput)

}

const HandlePost = async (data) => {
    console.log('start of post function', data.title)
    const postURL = "http://localhost:8000/quizzes"
    var formBody = new FormData()
    formBody.set("title", data.title)
    formBody.set("subject", data.subject)
    formBody.set("score", data.score)
    formBody.set("questions", data.questions)
    console.log('pllezzz', formBody)
    try{
        const options = {
            method: "POST",
            body: JSON.stringify(formBody),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }
      const response = await fetch(postURL, options)
      const results = await response.text()
      console.log('data', data)
      console.log('results', results)
      return results

    } catch(err) {
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