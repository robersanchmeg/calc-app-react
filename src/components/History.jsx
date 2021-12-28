import React from "react"
import PropTypes from "prop-types"



const renderHistory = (history) => {
    const numbersHistory = []
    for (let i = history.length - 1; i >= 0; i--) {
        numbersHistory.push(i)
    }
    let spans = numbersHistory.map(number => (
        <tr key={number}>
            <td>{`${history[number].split("=")[1]} = ${history[number].split("=")[0]}`}</td>
        </tr>
    ))
    return spans
}

const History = ({ history }) => (
    <section className="history">
        <table>
            <thead>
                <tr>
                    <th>History</th>
                </tr>
            </thead>
            <tbody>
                {renderHistory(history)}
            </tbody>
        </table>
    </section>
)

History.propTypes = {
    history: PropTypes.array.isRequired
}

export default History