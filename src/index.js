import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './state';
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderAllTree = (state) => {
    root.render(
        <Router>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </Router>
    );
}

rerenderAllTree(store.getState());

store.subscribe(rerenderAllTree);
