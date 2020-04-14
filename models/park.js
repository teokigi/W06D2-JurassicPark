const Dinosaur = require('./dinosaur.js')

const Park = function (name, ticketprice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketprice;
  this.dinosaurs = dinosaurs;
}
// Add a dinosaur to its collection of dinosaurs
Park.prototype.addDinosaur = function(new_dinosaur){
	this.dinosaurs.push(new_dinosaur);
}
//Remove a dinosaur from its collection of dinosaurs
Park.prototype.removeDinosaur = function(){
	this.dinosaurs.pop();
}
// Find the dinosaur that attracts the most visitors
// Park.prototpye.mostPopular = function(){
// 	let most_popular;
// 	for (dinosaur of this.dinosaurs){
// 		if (!most_popular){
// 			most_popular = dinosaur;
// 			}
// 		else{
// 			if (most_popular.guestsAttractedPerDay() < dinosaur.guestsAttractedPerDay()){
// 			most_popular = dinosaur;
// 			};
// 		};
// 	};
// 	return most_popular;
// };
// // Find all dinosaurs of a particular species
// Park.prototype.matchesSpecies = function(species){
// 	let speciesMatches = [];
// 	for (dinosaur of this.dinosaurs){
// 		if (dinosaur.species == species){
// 			speciesMatches.push(dinosaur)
// 		}
// 	}
// 	return speciesMatches
// }
// // Calculate the total number of visitors per day
// Park.prototype.vistorsPerDay = function(){
// 	let total = 0;
// 	for (dinosaur of this.dinosaurs){
// 		total += dinosaur.guestsAttractedPerDay
// 	}
// 	return total;
// }
// // Calculate the total number of visitors per year
// Park.prototype.visitorsPerYear = function(){
//
// 	const totalPerDay = this.visitorsPerDay();
// 	const totalPerYear = totalPerDay*365;
// 	return totalPerYear
// }
// // Calculate the total revenue from ticket sales for one year
// Park.prototype.annualSales = function(){
// 	const annualVisits = this.visitorsPerYear();
// 	const salesTotal = annualVists*this.ticketPrice;
// 	return salesTotal;
// }
module.exports = Park;
