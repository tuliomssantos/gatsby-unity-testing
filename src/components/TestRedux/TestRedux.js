import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    incrementCounter,
    decrementCounter
} from '../../store/actions'


const TestRedux = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Test Redux</h1>
            <h1 data-testid="counter">{counter}</h1>
            <button data-testid="button-up" onClick={() => {
                incrementCounter(dispatch)
            }}>
                Up
            </button>
            <button data-testid="button-down" onClick={() => decrementCounter(dispatch)}>
                Down
            </button>
        </div>
    )
}

export default TestRedux
