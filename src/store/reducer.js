import * as actionTypes from './actions/actionTypes'

export const initalState = {
    counter: 0
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER: {

            return {
                ...state,
                counter: state.counter+1
            }
        }
        case actionTypes.DECREMENT_COUNTER: {

            return {
                ...state,
                counter: state.counter-1
            }
        }
        default:
            return state;
    }
}

export default reducer;