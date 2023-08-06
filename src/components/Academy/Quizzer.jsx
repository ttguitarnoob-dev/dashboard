import { useState, useEffect } from "react"
import { useFetcher } from "react-router-dom"


export default function Quizzer(props) {

    var initialInput = {
        title: "pooey",
        subject: "larnin'",
        score: 87,
        questions: [1, 2, 3, 4, 5, 6, 7]

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
    
    HandlePost(initialInput)

}

const HandlePost = async (data) => {
    console.log('start of post function', data)
    const postURL = "http://localhost:8000/quizzes"
    try{
        const options = {
            method: "POST",
            body: data,
            // mode: "cors",
            // headers: {
            //     "Content-type": "application/x-www-form-urlencoded"
            // }
        }
      const response = await fetch(postURL, options)
      const results = await response.text()
      console.log('relusts', results)
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