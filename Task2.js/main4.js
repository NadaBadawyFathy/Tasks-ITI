// task 1
// while (true) {
//     const age =parseInt(prompt("Please enter your age. Only positive numbers are allowed."));
//     if (age <= 0) {
//         break;
//     }
//     if (age >= 1 && age <= 10) {
//         console.log("Your status: Child");
//     } else if (age >= 11 && age <= 18) {
//         console.log("Your status: Teenager");
//     } else if (age >= 19 && age <= 50) {
//         console.log("Your status: Grown up");
//     } else {
//         console.log("Your status: Old");
//     }
//     }


// task 2
// let Str= prompt("Please enter a string:");
// Str = Str.toLowerCase();
// let count1 = 0 ,count2=0 ,count3=0 ,count4=0 ,count5=0;
// for (let i = 0; i < Str.length; i++) {
//     let Char = Str[i];
//     if (Char === 'a') {
//         count1++;
//     }
//     if (Char === 'e') {
//         count2++;
//     }
//     if (Char === 'i') {
//         count3++;
//     }
//     if (Char === 'o') {
//         count4++;
//     }
//     if (Char === 'u') {
//         count5++;
//     }
// }
// console.log(count1 ,count2 ,count3, count4, count5);


// task 3
// let hour = parseInt(prompt("Enter the hour"));
// let inhour = hour % 12;
// if ( inhour==0) {
//     console.log(12 ,"AM")
// }
// else if ( hour < 12) {
//     console.log(hour ,"AM")
// }
// else {
//     console.log(inhour ,"PM")
// }


// task 4
// function convert(str) {
//     if (Str.length >0) {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }
//     return "Invalid input";
//     }
//     let Str = prompt("Enter a string ");
//     console.log("Result: " + convert(Str));


// task 5
// function operation(fN, op, sN) {
//     fN = parseFloat(fN);
//     sN = parseFloat(sN);
//     if (op=='sum'){
//         return fN+sN;
//     }
//     if (op=='multiply'){
//         return fN*sN;
//     }
//     if (op=='subtract'){
//         return fN-sN;
//     }
//     if (op=='divide'){
//         return fN/sN;
//     }
//     }
//     let fNumber = prompt("Enter the first number");
//     let op = prompt("Enter the operation (sum, multiply, subtract, divide)");
//     let sNumber = prompt("Enter the second number");
//     console.log("Result: " + operation(fNumber, op, sNumber));

// task 6
// function Data(username, password) {
//     if (username === "admin" && password === "421$$") {
//         return "Welcome Login successful";
//     }
//     else if (username !== "admin" && password !== "421$$") {
//         return "Both username and password are incorrect";
//     } 
//     else if (username !== "admin") {
//         return "Incorrect username.";
//     } 
//     else {
//         return "Incorrect password.";
//     } 
//     }
//     let username = prompt("Enter your username:");
//     let password = prompt("Enter your password:");
//     console.log(Data(username, password));


// task 7
// function Guess() {
//  random = Math.floor(Math.random() * 10);
//     let uguess = parseInt(prompt("Guess the number between 0 and 9:"));
//     if (isNaN(uguess) || uguess < 0||  uguess > 9) {
//         alert("Please enter a valid number between 0 and 9.");
//         return;
//     }
//     if 
//     (uguess === random) {
//         alert("GOOD! ,  You guessed the correct number");
//     } 
//     else {
//         alert( "Sorry, the correct number was "+ random + "Try again!");
// }
// }
// Guess();


// task 8
contacts = [];
function aContact() {
        const name = prompt("Enter the name of the contact:");
        phoneNumber = prompt("Enter the phone number of the contact:");

    const contact = {
        name: name,
        phoneNumber: phoneNumber
    };

    contacts.push(contact);
    alert("Contact added successfully!");
}
function sContact() {
    const searchTerm = prompt("Enter a name or phone number to search for:");
    let foundContacts = [];

    for (const contact of contacts) {
        if (contact.name.includes(searchTerm) || contact.phoneNumber.includes(searchTerm)) {
            foundContacts.push(contact);
        }
    }
    if (foundContacts.length === 0) {
        alert("No matching contacts found.");
    } else {
        alert("Matching contacts found:");
        for (const contact of foundContacts) {
            alert("Name:" +contact.name +"Number" +contact.phoneNumber);
        }
    }
}
while (true) {
    const operation = prompt("Enter an operation (add, search");
    if (operation === "add") {
        aContact();
    } 
    
    else if (operation === "search") {
        sContact();
    }
    else {
        alert("Invalid operation. Please enter add, search, or exit.");
    }
}