import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateQuiz from '../pages/createQuiz';
import EditQuiz from '../pages/editQuiz';
import ListQuizzes from '../pages/listQuizzes';

const PageRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListQuizzes />} />
            <Route path="quizzes/create" element={<CreateQuiz />} />
            <Route path="quizzes/:id/edit" element={<EditQuiz />} />
        </Routes>
    </BrowserRouter>
);
export default PageRoutes;
