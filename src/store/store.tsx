import React from 'react';
import {IState, quizReducer} from './reducer/quiz';
import {initialQuizState} from './state';

const {createContext, useReducer, useContext} = React;

const QuizStateContext = createContext<IState[]>([]);
const QuizDispatch = createContext<any>({});

export const useQuizzReducer = () => {
    return useReducer(quizReducer, initialQuizState);
};

export const QuizzesProvider: React.FC = ({children}) => {
    const [state, dispatch] = useQuizzReducer();

    return (
        <QuizDispatch.Provider value={dispatch}>
            <QuizStateContext.Provider value={state}>
                {children}
            </QuizStateContext.Provider>
        </QuizDispatch.Provider>
    );
};

export const useQuizzesState = () => {
    const state = useContext(QuizStateContext);
    if (state === undefined) {
        throw new Error(
            'useRegisterState must be used within a RegisterProvider',
        );
    }
    return state;
};

export const useQuizzesDispatch = () => {
    const context = useContext(QuizDispatch);
    if (context === undefined) {
        throw new Error(
            'useRegisterDispatch must be used within a RegisterProvider',
        );
    }
    return context;
};
