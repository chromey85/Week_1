let myName = "Yusuf";               //This defines the variable to memory
let randomNum = Math.random();

console.log(myName);                //This uses the variable
console.log(myName.length);         //This shows the length of the variable
console.log("Yusuf Ayyub".length);  //This shows the length of "Yusuf Ayyub"
console.log(
    myName.toLowerCase(), myName.toUpperCase()   //This does something to the Variable         
);
console.log(Math.random());         //This will give a number between 0 and 0.999...
console.log(Math.random()*10);      //This will give a number between 0 and 9.999...
console.log(Math.ceil(Math.random()*10));   //This will give a random number between 0 and 9.999... and round up
console.log(Math.floor(Math.random()*10));  //This will give a random number between 0 and 9.999... and round down

console.log(Math.random());
console.log(Math.floor(Math.random()*10));
console.log(Math.ceil(Math.random()*10));

console.log(randomNum);             //This will assign a random Number
console.log(Math.floor(randomNum)); 
console.log(Math.ceil(randomNum));

console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");

console.log("All arount the world".charAt(1).toUpperCase());    //This will pick the letter from the number in charAt()
console.log("All arount the world".charAt(2).toUpperCase());
console.log("All arount the world".charAt(3).toUpperCase());
console.log("All arount the world".charAt(4).toUpperCase());
console.log("All arount the world".charAt(5).toUpperCase());
console.log("All arount the world".charAt(7).toUpperCase());

console.log(randomNum *=10);               // This multiplies randomNum by 10 and assigns it
console.log(randomNum +=10);               // This Adds randomNum by 10 and assigns it
console.log(randomNum -=10);               // This minuses randomNum by 10 and assigns it

//const testNum = 20;                         // This assigns testNum as 20
//console.log (testNum);
//console.log(testNum += 10);
//console.log(testNum + 10);

let favDrink = "coffee";
console.log(favDrink);
console.log("My favorite drink is " + favDrink + " because its nice");
console.log(`My favorite drink is ${favDrink} because its nice`);
favDrink = "tea";
console.log(`My favorite drink is ${favDrink} because its nice`);

let name = "Yusuf Ayyub";
let Age = "36";
let favColour = "Blue";
console.log(`My name is ${name}, I am ${Age} years old and my favourite colour is ${favColour}`);
console.log(`Hi! My name is ${name} and I am ${Age} years old, and my favourite colour is ${favColour}.`);
console.log("--------------------------")
console.log(`Hi! My name is ${name.toUpperCase()} and I am ${Age} years old, and my favourite colours length is ${favColour.length}.`);

console.log("--------------------------")

let breakfast = "toast";
let lunch = "a panini";
let dinner = "pasta";

console.log(`Today I had ${breakfast.toUpperCase()} for breakfast, ${lunch.toUpperCase()} for lunch and ${dinner.toUpperCase()} for dinner.`);


breakfast = "cereal";
lunch = "burger";
dinner = "biryani";

console.log(`Today I had ${breakfast.toUpperCase()} for breakfast, ${lunch.toUpperCase()} for lunch and ${dinner.toUpperCase()} for dinner.`);

console.log("--------------------------")

let today = Date.now()
//let todayMonth = getMonth();
//let todayYear = getFullYear(); 
//let bDay = "15";
//let bMonth = "03";
//let bYeay = "1985";

console.log (today)

//console.log(`I am ${today} years old and my birthday is in ${today} days`);
//console.log(dob);

let music = "classical";

if (music == "classical"){
    console.log("classical");
}
else {
    console.log("default")
};

const grade = 87;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("pass");
        break;
    default:
        console.log("fail");
};

if (grade >= 70) {
    console.log("Distinction");
    }
        else if (grade >= 60) {
        console.log("Merit");
        }
            else if(grade >= 50) {
            console.log("Pass");
            }
                else {
                    console.log("Fail");
};

let legAge = 20
const Yes = "Yes, I can serve you"
const No = "No, You aren't old enough"

if (legAge >= 25) 
    {console.log (Yes);}
        else if (legAge >= 18)
            {console.log (Yes);}
                else (legAge < 18)
                    {console.log (No);}



// switch (num)
//     {case `num / 5`:    // only 1 needs to be true
//      case `num / 3`:
//          console.log("This number is divisible by 3 or 5”);}

let xOboard = [ ["x", "o", "o"],
                ["x", "o", "x"],
                ["x", "x", "o"]];

console.log(xOboard);

if (xOboard = [0],[0]); // this looks at line 1 space 1


const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}
pressGrindBeans();

let coffeeIsGrinding1 = false;

const pressGrindBeans1 = () => {
    if (coffeeIsGrinding1) {
        console.log("Stopping the grind");
        coffeeIsGrinding1 = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding1 = true;
    }
}
pressGrindBeans1();
pressGrindBeans1();
pressGrindBeans1();
pressGrindBeans1();

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from Account ${accnum}`);
}

cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);

let accNum = 50449921;
let balance = 1000
let amount = 100

const cashWithdrawal1 = (amount, accNum) => {
    console.log(`Withdrawing ${amount} from Account ${accNum}`);
}

cashWithdrawal1(amount, accNum);
cashWithdrawal1(30, 50449921);
cashWithdrawal1(200, 50447921);

let accNum1 = 50449921;
let balance1 = 1000;
let amount1 = 100;

const cashWithdrawal2 = (amount1, accNum1) => {
    balance1 -= amount1;
    console.log(`Withdrawing ${amount1} from Account ${accNum1} and your remaining balance is ${balance1}`);

}

cashWithdrawal2 (amount1, accNum1);
cashWithdrawal2 (amount1, accNum1);
cashWithdrawal2 (amount1, accNum1);
cashWithdrawal2 (amount1, accNum1);


const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp (7, 3); //<== this will work out the maths but does not print to screen

console.log(addUp(7, 3));

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFarenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32
};
console.log("The tempurature is " + getFarenheit(15) + "°F");

//Declartation

const square = (number) => {
    return number * number;
};

square (5);

// Output: 25


// Anonymous function

const square1 = function (number) {
    return number * number;
};

square1 (5);

Output: 25

const power = (num1, num2) => {
    return num1 ** num2;
   }
   console.log(power(3, 3));

let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's New"
];
    console.log(coffeeOrder[1]);
    coffeeOrder[1] = "Yusuf - Mocha";
    console.log(coffeeOrder[1]);
    console.log(coffeeOrder.length);
    console.log(coffeeOrder[1].length);
    coffeeOrder.push("Donna - Espresso"); //<== add to bottom of list
    console.log(coffeeOrder);
    coffeeOrder.pop(); //<== removes from bottom of list
    console.log(coffeeOrder);
    console.log(coffeeOrder[1],coffeeOrder[2]);

const subToppings = () => {
    return "Cheese",
            "Lettuce",
            "Onion",
            "Jalapenos",
            "Olives"
};

console.log(subToppings);

const subToppings1 = () => (
    "top1",
    "top2",
    "top3",
    "top4",
    "top5"
);
console.log(subToppings1);

// Loops

let favGames = [
    "Gran Turismo",
    "Need for Speed (All of them)",
    "Assassin's Creed"
];

for (let gamesIndex = 0; gamesIndex < favGames.length; gamesIndex++){
    console.log(favGames[gamesIndex]);
};

let multiplesTwo = [];

for (let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}

// console.log(`Numbers devisable by 2 between 0 and 20 are ${multiplesTwo}` );

const sumOfNums = (min, max) => {
    let sums = 0;
        for (let i = min; i<= max ; i++){
            sums += i;
        }
        return sums;
}

console.log(`Sum of all numbers from 1 to 10 ${sumOfNums(1,10)}`)


// Infinite loop

// let i = 0; //<=========== this is used to stop the loop

// while (condition) {
//     do something;
//     i++; //<============== THIS IS IMPRTANT TO STOP THE LOOP
// }

let age = 15;

while (age < 18){
    console.log("You're a child");
    age++;
}
console.log("You're an adult");

let randomNumber = 0;

while (randomNumber < 10) {
    console.log("Random no." + randomNumber + "\n Keep looping");
    randomNumber = (Math.round(Math.random() * 20));
}

console.log("No more looping, with random no." + randomNumber);

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard);

let drinks = [
    {drink:     "Tea",      Cost:   1.00},
    {drink:     "Coffee",   Cost:   2.00},
    {drink:     "Fizzy",    Cost:   3.00},
    {drink:     "Alcohol",  Cost:   4.00},
];
let balance2 = 7.00

const availDrinks = drinks.map(function(drinks){
        return drinks.drink;
    });
    //console.log(availDrinks);

const drinksCost = drinks.map(function(drinks){
    return drinks.Cost;
});
    //console.log(drinksCost);

const checkDrinks = () => {
    for (let i = 0; i < availDrinks.length; i++) {
        console.log(availDrinks[i]);
    }
}

const checkBalance = () => {
    console.log(`The available drinks are:`);
    for (let i = 0; i < availDrinks.length; i++) {
        console.log(`${availDrinks[i]}: £${drinksCost[i]}`)
    }
    console.log(`Your available balance is: £${balance}`);
}

const checkSelection = (choice) => {
    if (balance >= drinksCost[choice]) {
        console.log(`Enjoy your ${availDrinks[choice]}, you've got good taste!`);
    }
}
    console.log(`Your available balance is: £${balance}`);

checkDrinks();
checkBalance();
checkSelection(3);
checkSelection(2);
checkSelection(1);
checkSelection(0);


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
//let day = get.date()

const alarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
};

if (day == "Saturday" || day == "Sunday"){
    console.log(alarm.weekendAlarm);
}
        else if (day == "Monday" || day == "Tuesday" || day ==  "Wednesday" || day == "Thursday" || day == "Friday"){
            console.log(alarm.weekdayAlarm);
}

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot Chocolate"
    ]

// Function

   // myFunc: () => {
    //     return 1 + 1;
    // }
};
cafe.openingTimes = "8am till 5pm";

//console.log(myFunc)

const pet = {
    name:       "Simba",
    typeOfPet:  "Rhodesian Ridgeback",
    age:        "6",
    colour:     "Copper Brown",
    eat: function () {
        console.log (`${this.name} is eating / drinking`);
}}
pet.eat();

let word = "Pneumonoultramicroscopicsilicovolcanoconiosis"
let wordR = word.split('').reverse().join('');

console.log(`${word} reversed is ${wordR}`);

let shoppingList = [
    {shop1: "item 1", shop1: "item 2", shop1: "item 3"},
    {shop2: "item 4", shop2: "item 5", shop2: "item 6"},
    {shop3: "item 7", shop3: "item 8", shop3: "item 9"}
];

let shoppingList = [
    {shop1: "item 1", shop2: "item 2", shop3: "item 3"},
    {shop1: "item 4", shop2: "item 5", shop3: "item 6"},
    {shop1: "item 7", shop2: "item 8", shop3: "item 9"}
];

    const item = shoppingList.map(function(shoppingList){
    return shoppingList.shop2;
    })

    console.log(item[2]);

    // OR

    console.log(shoppingList[2].shop2);