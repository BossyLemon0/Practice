import React from 'react';
import ReactDOM from 'react-dom/client';
import WrappedApp from './App';
import './styles/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id='root' className='root'>
      <WrappedApp />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
