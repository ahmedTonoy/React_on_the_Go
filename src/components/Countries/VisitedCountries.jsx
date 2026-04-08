import React from 'react';
import './VisitedCountries.css'

const VisitedCountries = ({countriesVisited}) => {
  return (
    <div className={countriesVisited.length === 0 ? 'hide-it' : 'visited-div'}>
      {
        countriesVisited.map((country) => (
          <p className='visited-country' key={country.cca3.cca3}>{country.name.common}</p>
        ))
      }
    </div>
  );
};

export default VisitedCountries;