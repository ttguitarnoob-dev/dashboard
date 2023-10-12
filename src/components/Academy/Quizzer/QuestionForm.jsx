import { useState } from "react"

export default function QuestionForm({ questions, handlePrevious, handleNewQuestion, handleSubmit }) {
    var index = document.getElementById("answer")

    const [formState, setFormState] = useState({
        question: "",
        answer: "",
        a: "",
        b: "",
        c: "",
        d: ""
    })

    function handleAddQuestion(e) {
        e.preventDefault()

        const answer = index.selectedIndex
        const answerField = document.getElementById("answer-field")
        answerField.value = answer
        console.log('what submit', e.target)
        setFormState({
            question: "",
            answer: "",
            a: "",
            b: "",
            c: "",
            d: ""
        })
        console.log('slelcted', answer)

        handleNewQuestion(e)
    }



    return (
        <div className="container">
            <div className="quiz-card">
                <h2>Add A Question</h2>
                <button onClick={handlePrevious}>Backdd</button>
                <form id="question-form" onSubmit={handleAddQuestion}>
                    <div className="quiz-form">
                        <input
                            type="text"
                            className="inputs"
                            placeholder="Question"
                            value={formState.question}
                            onChange={(e) => {
                                setFormState({ ...formState, question: e.target.value })
                            }}
                        />
                        <input
                            type="text"
                            className="inputs"
                            id="answer-field"
                            placeholder="Answer (Make sure this is copy/pasted exactly to the correct choice field below)"
                            style={{ color: 'black', visibility: 'hidden' }}
                            value={formState.answer}
                            onChange={(e) => {
                                setFormState({ ...formState, answer: e.target.value })
                            }}
                        />
                        <h3>Answer Options</h3>
                        <input
                            type="text"
                            className="inputs"
                            placeholder="Choice A"
                            value={formState.a}
                            onChange={(e) => {
                                setFormState({ ...formState, a: e.target.value })
                            }}
                        />
                        <input
                            type="text"
                            className="inputs"
                            placeholder="Choice B"
                            value={formState.b}
                            onChange={(e) => {
                                setFormState({ ...formState, b: e.target.value })
                            }}
                        />
                        <input
                            type="text"
                            className="inputs"
                            placeholder="Choice C"
                            value={formState.c}
                            onChange={(e) => {
                                setFormState({ ...formState, c: e.target.value })
                            }}
                        />
                        <input
                            type="text"
                            className="inputs"
                            placeholder="Choice D"
                            value={formState.d}
                            onChange={(e) => {
                                setFormState({ ...formState, d: e.target.value })
                            }}
                        />
                        <label for="answer">Choose The Correct Answer</label>
                        <select className="inputs" name="answer" id="answer">
                            <option value={`A: ${formState.a}`}>A: {formState.a}</option>
                            <option value={`B: ${formState.b}`}>B: {formState.b}</option>
                            <option value={`C: ${formState.c}`}>C: {formState.c}</option>
                            <option value={`D: ${formState.d}`}>D: {formState.d}</option>
                        </select>
                    </div>
                    <button >Add The Question</button>
                </form>

                <div className="container">
                    <h3>Currently Added Questions:</h3>
                    {questions && questions.map((oneItem, index) => (

                        <div className="detail-card" key={index}>
                            <h3>Question {index + 1}:</h3>
                            <p className="store-p">Question: {oneItem.question}</p>
                            <p className="store-p">Answer: {oneItem.choices[oneItem.answer]}</p>

                            <p className="store-p">Choice A: {oneItem.choices[0]}</p>
                            <p className="store-p">Choice B: {oneItem.choices[1]}</p>
                            <p className="store-p">Choice C: {oneItem.choices[2]}</p>
                            <p className="store-p">Choice D: {oneItem.choices[3]}</p>
                        </div>


                    ))}

                </div>
                <button className="inputs" onClick={handleSubmit}>Finalize The Quiz</button>
            </div>
        </div>
    )
}