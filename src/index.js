import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/colors.scss';
import './styles/index.scss';
import './styles/background-gradients.scss';
import App from './application/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                <App i18n={i18n}/>
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
