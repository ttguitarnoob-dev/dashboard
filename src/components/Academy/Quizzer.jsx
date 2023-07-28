import { useState, useEffect } from "react"
import { useFetcher } from "react-router-dom"


export default function Quizzer(props) {

    var initialInput = {
        title: "smellass",
        subject: "larnin'",
        
    }
// const { HandleGet } = props

// const data = useEffect(() => {
//     HandleGet("http://localhost:8000/quizzes")
// }, [])


const HandlePost = async (data) => {
    
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



console.log('datataa', data)

    return <div>
        <h2>Hello Quizzerr</h2>
    </div>
}