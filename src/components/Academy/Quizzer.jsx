import { useState, useEffect } from "react"
import { useFetcher } from "react-router-dom"


export default function Quizzer(props) {

    var initialInput = {
        title: "smellass",
        subject: "larnin'",
        score: 32,
        questions: [
            {
                question: "what is the airspeed velocity of an unladen sparrow",
                answer: "a",
                choice: "a",
                choices:
                    {
                        a: "smellass",
                        b: "ugly",
                        c: "wow that smells",
                        d: "omg wow"
                    },
                correct: true
            },
            
        ]

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
    
    HandlePost(formBody)

}

const HandlePost = async (data) => {
    const postURL = "http://localhost:8000/quizzes"
    try{
        const options = {
            method: "POST",
            body: data,
            // mode: "cors",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }
      const response = await fetch(postURL, options)
      const results = await response.json()
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