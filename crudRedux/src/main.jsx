import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import $ from 'jquery'; 
// import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userReducer.jsx'


const store = configureStore({reducer:{
  users:userReducer
}})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
    <App />
  </Provider>

  </React.StrictMode>,
)
