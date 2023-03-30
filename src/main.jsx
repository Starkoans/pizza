import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import {store} from '../src/store/index'
import './index.css';
import {Provider, useSelector} from "react-redux";



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>

);
