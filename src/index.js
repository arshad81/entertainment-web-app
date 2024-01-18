import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Movies from "./pages/movies";
import TV from "./pages/tv";
import Bookmarked from "./pages/bookmarked";
import reportWebVitals from './reportWebVitals';

import data from './data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data} />
    {/* <Movies data={data} /> */}
    {/* <TV data={data} /> */}
    {/* <Bookmarked data={data} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
