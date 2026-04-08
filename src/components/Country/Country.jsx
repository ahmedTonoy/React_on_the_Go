import React, { useState } from 'react';

const Country = ({country, handleCountriesVisited}) => {
  const [visited, setVisited] = useState(false);
  const handleClick = (country) => {
    setVisited(!visited);
    handleCountriesVisited(country);
  };

  return (
    <div style={{border: '2px solid blue', padding: '10px', borderRadius: '12px', backgroundColor: visited ? '#88e827' : '#f9faf8'}}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} style={{width: '100%', height: '200px', borderRadius: '12px'}}/>
      <div>
        <div>
          <h2 style={{margin: '5px 0px'}}>Name: {country.name.common}</h2>
          <h3 style={{margin: '5px 0px'}}>Continent: {country.continents.continents}</h3>
        </div>
        <p style={{textAlign: 'justify', padding: '5px', borderLeft: '4px solid red', borderRadius: '6px', backgroundColor: '#fce8e8'}}>This country has a population of {country.population.population}, and the capital is <i style={{color: 'blue', fontWeight: '600'}}>{country.capital.capital}.</i> The total area is {country.area.area}, which means it is comparatively a <span style={{color: country.area.area > 200000? '#46c91e' : '#b8a40c', fontWeight: '600'}}>{country.area.area > 200000? 'larger' : 'smaller'}</span> country</p>
      </div>
      <button style={{padding: '8px', marginTop: '10px', borderRadius: '5px', fontWeight: 'bold', fontSize: '18px'}} onClick={() => handleClick(country)}>{visited ? 'Visited' : 'Not Visited'}</button>
    </div>
  );
};

export default Country;