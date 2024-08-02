import React, { useContext } from 'react';
import { CountryContext } from './CountryContext';
import './Countries.css';

const Countries = () => {
    const { countries } = useContext(CountryContext);

    return (
        <div className="country-list">
            {countries.map((country, index) => (
                <div className="country" key={index}>
                    <img src={country.flags.png} alt={`${country.name.common} flag`} />
                    <div className="country-info">
                        <p>{country.name.common} ({country.cca2})</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Countries;
