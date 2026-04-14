export const getVisitedFromLs = () => {
  const visitedCountries = localStorage.getItem('visited');
  if(visitedCountries) {
    return JSON.parse(visitedCountries);
  }
  return [];
}

export const setVisitedToLs = (countryId) => {
  const existingVisited = getVisitedFromLs();
  let newVisited = [];
  const isVisited = existingVisited.includes(countryId);
  if(isVisited) {
    newVisited = existingVisited.filter(c => c !== countryId);
  } else {
    newVisited = [...existingVisited, countryId];
  }
  const stringifiedVisited = JSON.stringify(newVisited);
  localStorage.setItem('visited', stringifiedVisited);

  return newVisited;
}