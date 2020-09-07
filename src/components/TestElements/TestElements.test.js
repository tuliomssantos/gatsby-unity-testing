import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestElements from './TestElements'

afterEach(cleanup);

/*
    Testing DOM elements
*/
it('should be equal to 0', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('counter')).toHaveTextContent(0);
});

it('should be enabled', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
});

it('should be disabled', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-down')).toBeDisabled()
});
//or
// it('should be disabled', () => {
//     const { getByTestId } = render(<TestElements />);
//     expect(getByTestId('button-down')).toHaveAttribute('disabled');
// });