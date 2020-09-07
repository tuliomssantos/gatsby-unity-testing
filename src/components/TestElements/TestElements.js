import React, { useState } from 'react'


const TestElements = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Test Elements</h1>
            <h1 data-testid="counter">{counter}</h1>
            <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
            <button disabled data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
        </div>
    )
}

export default TestElements
