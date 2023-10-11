export default function TitleForm({handleNext}){
    return(
        <div>
            <h2>Quiz Details</h2>
            <form onSubmit={handleNext}>
                <input
                type="text"
                placeholder="Quiz Title"
                />
                <input
                type="text"
                placeholder="Quiz Subject"
                />
                <input
                type="date"
                placeholder="Quiz Title"
                />
                <button>Nexxxt</button>
            </form>
            
        </div>
    )
}