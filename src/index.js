import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const naritaryoinfo = {
  name: "成田凌",
  age: "28",
};

const NaritaRyoContext = createContext(naritaryoinfo);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NaritaRyoContext.Provider value={naritaryoinfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NaritaRyoContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default NaritaRyoContext;
