import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './page/StartPage';
import MainLayoutPage from './page/MainLayoutPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {StartPage()}/> 
        <Route exact path ="/MainLayout/*" element = {MainLayoutPage()}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
