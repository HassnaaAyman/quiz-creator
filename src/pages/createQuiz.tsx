import {ChangeEvent, useCallback, useState} from 'react';
import {useQuizzesDispatch} from '../store/store';

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
    const dispatch = useQuizzesDispatch();
    const [basicQuizInfo, setBasicQuizInfo] = useState({
        title: '',
        description: '',
        url: '',
        score: null,
    });
    const handleBasicQuizInfoChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setBasicQuizInfo((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        },
        [],
    );
    const [questions, setQuestions] = useState([
        {
            answer_id: null,
            answers: [
                {
                    id: Math.floor(Math.random() * 10000),
                    is_true: false,
                    text: '',
                },
            ],
            feedback_false: '',
            feedback_true: '',
            text: '',
        },
    ]);
    const handleBasicQuestionInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>, index: number) => {
            setQuestions((prevState) =>
                prevState.map((question, i) =>
                    i === index
                        ? {
                              ...question,
                              //@ts-ignore
                              [e.target.name]: e.target.value,
                          }
                        : question,
                ),
            );
        },
        [],
    );
    const handleQuestionAnswersInputChange = useCallback(
        (
            e: ChangeEvent<HTMLInputElement>,
            questionIndex: number,
            answerIndex: number,
        ) => {
            const target = e.target;
            const value =
                target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            setQuestions((prevState) =>
                prevState.map((question, index) => {
                    if (index === questionIndex) {
                        if (
                            name === 'is_true' &&
                            value &&
                            question.answers.find((answer) => answer.is_true)
                        ) {
                            alert(
                                'Can not have two truthy answer for the same question',
                            );
                            return question;
                        }
                        //@ts-ignore
                        question.answers[answerIndex][name] = value;

                        return question;
                    }

                    return question;
                }),
            );
        },
        [],
    );
    const addMoreQuestion = () => {
        setQuestions((prevState) => [...prevState, initialQuestionState]);
    };
    const addMoreAnswer = (i: number) => {
        setQuestions((prevState) =>
            prevState.map((question, index) => {
                if (i === index) {
                    return {
                        ...question,
                        answers: question.answers.concat({
                            ...initialAnswerState,
                            id: Math.floor(Math.random() * 10000),
                        }),
                    };
                }

                return question;
            }),
        );
    };
    const handleQuizCreation = useCallback(() => {
        dispatch({
            type: 'add',
            payload: {
                ...basicQuizInfo,
                questions,
                id: Math.floor(Math.random() * 10000),
                created: new Date().toISOString().split('T')[0],
            },
        });
    }, [basicQuizInfo, questions, dispatch]);
    return (
        <>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    onChange={handleBasicQuizInfoChange}
                />
                <label>description:</label>

                <input
                    type="text"
                    name="description"
                    onChange={handleBasicQuizInfoChange}
                />
                <label>url:</label>
                <input
                    type="text"
                    name="url"
                    onChange={handleBasicQuizInfoChange}
                />
            </div>
            <div>
                {questions.map((question, index) => (
                    <div key={index}>
                <label>question head:</label>
                        
                        <input
                            type="text"
                            name="text"
                            onChange={(e) =>
                                handleBasicQuestionInputChange(e, index)
                            }
                        />
                        <label>feedback_false:</label>
                        <input
                            type="text"
                            name="feedback_false"
                            onChange={(e) =>
                                handleBasicQuestionInputChange(e, index)
                            }
                        />
                       <label>feedback_true:</label>
                        <input
                            type="text"
                            name="feedback_true"
                            onChange={(e) =>
                                handleBasicQuestionInputChange(e, index)
                            }
                        />
                        <br />
                        <br />
                        {question.answers.map((answer, answerIndex) => (
                            <div key={answerIndex}>
                              <label>answer head:</label>
                                <input
                                    type="text"
                                    name="text"
                                    onChange={(e) =>
                                        handleQuestionAnswersInputChange(
                                            e,
                                            index,
                                            answerIndex,
                                        )
                                    }
                                />
                                <input
                                    type="checkbox"
                                    name="is_true"
                                    checked={answer.is_true}
                                    onChange={(e) =>
                                        handleQuestionAnswersInputChange(
                                            e,
                                            index,
                                            answerIndex,
                                        )
                                    }
                                />
                            </div>
                        ))}
                        <button onClick={(e) => addMoreAnswer(index)}>
                            Add More Answer
                        </button>
                    </div>
                ))}
                <button onClick={addMoreQuestion}>Add More Question</button>
            </div>
            <button onClick={handleQuizCreation}>Create Quiz</button>
        </>
    );
};
export default CreateQuiz;
