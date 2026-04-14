import React from 'react';
import './VisitedCountries.css'
import { setVisitedToLs } from '../../utilities/localstorage';

const VisitedCountries = ({countriesVisited, handleCountriesVisited}) => {
  const handleClick = (country) => {
      const updatedLs = setVisitedToLs(country.ccn3.ccn3);
      handleCountriesVisited(updatedLs);
    };
  return (
    <div className={countriesVisited.length === 0 ? 'hide-it' : 'visited-div'}>
      {
        countriesVisited.map((country) => (
          <p className='visited-country' key={country.cca3.cca3}>{country.name.common} <span><button className='delete' onClick={() => handleClick(country)}>x</button></span></p>
        ))
      }
    </div>
  );
};

export default VisitedCountries;