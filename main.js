import OysterCard from './OysterCard'

// Instantiate User
let card = new OysterCard();

// Card charged with £30
card.setCredit(30);

// enter in the subway
card.swipeIn(OysterCard.STATIONS.Holborn);
// set new trip from Tube Holborn to Earl’s Court
card.setNewJourney(OysterCard.STATIONS.Aldgate);
// exit station
card.swipeOut();

// set bus trip from 328 bus from Earl’s Court to Chelsea
card.setBusJourney();

// enter in the subway
card.swipeIn(OysterCard.STATIONS.EarlsCourt);
// set new trip
card.setNewJourney(OysterCard.STATIONS.Hammersmith);
// exit station
card.swipeOut();

var credit = card.getCredit().toFixed(2);
console.log('Remaning Credit: £', credit);