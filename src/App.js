import React, { Fragment } from 'react';
import Header from "./components/Header";
import Characters from './components/Characters';
import './main.scss';
import './components/Header.css';
const App = () => {
    return (
        <Fragment>
            <Header
                title="Rick and Morty API by Equinox"
            />
            <Characters />
        </Fragment>
    );
}

export default App;