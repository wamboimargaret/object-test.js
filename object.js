//Question 1:
//Given an array of objects, each object representing a person
//with a name and age property, write a function that returns a
//new array containing the names of all people who are 18 years old
//or older.
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  
function older(people){
    const above18= [];
    for (let i = 0; i < people.length; ++i) {
       if ((people[i].age >= 18)) {
        above18.push(people[i].name);
        }
      }
       return above18;
  };
  console.log( older(people));


// Question 2
// Write a function that takes an array of objects, where each object represents a product with a name, price, and category property.
// The function should return an object that groups the products by their categories, with the category names as keys and the arrays of products as values.
function groupProduct(products) {
    const grouped = {};
    products.forEach(product => {
        if (grouped[product.category]) {
            grouped[product.category].push(product);
        } else {
            grouped[product.category] = [product];
        }
    });
    return grouped;
}
const products = [
  { name: 'Eyeshadow', price: 1200, category: 'Makeup' },
  { name: 'Spoon', price: 20, category: 'Utensils' },
  { name: 'Earphones', price: 300, category: 'Electronics' },
  { name: 'Shoes', price: 600, category: 'Clothing' },
];
console.log(groupProduct(products));


// Question 3
// Given an array of objects, where each object represents a student with a name and an array of scores,
// write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
function topStudent(students) {
    const highScore = [];
    students.forEach((student) => {
      const averageScore = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
      if (averageScore >= 85) {
        highScore.push(student.name);
      }
    });
    return highScore;
  }
const students = [
  { name: 'Meg', scores: [90, 80, 85] },
  { name: 'Flo', scores: [95, 92, 88] },
  { name: 'Henry', scores: [70, 80, 75] },
  { name: 'Lily', scores: [85, 90, 84] },
];
console.log(topStudent(students));


// Question 4
// Given an object representing a car, with properties for the make, model, year, and a method to display the car's information,
// write a function that takes the car object and adds a new method to the object called age.
// The age method should return the current age of the car based on the current year and the car's year property.
const car = {
  make: 'Chevrolet',
  model: 'Corvette',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
function addAge(carObject) {
    const currentYear = new Date().getFullYear();
    const carsAge = currentYear - carObject.year;
    carObject.age = function() {
      return carsAge;
    };
}
addAge(car);
console.log(car.age());