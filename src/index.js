import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalData from './GlobalContext/GlobalContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalData>
      <App />
    </GlobalData>
  </React.StrictMode>,
  document.getElementById('root')
);
