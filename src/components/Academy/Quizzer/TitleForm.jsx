import { useState } from "react"

export default function TitleForm({ data, handleNext }) {

    const [formState, setFormState] = useState(data)


    return (
        <div className="container">
            <div className="quiz-card">
                <h2>Quiz Details</h2>
                <form onSubmit={handleNext}>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Quiz Title"
                        value={formState.title}
                        onChange={(e) => {
                            setFormState({ ...formState, title: e.target.value })
                        }}
                    />
                    <input
                        type="text"
                        className="inputs"
                        placeholder="Quiz Subject"
                        value={formState.subject}
                        onChange={(e) => {
                            setFormState({ ...formState, subject: e.target.value })
                        }}
                    />
                    <input
                        type="date"
                        className="inputs"
                        placeholder="Quiz Title"
                        value={formState.date}
                        onChange={(e) => {
                            setFormState({ ...formState, date: e.target.value })
                        }}
                    />
                    <button className="inputs">Nexxxt</button>
                </form>
            </div>
        </div>
    )
}