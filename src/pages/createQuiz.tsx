import React, {useCallback, useState } from 'react';
import { useQuizzesDispatch } from '../store/store';
import Form from '../components/form'
import { useNavigate } from "react-router-dom";
import { IState } from '../store/reducer/quiz';


const initialAnswerState = {
    id: 0,
    is_true: false,
    text: '',
};
const initialQuestionState = {
    answer_id: null,
    answers: [initialAnswerState],
    feedback_false: '',
    feedback_true: '',
    text: '',
};
const CreateQuiz = () => {
    const history = useNavigate();
    const dispatch = useQuizzesDispatch()
  



    const handleQuizCreation = useCallback((quiz: Partial<IState>) => {
        dispatch({
            type: 'add',
            payload: {
                ...quiz,
                id: Math.floor(Math.random() * 10000),
                created: new Date().toISOString().split('T')[0],
            },
        });
        history('/')
    }, [dispatch]);



    return (
        <Form quiz={{
            id: 0,
            created: '',
            modified: null,
            title: '',
            description: '',
            url: '',
            score: null,
            questions_answers: [{...initialQuestionState, id: 0}]
        }} handleSubmit={handleQuizCreation}/>
    );
};
export default CreateQuiz;



