import React, { useState } from 'react'

const TestAsync = () => {
    const [counter, setCounter] = useState(0);

    const delayCount = () => (
        setTimeout(() => {
            setCounter(counter + 1)
        }, 500)
    )

    return (
        <div>
            <h1 data-testid="counter">{counter}</h1>
            <button data-testid="button-up" onClick={delayCount}> Up</button>
            <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
        </div>
    )
}

export default TestAsync
