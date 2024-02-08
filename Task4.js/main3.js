// Question 1

//   forInArr = [1, 2, 3];
// for (const index in forInArr) {
//     console.log(index); 
//   }



//    forEacharr = [1, 2, 3];
// forEacharr.forEach(function(value) {
//   console.log(value); 
// });

//  forOfarr = [1, 2, 3];
// for (const value of forOfarr) {
//   console.log(value); 
// }
/*
###for...in is used to iterate over the properties (including indices) of an object, not just arrays
###forEach() is an array method used for iterating over the elements of an array.
###for...of is used specifically for iterating over the values of iterable objects, like arrays, strings, and more.

*/

 // Question 2

// const Array1 = [1, 2, 3];

// const Array2 = [...Array1];

// console.log(Array2); 



// // Question 3

// const student = {
//   Std_name: "Nourhan Soliman",
//   fac_name: "Computer Science",
//   Uni_name: "Beni_Suef",
//   grad: 90
// };
// console.log(student.Std_name + " "+ " is a student in faculty of " +" "+ student.fac_name +" "+ " in the university of " + student.Uni_name+" "+"And his final grade is"+" "+student.grad);




//  Question 4

// const studentNames = new Set();

// studentNames.add("Nour");
// studentNames.add("Sayed");
// studentNames.add("Mohamed");

// studentNames.add("Mohamed");

// console.log([...studentNames]);

// for (const student of studentNames) {
//   console.log(student);
//  }          
// it doesnot accept repeated values


// Question 5

// const str = 'heloo';
// const index = str.indexOf('e');

// if (index !== -1) {
//   console.log("the index was founded in ", index);
// } else {
//   console.log("the index was  not founded in");
// }

// Question 6
//  in index.html


// Question 7

// // Define the base class Employee
// class Employee {
//   constructor(name = '', dept = 'general') {
//     this.name = name;
//     this.dept = dept;
//   }
// }

// // Define the Manager class based on Employee
// class Manager extends Employee {
//   constructor(name = '', dept = 'general') {
//     super(name, dept);
//     this.reports = [];
//   }
// }

// // Define the WorkerBee class based on Employee
// class WorkerBee extends Employee {
//   constructor(name = '', dept = 'general') {
//     super(name, dept);
//     this.projects = [];
//   }
// }

// Define the SalesPerson class based on WorkerBee
// class SalesPerson extends WorkerBee {
//   constructor(name = '', dept = 'sales', quota = 100) {
//     super(name, dept);
//     this.quota = quota;
//   }
// }

// // Define the Engineer class based on WorkerBee
// class Engineer extends WorkerBee {
//   constructor(name = '', dept = 'engineering', machine = '') {
//     super(name, dept);
//     this.machine = machine;
//   }
// }

// Question 8

const metadata = {
    title: 'Scratchpad',
    translations: [
    {
    locale: 'de',
    localization_tags: ['de-gen', 'de-or'],
    last_edit: '2014-04-14T08:43:37',
    url: '/de/docs/Tools/Scratchpad',
    titles: 'JavaScript-Umgebung'
    }
    ],
    };
    const { title, translations: [{ localization_tags }] } = metadata;
  
  console.log(title); 
  console.log(localization_tags); 
  
  // Question 9
  // in Question9.html 
    