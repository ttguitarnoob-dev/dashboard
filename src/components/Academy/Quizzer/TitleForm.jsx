import { useState } from "react"

export default function TitleForm({ data, handleNext }){

    const [formState, setFormState] = useState(data)


    return(
        <div>
            <h2>Quiz Details</h2>
            <form onSubmit={handleNext}>
                <input
                type="text"
                placeholder="Quiz Title"
                value={formState.title}
                onChange={(e) => {
                    setFormState({ ...formState, title: e.target.value})
                }}
                />
                <input
                type="text"
                placeholder="Quiz Subject"
                value={formState.subject}
                onChange={(e) => {
                    setFormState({ ...formState, subject: e.target.value})
                }}
                />
                <input
                type="date"
                placeholder="Quiz Title"
                value={formState.date}
                onChange={(e) => {
                    setFormState({ ...formState, date: e.target.value})
                }}
                />
                <button>Nexxxt</button>
            </form>
            
        </div>
    )
}