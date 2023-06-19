const createPerson = (name, age) => {
  const myPerson = {
    name: name,
    age: age
  }
  return myPerson;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return Object.hasOwn(object, property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
const age = people.reduce((previousAge, currentAge) => {
  return previousAge + currentAge.age;}, 0 );

return age / people.length; 
};

const createTalkingPerson = (name, age) => {
  function introduce(name2) {
    return `Hi ${name2}, my name is ${name} and I am ${age}!`; 
  }

  return {
    name, 
    age,
    introduce
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
