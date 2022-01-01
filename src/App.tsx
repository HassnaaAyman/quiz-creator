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
