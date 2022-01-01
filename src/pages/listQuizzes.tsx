import React from 'react';
import { useQuizzesState } from '../store/store';
import { Container, Head, Button, StyledLink, QuizCard, CardHeader, TitleContainer, Title, ButtonContainer, EditButton, VideoContainer, ContentContainer, DescriptionContainer, AnswersContainer, Footer } from '../style';
import ReactPlayer from 'react-player'

const ListQuizzes = () => {
    const state = useQuizzesState();

    return (
        <Container>
            <Head>Quizzes</Head>

            <Button>
                <StyledLink to="/quizzes/create">Add Quiz</StyledLink>
            </Button>

            {state.map((quiz) =>
            (
                <React.Fragment key={quiz.id}>

                    <QuizCard>
                        <CardHeader>
                            <TitleContainer>
                                <Title>quiz no: {quiz.id}</Title>
                            </TitleContainer>
                            <ButtonContainer>
                                <EditButton>
                                    <StyledLink to={`/quizzes/${quiz.id}/edit`}>+</StyledLink>
                                </EditButton>
                            </ButtonContainer>
                        </CardHeader>
                        <VideoContainer>
                            <ReactPlayer url={quiz.url} width="100%"/>
 
                            {/* <video src={quiz.url} width="100%" controls /> */}
                        </VideoContainer>
                        <ContentContainer>
                            <DescriptionContainer>
                                <h2>Title: {quiz.title}</h2>
                                <h3>Description: {quiz.description}</h3>
                            </DescriptionContainer>
                            {quiz.questions_answers.map((question_answer) => (
                                <React.Fragment key={question_answer.id}>
                                    <h1>{question_answer.text}</h1>
                                    {question_answer.answers.map((answer) => (
                                        <AnswersContainer key={answer.id}>
                                            <h5>{answer.text}</h5>
                                            <input
                                                type="radio"
                                                value={answer.text}
                                                defaultChecked={answer.is_true}
                                            />
                                        </AnswersContainer>
                                    ))}
                                    <p>{question_answer.feedback_false}</p>
                                    <p>{question_answer.feedback_true}</p>
                                </React.Fragment>
                            ))}
                        </ContentContainer>
                        <Footer>
                            <p>score: {quiz.score !== null ? quiz.score : "-"}</p>
                            <h2>Created At: {quiz?.created}</h2>
                        </Footer>
                    </QuizCard>
                </React.Fragment>
            ))}
        </Container>
    );
};
export default ListQuizzes;

