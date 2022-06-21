import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const App = lazy(()=>import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));  //finds element with id="root"
root.render(
    <Router>
        <Suspense
        fallback={<div>Loading...</div>}>
            <Routes>
                <Route 
                    path='/' 
                    element={<App/>}
                />
            </Routes>
        </Suspense>
    </Router>
    // <App />

);

reportWebVitals();
