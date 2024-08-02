import React from 'react';
import { CountryProvider } from './CountryContext';
import Countries from './Countries';
import './App.css';

function App() {
    return (
        <CountryProvider>
            <div className="App">
                <h1>Country Flags, Country Codes, ISO Codes</h1>
                <Countries />
            </div>
        </CountryProvider>
    );
}

export default App;
