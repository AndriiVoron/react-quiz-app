import { Dispatch  } from "react";

export enum ACTION_TYPE {
    SET_QUIZE = 'SET_QUIZE',
    SET_ANSWER = 'SET_ANSWER',
    STEP_BACK = 'STEP_BACK',
}

export interface QuizeStateProviderProps {
    children: React.ReactNode;
}

export interface StateProps {
    currentStep: number,
    totalSteps: number,
    questions: ObjectWithAnyAtributes[],
    userAnswers: ObjectWithAnyAtributes[],
}

interface ObjectWithAnyAtributes {
    [key: string]: any;
}
export interface PaylodProps {
    currentPage?: number, 
    totalPages?: number, 
    activeColumnData: ObjectWithAnyAtributes,
}
export interface ActionProps {
    type: ACTION_TYPE,
    payload?: ObjectWithAnyAtributes | PaylodProps ;
}

export interface QuizeContextIntreface {
    state: StateProps,
    dispatch: Dispatch<ActionProps>,
}

export const initialState = {
    currentStep: 1,
    totalSteps: 10,
    questions: [],
    userAnswers: [],
}
