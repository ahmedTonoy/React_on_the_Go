import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
import VisitedCountries from '../Countries/VisitedCountries';


const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const [countriesVisited, setCountriesVisited] = useState([]);

  const handleCountriesVisited = (country) => {
    setCountriesVisited(prevCountries => {
      const isVisited = prevCountries.includes(country);
      if (isVisited) {
        return prevCountries.filter(existingCountry => existingCountry !== country);
      } else {
        return [...prevCountries, country];
      }
    });
  }
  return (
    <div>
      <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Total Countries in the World: {countries.length}</h2>
      <h4 style={{textAlign: 'center', marginBottom: '20px', backgroundColor: 'white', paddingBlock: '10px'}}>Countries Mr. React visited:</h4>
      <VisitedCountries countriesVisited={countriesVisited}></VisitedCountries>
      <h3 style={{textAlign: 'center', marginBottom: '20px', backgroundColor: 'white', paddingBlock: '10px', position: 'sticky', top: 0, zIndex: 10}}>Total countries Mr. React visited: {countriesVisited.length}</h3>
      <div className='countries'>
        {
          countries.map(country => <Country key={country.cca3.cca3} country={country} handleCountriesVisited={handleCountriesVisited}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;
