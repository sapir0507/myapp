import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainComp from './project/components/main/main';
import ProductsComp from './project/components/products/products';

const App = lazy(()=>import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));  //finds element with id="root"
root.render(
    <Router>
        <Suspense
        fallback={<div>Loading...</div>}>
            <App></App>
        </Suspense>
    </Router>
    // <App />

);


