import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
import VisitedCountries from '../Countries/VisitedCountries';
import { getVisitedFromLs } from '../../utilities/localstorage';


const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const [visitedIds, setVisitedIds] = useState(getVisitedFromLs());
  const countriesVisited = visitedIds
    .map(id => countries.find(country => country.ccn3.ccn3 === id))
    .filter(Boolean);
  
  const handleCountriesVisited = (updatedLs) => {
    const visitedCountries = updatedLs;
    setVisitedIds(visitedCountries);
    const currentVisitedFullData = [];

    for(const ccn3 of visitedCountries) {
      const matchedCountry = countries.find(country => country.ccn3.ccn3 === ccn3);
      if(matchedCountry) {
        currentVisitedFullData.push(matchedCountry);
      }
    }
  }

  return (
    <div className='container'>
      <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Total Countries in the World: {countries.length}</h2>
      <h4 style={{textAlign: 'center', marginBottom: '20px', backgroundColor: 'white', paddingBlock: '10px'}}>Countries Mr. React visited:</h4>
      <VisitedCountries countriesVisited={countriesVisited} handleCountriesVisited={handleCountriesVisited}></VisitedCountries>
      <h3 style={{textAlign: 'center', marginBottom: '20px', backgroundColor: 'white', paddingBlock: '10px', position: 'sticky', top: 0, zIndex: 10}}>Total countries Mr. React visited: {countriesVisited.length}</h3>
      <div className='countries'>
        {
          countries.map(country => <Country key={country.cca3.cca3} country={country} isVisited={visitedIds.includes(country.ccn3.ccn3)} handleCountriesVisited={handleCountriesVisited}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;
