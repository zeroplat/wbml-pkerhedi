import React, { 
  // lazy
 } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Loader from './Loader/Loader';
import reportWebVitals from './reportWebVitals';
// import Kungfu from './Kungfu';

// const Mega = lazy(() => import('./Kungfu'));

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
