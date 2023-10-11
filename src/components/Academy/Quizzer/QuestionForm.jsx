import { useState } from "react"

export default function QuestionForm({handlePrevious, handleNewQuestion}){

    const [formState, setFormState] = useState({
        question: "",
        answer: "",
        a: "",
        b: "",
        c: "",
        d: ""
    })

    function handleAddQuestion(e){
        console.log('what submit', formState)
        setFormState({
            question: "",
        answer: "",
        a: "",
        b: "",
        c: "",
        d: ""
        })
        handleNewQuestion(e)
    }

    return(
        <div>
            <h2>Add A Question</h2>
            <button onClick={handlePrevious}>Backdd</button>
            <form id="question-form" onSubmit={handleAddQuestion}>
                <input
                type="text"
                placeholder="Question"
                value={formState.question}
                onChange={(e) => {
                    setFormState({ ...formState, question: e.target.value})
                }}
                />
                <input
                type="text"
                placeholder="Answer (Make sure this is copy/pasted exactly to the correct choice field below)"
                value={formState.answer}
                onChange={(e) => {
                    setFormState({ ...formState, answer: e.target.value})
                }}
                />
                <input
                type="text"
                placeholder="Choice A"
                value={formState.a}
                onChange={(e) => {
                    setFormState({ ...formState, a: e.target.value})
                }}
                />
                <input
                type="text"
                placeholder="Choice B"
                value={formState.b}
                onChange={(e) => {
                    setFormState({ ...formState, b: e.target.value})
                }}
                />
                <input
                type="text"
                placeholder="Choice C"
                value={formState.c}
                onChange={(e) => {
                    setFormState({ ...formState, c: e.target.value})
                }}
                />
                <input
                type="text"
                placeholder="Choice D"
                value={formState.d}
                onChange={(e) => {
                    setFormState({ ...formState, d: e.target.value})
                }}
                />
                <button >Add The Question</button>
            </form>
        </div>
    )
}