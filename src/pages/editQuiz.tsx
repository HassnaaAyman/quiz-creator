import { useParams } from "react-router"
import { IState } from "../store/reducer/quiz"
import { useQuizzesState } from "../store/store"
import { useEffect, useState } from "react"
const EditQuiz = () => {
    const state = useQuizzesState()
    const params = useParams()
   const [currentQuiz, setCurrentQuiz] = useState<Partial<IState>>({})
   useEffect(() => {
       const quiz = state.find(quiz => quiz.id ===Number(params.id))
       if (quiz) {
        setCurrentQuiz(quiz)
           
       }else {
        alert('Quiz not found');
       }
   
   }, [state, params.id])
   console.log(currentQuiz)
   return (
       <p> Hello</p>
   )
}
export default EditQuiz