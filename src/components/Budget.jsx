import { useState, useEffect } from "react"

export default function Budget() {

    //Page State
    var [budgetList, setBudgetList] = useState([])


    // const budgetURL = "https://api.ttguitarnoob.cloud/budgets"
    const budgetURL = "http://localhost:8000/budgets"

    async function handleFetch() {
        try {
            const URL = budgetURL
            const options = {
                method: "GET"
            }
            const response = await fetch(URL, options)
            const results = await response.json()
            var array = results.map(budget => budget)

            

            setBudgetList(array)
            console.log('budget', budgetList)
        } catch (err) {
            console.log('something bad happened when fetching', err)
        }

    }

    //handleFetch function call
    useEffect(() => {
        handleFetch()
    }, [])



    return <div className="budget-page">

        <h1 className="travnav">{budgetList[1].billName}</h1>
        <p></p>

    </div>
}