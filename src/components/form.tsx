import React, { ChangeEvent, useCallback, useState } from 'react';
import { IState } from '../store/reducer/quiz';
import { Container, AnswersContainer, Form} from '../style';


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

const QuizzForm = ({ quiz, handleSubmit}: { quiz: IState, handleSubmit: (quiz: Partial<IState>) => void })=>{
    
    const [basicQuizInfo, setBasicQuizInfo] = useState({
        title: quiz.title ,
        description: quiz.description,
        url: quiz.url,
        score: null,
    });
    
    const [questions, setQuestions] = useState([
        {
            answer_id: null,
            id: Math.floor(Math.random() * 10000),
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
    const handleBasicQuizInfoChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setBasicQuizInfo((prevState: any) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        },
        [],
    );
 
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
                            console.log(question.answers)
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
        setQuestions((prevState) => [...prevState, {...initialQuestionState, id: Math.floor(Math.random() * 10000)}]);
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


    return(
        <Container>
        <h1>Create Quiz</h1>
        <Form>

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

            {questions.map((question, index) => (
                <React.Fragment key={index}>
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

                    {question.answers.map((answer, answerIndex) => (
                        <AnswersContainer key={answerIndex}>
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
                        </AnswersContainer>
                    ))}
                    <button onClick={(e) => addMoreAnswer(index)}>
                        Add More Answer
                    </button>
                </React.Fragment>
            ))}
            <button onClick={addMoreQuestion}>Add More Question</button>
            <button onClick={() => handleSubmit({
                ...basicQuizInfo,
                questions_answers: questions,
            })}>Create Quiz</button>
        </Form>
    </Container>
    )
}


export default QuizzForm; 
