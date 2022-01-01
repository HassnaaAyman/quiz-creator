import { useParams } from "react-router"
import { IState } from "../store/reducer/quiz"
import { useQuizzesDispatch, useQuizzesState } from "../store/store"
import { useCallback, useEffect, useState } from "react"
import QuizzForm from "../components/form"
import { useNavigate } from 'react-router-dom'
const EditQuiz = () => {
    const state = useQuizzesState()
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useQuizzesDispatch();
    const [currentQuiz, setCurrentQuiz] = useState<IState>();

    useEffect(() => {
        const quiz = state.find(quiz => quiz.id === Number(params.id))
        if (quiz) {
            setCurrentQuiz(quiz)
        } else {
            alert('Quiz not found');
        }
    }, [state, params.id]);

    const handleEditQuiz = useCallback((quiz: Partial<IState>) => {
        dispatch({
            type: 'edit',
            payload: {
                ...quiz,
                modified: new Date().toISOString().split('T')[0],
            }
        })
        navigate('/')
    }, [dispatch]);

    return (
        currentQuiz ? <QuizzForm quiz={currentQuiz} handleSubmit={handleEditQuiz} type="edit" /> : <p>Loading...</p>

    )
}
export default EditQuiz