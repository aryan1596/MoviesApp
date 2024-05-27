import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals';
import './index.css'
import App from './App';
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import axios from 'axios';
import { store } from './store/store';
import { Provider } from 'react-redux'; 

// setup axios 

axios.defaults.baseURL ="https://api.themoviedb.org/3"

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>

    <RouterProvider router={router}/>
  </Provider>
  //  </React.StrictMode>, 
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
