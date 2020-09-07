import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import TestRedux from './TestRedux'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../../store/reducer'
import { initalState } from '../../store/reducer'

afterEach(cleanup);

const renderWithRedux = (
    component,
    { initialState, store = createStore(reducer, initialState) }
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
}


it('checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />, initalState);
    expect(getByTestId('counter')).toHaveTextContent(0);
});

it('increments the counter through redux', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />, {initialState: {counter: 0 }});
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent('1')
})