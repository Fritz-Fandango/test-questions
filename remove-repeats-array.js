const cities = [
  { "San Antonio": 3000 },
  { Austin: 5000 },
  { Houston: 3000 },
  { "El Paso": 2000 },
  { Austin: 5000 }
];

// return the total population of Texas
function calculatePopulation() {
  const filteredCities = cities.filter((key, index) => {
    return cities.indexOf(Object.keys(key)[0]) !== index;
  });

  return filteredCities.reduce(
    (prevCity, currentCity) =>
      prevCity + Number(currentCity[Object.keys(currentCity)]),
    0
  );
}

calculatePopulation();

// exported for unit tests - do not modify
// exports.calculatePopulation = calculatePopulation;
