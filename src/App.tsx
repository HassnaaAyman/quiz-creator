import React, { useState } from 'react';
import './App.css';

function App() {
  const [quizs, setQuiz] = useState(
    [{
      "created": "2020-09-09 09:26:39", // Date.now()
      "description": "Description",
      "id": 29,
      "modified": "2020-09-09 09:26:39", // Date.now()
      "questions_answers": [
        {
          "answer_id": null,
          "answers": [
            {
              "id": 122,
              "is_true": false,
              "text": "question 1 answer 1 false"
            },
            {
              "id": 123,
              "is_true": false,
              "text": "question 1 answer 2 false"
            },
            {
              "id": 124,
              "is_true": true,
              "text": "question 1 answer 3 true"
            },
            {
              "id": 125,
              "is_true": false,
              "text": "question 1 answer 4 false"
            }
          ],
          "feedback_false": "question 1 false feedback",
          "feedback_true": "question 1 true feedback",
          "id": 53,
          "text": "question 1 text"
        },
        {
          "answer_id": null,
          "answers": [
            {
              "id": 126,
              "is_true": true,
              "text": "question 2 answer 1 true"
            },
            {
              "id": 127,
              "is_true": false,
              "text": "question 2 answer 2 false"
            }
          ],
          "feedback_false": "question 2 false feedback",
          "feedback_true": "question 2 true feedback",
          "id": 54,
          "text": "question 2 text"
        },
        {
          "answer_id": null,
          "answers": [
            {
              "id": 128,
              "is_true": false,
              "text": "question 3 answer 1 false"
            },
            {
              "id": 129,
              "is_true": true,
              "text": "question 3 answer 2 true"
            },
            {
              "id": 130,
              "is_true": false,
              "text": "question 3 answer 3 false"
            }
          ],
          "feedback_false": "question 3 false feedback",
          "feedback_true": "question 3 true feedback",
          "id": 55,
          "text": "question 3 text"
        }
      ],
      "score": null,
      "title": "quiz title",
      "url": "https://www.youtube.com/watch?v=e6EGQFJLl04"
    }])


  return (
    <div className="App">
        {quizs.map((quiz)=>(
          <>
          <h1>quiz no: {quiz.id}</h1>
          <h2>{quiz.title}</h2>
          <h3>{quiz.description}</h3>
          <h2>Created At: {quiz.created}</h2>
          <video src={quiz.url} width="320" height="240" controls />
          {quiz.questions_answers.map((question_answer) => (
            <>
             <h1>{question_answer.text}</h1>
              {question_answer.answers.map((answer) => (
                <div>
                   <h5>answer.text</h5> 
                   <input type="radio" value={answer.text} checked={answer.is_true}/>
                </div>
             ))}
             <p>{question_answer.feedback_false}</p>
             <p>{question_answer.feedback_true}</p>
             </>
          ))}
          <p>score: {quiz.score}</p>
         </>
        ))}
    </div>
  );
}

export default App;
