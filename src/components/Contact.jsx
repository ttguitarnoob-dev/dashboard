import { useEffect, useState } from "react"

export default function Contact() {

    const URL = "https://api.ttguitarnoob.cloud/majestics"
    const [items, setItems] = useState()

    async function handleFetch() {
        try {
            const options = {
                method: "GET"
            }

            const response = await fetch(URL, options)
            const results = await response.json()
            var array = results.map(journal => journal)
            console.log("poohole", array)

            setItems(array)

        } catch (err) {
            console.log('something bad happened when fetching', err)
        }

    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <section>
            <h1>These people contacted you.  Hopefully at some point one of them is not my testes.</h1>
            <ul>
                {items && items.map((oneItem, index) => (

                    <div className="customer-message" key={oneItem.name + index} >
                        <li>
                            <p>Name: {oneItem.name}</p>
                            <p>Email:  <a href={`mailto:${oneItem.email}`}>{oneItem.email}</a></p>
                            <p>Phone:  <a href={`tel:${oneItem.phone}`}>{oneItem.phone}</a></p>
                            <p>Location: {oneItem.location}</p>
                            <p>Inquiry: {oneItem.help}</p>
                        </li>
                    </div>

                ))}
            </ul>
        </section>
    )
}