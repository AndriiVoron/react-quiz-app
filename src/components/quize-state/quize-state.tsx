import React, { useContext, useReducer } from 'react';
import { 
    initialState, 
    StateProps, 
    QuizeStateProviderProps, 
    ACTION_TYPE,
    QuizeContextIntreface, 
    ActionProps, 
 } from './constants';

const QuizeState = React.createContext<QuizeContextIntreface>({
    state: initialState,
    dispatch: () => null,
});

export const useQuizeState = () => {
    return useContext(QuizeState);
}

const pageStateReducer = (state: StateProps, action: ActionProps): StateProps => {
    switch(action.type) {
        case ACTION_TYPE.SET_QUIZE:
            return {
                ...state, 
                ...action.payload,
            };
        case ACTION_TYPE.SET_ANSWER:
            return {
                ...state,
                ...action.payload, 
            };
        case ACTION_TYPE.STEP_BACK:
            return {
                ...state, 
                ...action.payload,
            };
        default: return state;
    }
}

export const QuizeStateProvider: React.FC<QuizeStateProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(pageStateReducer, initialState)

    const pageStateValue: QuizeContextIntreface = {
        state,
        dispatch
    }

    return (
        <QuizeState.Provider value={pageStateValue}>
            { children }
        </QuizeState.Provider>
    )
}
