import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateQuiz from '../pages/createQuiz';
import ListQuizzes from '../pages/listQuizzes';

const PageRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListQuizzes />} />
            <Route path="quizzes/create" element={<CreateQuiz />} />
        </Routes>
    </BrowserRouter>
);
export default PageRoutes;
