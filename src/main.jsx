import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/store';
import { TeamProvider } from './Context/Teamcontext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
<TeamProvider>
      <BrowserRouter> 

        <App />
      </BrowserRouter>
      </TeamProvider>
    </Provider>
  </React.StrictMode>,
);
