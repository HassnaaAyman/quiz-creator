import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useQuizzesState} from '../store/store';

const ListQuizzes = () => {
    const state = useQuizzesState();

    
    return (
        <Container>
            <Head>Quizzes</Head>
            {state.map((quiz) => 
                (
                <React.Fragment key={quiz.id}>
                    <Button>
                        <StyledLink to="/quizzes/create">Add Quiz</StyledLink>
                    </Button>
                    <QuizCard>
                       <CardHeader>
                          <TitleContainer>
                              <Title>quiz no: {quiz.id}</Title>
                          </TitleContainer>
                          <ButtonContainer>
                              <Button>+</Button>
                          </ButtonContainer>
                       </CardHeader>
                    </QuizCard>
                    <h2>{quiz.title}</h2>
                    <h3>{quiz.description}</h3>
                    <h2>Created At: {quiz?.created}</h2>
                    <video src={quiz.url} width="320" height="240" controls />
                    {quiz.questions_answers.map((question_answer) => (
                        <>
                            <h1>{question_answer.text}</h1>
                            {question_answer.answers.map((answer) => (
                                <div>
                                    <h5>{answer.text}</h5>
                                    <input
                                        type="radio"
                                        value={answer.text}
                                        checked={answer.is_true}
                                    />
                                </div>
                            ))}
                            <p>{question_answer.feedback_false}</p>
                            <p>{question_answer.feedback_true}</p>
                        </>
                    ))}
                    <p>score: {quiz.score}</p>
                </React.Fragment>
            ))}
        </Container>
    );
};

export default ListQuizzes;


export const Container = styled.div`
 display:flex;
 flex-direction: column;
 margin: 25px auto;
 align-self:center;
 width:90%;
`

export const Head = styled.h1`
 color:black;
 text-align:center;
 font-weight:bold;
 margin-bottom: 20px;
`
export const Button = styled.button`
width: 17%;
height: 45px;
background-color: black;
`
export const StyledLink = styled(Link)`
 color:white;
 text-decoration: none;
 font-weight:bold;
`
export const QuizCard = styled.div`
box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
border-radius: 4px;
max-width: 345px;
`
export const CardHeader = styled.div`
display: flex;
padding: 16px;
align-items: center;
`
export const TitleContainer = styled.div`
flex: 1 1 auto;
`
export const Title = styled.div`
    font-size: 1.5rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
`


export const ButtonContainer = styled.div`
    flex: 0 0 auto;
    align-self: flex-start;
    margin-top: -8px;
    margin-right: -8px;
`