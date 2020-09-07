//import { store } from '../../../wrap-with-provider';
import * as actionTypes from './actionTypes';



export const incrementCounter = (dispatch) => {
    dispatch({ type: actionTypes.INCREMENT_COUNTER });
}

export const decrementCounter = (dispatch) => {
    dispatch({ type: actionTypes.DECREMENT_COUNTER });
}
