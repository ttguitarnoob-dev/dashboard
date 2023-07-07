import { useState, useEffect } from "react"

export default function Budget(props) {
   

    //Page State
    var [budgetList, setBudgetList] = useState([])


    const budgetURL = "https://api.ttguitarnoob.cloud/budgets"
  

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

        } catch (err) {
            console.log('something bad happened when fetching', err)
        }

    }

    //handleFetch function call
    useEffect(() => {
        handleFetch()
    }, [])



    return <div className="budget-page">

        <div>
            <table>
                <tr>
                    <th>Expense</th>
                    <th>How Much</th>
                    <th>Due Date</th>
                    <th>Paid Date</th>
                </tr>
                {budgetList && budgetList.map((budget, index) => (
                    <tr key={budget._id}>
                        <td>{budget.billName}</td>
                        <td>{budget.howMuch}</td>
                        <td>{budget.dueDate}</td>
                        <td>{budget.paidDate}</td>
                    </tr>
                ))}
            </table>
            
        </div>

    </div>
}