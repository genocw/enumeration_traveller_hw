const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map ( journey => journey.startLocation );
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map ( journey => journey.endLocation );
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter ( journey => journey.transport === transport );
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter ( journey => journey.distance >= minDistance );
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const arrayOfDistances = this.journeys.map ( journey => journey.distance );
  let reducer = (total, currentValue) => total + currentValue;
  return arrayOfDistances.reduce ( reducer );
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // method to find unique thing in array:
  function firstInstance(modeOfTransport, index, array) {
    return array.indexOf(modeOfTransport) === index;
  }

  // array of all modes of transport:
  const transportModesAllArray = this.journeys.map ( journey => journey.transport );
  // get array of unique modes with the method:
  const transportModesUnique = transportModesAllArray.filter( firstInstance );
  //  return array
  return transportModesUnique;
};


module.exports = Traveller;
