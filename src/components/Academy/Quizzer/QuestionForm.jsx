export default function QuestionForm(){

    return(
        <div>
            <h2>Add A Question</h2>
            <form>
                <input
                type="text"
                placeholder="Question"
                />
                <input
                type="text"
                placeholder="Answer (Make sure this is copy/pasted exactly to the correct choice field below)"
                />
                <input
                type="text"
                placeholder="Choice A"
                />
                <input
                type="text"
                placeholder="Choice B"
                />
                <input
                type="text"
                placeholder="Choice C"
                />
                <input
                type="text"
                placeholder="Choice D"
                />
            </form>
        </div>
    )
}