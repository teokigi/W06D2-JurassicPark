const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
        dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
        dinosaur2 = new Dinosaur('Raptor','carnivore',75);
        dinosaur3 = new Dinosaur('triceratops','herbivore',125);
        dinosaur4 = new Dinosaur('Stegosaurus','herbivore',15);
        dinosaurs = [dinosaur1,dinosaur2,dinosaur3]
        jurassicPark = new Park('Jurassic Park',100,dinosaurs);
  })

  it('001 - should have a name',function(){
    assert.equal('Jurassic Park',jurassicPark.name);
    });

  it('002 - should have a ticket price',function(){
    assert.equal(100,jurassicPark.ticketPrice);
    });

  it('003 - should have a collection of dinosaurs',function(){
    assert.deepStrictEqual([dinosaur1,dinosaur2,dinosaur3],jurassicPark.dinosaurs);
    });

  it('004 - should be able to add a dinosaur to its collection',function(){
    jurassicPark.addDinosaur(dinosaur4);
    assert.equal(4,jurassicPark.dinosaurs.length);
});

  it('005 - should be able to remove a dinosaur from its collection',function(){
    jurassicPark.removeDinosaur();
    assert.equal(2,jurassicPark.dinosaurs.length);
});

  it('006 - should be able to find the dinosaur that attracts the most visitors',function(){
    const starAttraction = jurassicPark.mostPopular();
    assert.equal('triceratops',starAttraction.species);
});

  it('007 - should be able to find all dinosaurs of a particular species',function(){
    const matchingSpecies = jurassicPark.matchesSpecies('Raptor');
    assert.equal(1,matchingSpecies.length);
});

  it('008 - should be able to calculate the total number of visitors per day',function(){
    // 50 + 75 = 125 + 125 = 250
    assert.equal(250,jurassicPark.visitorsPerDay());
});

  it('009 - should be able to calculate the total number of visitors per year',function(){
    assert.equal(250*365,jurassicPark.visitorsPerYear());
});

//   it('010 - should be able to calculate total revenue for one year');
//     assert.equal(265*365*100,jurassicPark.annualSales());
// });
});
