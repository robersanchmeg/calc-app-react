/* eslint no-eval: 0 */
// imports
import React, { useState } from "react"
import words from "lodash.words"
import Result from "./components/Result"
import MathOperations from "./components/MathOperations"
import Functions from "./components/Functions"
import Numbers from "./components/Numbers"
import History from "./components/History"
import './App.css'

let history = []
// generate Arrow function 
const App = () => {
    const [stack, setStack] = useState("")


    const items = words(stack, /[^-^+^*^/]+/g)

    debugger
    let value = items.length > 0
        ? items[items.length - 1]
        : "0"
    return (
        <div>
            <main className='react-calculator'>
                <Result value={value} />
                <Numbers
                    onClickNumber={number => setStack(`${stack}${number}`)}
                />
                <Functions
                    onContentClear={() => {
                        debugger
                        history = []
                        setStack("")
                    }}
                    onDelete={() => {
                        if (stack.length > 0) {
                            const newStack = stack.substring(0, stack.length - 1)
                            setStack(newStack)
                        }
                    }} />
                <MathOperations
                    onClickOperation={operation => setStack(`${stack}${operation}`)}
                    onClickEqual={() => {
                        if (stack !== "") {
                            let result = eval(stack).toString()
                            history.push(`${stack} = ${result}`)
                            setStack(result)
                        }
                    }}
                />
            </main>
            <main className="react-history">
                <History history={history} />
            </main>
        </div>
    )
}

// export
export default App 