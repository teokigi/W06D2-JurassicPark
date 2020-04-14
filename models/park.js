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
//Find the dinosaur that attracts the most visitors
Park.prototype.mostPopular = function(){
	let mostPopularDino
	for (dinosaur of this.dinosaurs){
		if (!mostPopularDino){
			mostPopularDino = dinosaur
			}
		else{
			if (mostPopularDino.guestsAttractedPerDay < dinosaur.guestsAttractedPerDay){
			mostPopularDino = dinosaur;
			}
		}
	}
	return mostPopularDino
};
// Find all dinosaurs of a particular species
Park.prototype.matchesSpecies = function(species){
	let speciesMatches = [];
	for (dinosaur of this.dinosaurs){
		if (dinosaur.species == species){
			speciesMatches.push(dinosaur)
		}
	}
	return speciesMatches
}
// Calculate the total number of visitors per day
Park.prototype.visitorsPerDay = function(){
	let total = 0;
	for (dinosaur of this.dinosaurs){
		total += dinosaur.guestsAttractedPerDay
	}
	console.log(total);
	return total
}
// Calculate the total number of visitors per year
Park.prototype.visitorsPerYear = function(){

	const totalPerDay = this.visitorsPerDay();
	const totalPerYear = totalPerDay * 365;
	return totalPerYear
}
// Calculate the total revenue from ticket sales for one year
Park.prototype.annualSales = function(){
	const annualVisits = this.visitorsPerYear();
	const salesTotal = annualVisits*this.ticketPrice;
	return salesTotal;
}
// remove a particular species
Park.prototype.removeSpecies = function(species){
	const found = this.dinosaurs.filter(dino => dino.species != species);
	this.dinosaurs = found;
}
// return summary of diet type and number of it in record.
Park.prototype.summary = function(){
	//look through current dinosaurs, if the diet category is new,
	//make a new category.
	//for each category, find object that has diet category and +1.
	dietCategorys = [];
	appenddiets = [];
	summary = {};
	function findDiets(dino){
		if (!dietCategorys.includes(dino.diet)){
				dietCategorys.push(dino.diet)
		}
	}
//function counts diet.
	function dietCount(diet){
		let count = 0;
		count = this.dinosaurs.filter(dino => dino.diet == diet).length;
		return count;
	}
//finds different diet categories
	this.dinosaurs.forEach(findDiets);
//need to count the diets and assign to new array.
	for (category of dietCategorys){
		summary[category] = dietCount(category);
	}
	return summary
}

module.exports = Park;
