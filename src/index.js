import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Movies from "./pages/movies";
import TV from "./pages/tv";
import Bookmarked from "./pages/bookmarked";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import data from './data.json';

function Index(){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<App data={data}/>} />
        <Route path="movies" element={<Movies data={data}/>} />
        <Route path="webSeries" element={<TV data={data}/>} />
        <Route path="bookmarked" element={<Bookmarked data={data}/>} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
