import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import authReducer from './reducers/auth';
import currentUserReducer from './reducers/currentUser';
import questionReducer from './reducers/questions';
import usersReducer from './reducers/Users';

// import { } from 'redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
    currentUser: currentUserReducer,
    questionReducer: questionReducer,
    usersReducer: usersReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

