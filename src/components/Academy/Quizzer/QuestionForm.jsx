import { useState } from "react"

export default function QuestionForm({ questions, handlePrevious, handleNewQuestion, handleSubmit }){

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
                <label for="answer">Choose The Correct Answer</label>
                <select name="answer" id="answer">
                    <option value={`A: ${formState.a}`}>A: {formState.a}</option>
                </select>
                <button >Add The Question</button>
            </form>
            <button onClick={handleSubmit}>Finalize The Quiz</button>
            <div>
                <h3>Currently Added Questions:</h3>
                {questions && questions.map((oneItem, index) => (
                    
                    <div className="store-div" key={index}>
                        <h3>Question {index + 1}:</h3>
                        <p className="store-p">Question: {oneItem.question}</p>
                        <p className="store-p">Answer: {oneItem.answer}</p>
                        <p className="store-p">Choice A: {oneItem.choices.a}</p>
                        <p className="store-p">Choice B: {oneItem.choices.b}</p>
                        <p className="store-p">Choice C: {oneItem.choices.c}</p>
                        <p className="store-p">Choice D: {oneItem.choices.d}</p>
                </div>

                
            ))}
            </div>
        </div>
    )
}