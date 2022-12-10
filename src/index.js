import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter as Router } from 'react-router-dom'
import storeContext from './storeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderAllTree = (state) => {
    root.render(
        <Router>
            <storeContext.Provider value={store}>
                <App />
            </storeContext.Provider>
        </Router>
    );
}

rerenderAllTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderAllTree(state)
});
