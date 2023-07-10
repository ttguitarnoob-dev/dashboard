import { useParams } from "react-router-dom";

export default function JournalDetails() {
    const { id } = useParams()
    console.log('de params', id)

    return <div>
        <h2>Helloooo {id}</h2>
    </div>
}