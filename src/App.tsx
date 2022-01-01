// import React, { useReducer, useState } from 'react';
// import './App.css';
// import { Link } from "react-router-dom";
// import { initialQuizState } from './reducers/state';
// import {  quizReducer } from './reducers';

// function App() {
//   const [state, dispatch] = useReducer(quizReducer, initialQuizState);

//   return (
//       <div className="App">
//         {state.map(quiz=>(
//           <>
//            <button><Link to="/quizForm">Add Quiz</Link></button>
//           <h1>quiz no: {quiz.id}</h1>
//           <h2>{quiz.title}</h2>
//           <h3>{quiz.description}</h3>
//           <h2>Created At: {quiz.created}</h2>
//           <video src={quiz.url} width="320" height="240" controls />
//           {quiz.questions_answers.map((question_answer: { text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; answers: any[]; feedback_false: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; feedback_true: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
//             <>
//              <h1>{question_answer.text}</h1>
//               {question_answer.answers.map((answer: { text: string | number | readonly string[] | undefined; is_true: boolean | undefined; }) => (
//                 <div>
//                    <h5>answer.text</h5> 
//                    <input type="radio" value={answer.text} checked={answer.is_true}/>
//                 </div>
//              ))}
//              <p>{question_answer.feedback_false}</p>
//              <p>{question_answer.feedback_true}</p>
//              </>
//           ))}
//           <p>score: {quiz.score}</p>
//          </>
//         ))}
//     </div>

//   );
// }

// export default App;


import React from 'react';
import './App.css';
import PageRoutes from './routes';
import {QuizzesProvider} from './store/store';

function App() {
    return (
        <QuizzesProvider>
            <PageRoutes />
        </QuizzesProvider>
    );
}

export default App;
