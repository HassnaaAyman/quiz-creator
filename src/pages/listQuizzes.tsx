import { Link } from 'react-router-dom';
import {useQuizzesState} from '../store/store';

const ListQuizzes = () => {
    const state = useQuizzesState();

    
    return (
        <div className="App">
            {state.map((quiz) => {
                console.log(quiz)
                return (
                <div key={quiz.id}>
                    <button>
                        <Link to="/quizzes/create">Add Quiz</Link>
                    </button>
                    <h1>quiz no: {quiz.id}</h1>
                    <h2>{quiz.title}</h2>
                    <h3>{quiz.description}</h3>
                    <h2>Created At: {quiz?.created}</h2>
                    <video src={quiz.url} width="320" height="240" controls />
                    {quiz.questions_answers.map((question_answer) => (
                        <>
                            <h1>{question_answer.text}</h1>
                            {question_answer.answers.map((answer) => (
                                <div>
                                    <h5>answer.text</h5>
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
                </div>
            )})}
        </div>
    );
};

export default ListQuizzes;
