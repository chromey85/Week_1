let header = "//----------------"

console.log(`${header} Challenge 1 - Variable Challenges`);
console.log()

let myName = "Yusuf Ayyub";
let age = "36";
let favColour = "Blue";
console.log(`My name is ${myName}, I am ${age} years old and my favourite colour is ${favColour}`);
console.log(`Hi! My name is ${myName} and I am ${age} years old, and my favourite colour is ${favColour}.`);

console.log()
console.log(`${header} Challenge 2`);
console.log()

let breakfast = "toast";
let lunch = "a panini";
let dinner = "pasta";

console.log(`Today I had ${breakfast.toUpperCase()} for breakfast, ${lunch.toUpperCase()} for lunch and ${dinner.toUpperCase()} for dinner.`);


breakfast = "cereal";
lunch = "burger";
dinner = "biryani";

console.log(`Today I had ${breakfast.toUpperCase()} for breakfast, ${lunch.toUpperCase()} for lunch and ${dinner.toUpperCase()} for dinner.`);

console.log()
console.log(`${header} Challenge 3 - Birthdays`);
console.log()

// let today = Date.now()
// let todayMonth = getMonth(today);
// let todayYear = getFullYear(); 
// let bDay = "15";
// let bMonth = "03";
// let bYeay = "1985";

// console.log (today)

// console.log(`I am ${today} years old and my birthday is in ${today} days`);
// console.log(dob);

// let today = new Date(); //<------------------------------- Todays Date
// let dd = String(today.getDate()).padStart(2, '0'); //<----- converts string to Day
// let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0! <----- Converts string to Month
// let yyyy = today.getFullYear(); //<---------------- This year

// const bDay = 15
// const bMonth = 03
// const bYear = 1985
// today = dd + '/' + mm + '/' + yyyy;
// birthDay = bDay + '/' + bMonth + '/' + bYear
// console.log(birthDay);
// let rDays = birthDay.getTime() - today.getTime()
//         console.log(rDays);

let today = new Date(); // ok
let birthDay = new Date(1985, 02, 15,);  // ok               // Set day and month
let birthDay1 = new Date(1985, 02, 15,);
        birthDay1.setFullYear(today.getFullYear());       // Set year to this year
let msPerDay = 24 * 60 * 60 * 1000;                     // Number of milliseconds per day
let daysLeft = (birthDay1.getTime() - today.getTime()) / msPerDay;
//let daysLeft = Math.round(daysLeft);                    //returns days left in the year
        console.log(`There are ${Math.round(daysLeft)} days till my birthday`);
let dAge = (today.getTime() - birthDay.getTime()) / msPerDay;
        console.log(`There have been ${Math.round(dAge)} days since my birth`);
        //console.log(today);
        //console.log(birthDay1);
        //console.log(msPerDay);
        //console.log(daysLeft);
        //console.log(dAge);

console.log()
console.log(`${header} Challenge 4 - Tic-Tac-Toe`);
console.log()

let space1 = " x ";
let space2 = " o ";
let space3 = "   ";
let space4 = " x ";
let space5 = " x ";
let space6 = "   ";
let space7 = " o ";
let space8 = "   ";
let space9 = "   ";

console.log("   |   |   ");
console.log(`${space1}|${space2}|${space3}`);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(`${space4}|${space5}|${space6}`);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(`${space7}|${space8}|${space9}`);
console.log("   |   |   ");

// let xOboard = [ [`   `] `|` [`   `] `|` [`   `],
//                [`${space1}`] | [`${space2}`] `|` [`${space3}`],
//                 [`   `] `|` [`   `] `|` [`   `],
//                `-----------`,
//                 [`   `]`|`[`   `]`|`[`   `],
//                 [`   `]`|`[`   `]`|`[`   `],
//                 [`   `]`|`[`   `]`|`[`   `],
//                 `-----------`,
//                [`   `]`|`[`   `]`|`[`   `],
//                 [`   `]`|`[`   `]`|`[`   `],
//                 [`   `]`|`[`   `]`|`[`   `] ];

//         console.log(xOboard);

console.log()
console.log(`${header}Challenge 1 (Password) - If...Else Challenges`);
console.log()

let password = "Ferrari";
//length = password.length;<=== NOT NEEDED

if(password.length > 7)
    {console.log("The password is too Long");}
        else if (password.length < 7)
            {console.log("The password is too Short");}
                else if (password.length == 7)
                    {console.log("Correct");}

console.log();
console.log(`${header} Challenge 2 Division`);
console.log();

let num = Math.floor(Math.random()*100);

if (num % 5 == 0 || num % 3 == 0)
    {console.log("This number is divisible by 3 or 5");}
        else {console.log("This number is not divisible by 3 or 5");}

console.log();
console.log(`${header} Challenge 3')`)
console.log();

// if (num % 5 == 0 && num % 3 == 0)
//         {console.log("FizzBuzz");}
//             else if (num % 3 == 0)
//                 {console.log("Fizz");}
//                     // else if(num % 3 != 0)<=== NOT NEEDED
//                     //     console.log(num);<=== NOT NEEDED
//                             else if (num % 5 == 0)
//                                 {console.log("Buzz");}
//                                     else //(num % 5 != 0)<=== NOT NEEDED
//                                         console.log(num);

switch (true){
    case (num % 3 == 0 && num % 5 == 0):
        console.log("FizzBuzz");
        break;
    case num % 3 == 0:
    //case num % 5 != 0:
        console.log("Fizz");
        break;
    case num % 5 == 0:
    //case num % 3 != 0:
        console.log("Buzz");
        break;
    default:
        console.log(num);
}

console.log();
console.log(`${header} Challenge 4 - Palindrome`)
console.log();

num = 'Math.random()*10000'

const numR = num.split('').reverse().join('');
//console.log(numR);
if (num === numR)
    {console.log("This number is a Palindrome");}
        else {console.log("This number is NOT a Palindrome");}

console.log();
console.log(`${header} Challenge 5 - Times of the Day`);
console.log();

let time = "200";
let placeOfWork = "Home";
let townOfHome = "Liverpool";

if (time.charAt(0) == "1" || time.charAt(0) == "2")
        {console.log(`hello`);}
                else{
                        if (time.charAt(1) < 7)//{0900} 
                        {console.log(`they are probably in bed at ${townOfHome}`);}
                                else if (time.charAt(1) < 9)
                                {console.log(`They are probably getting ready to start work in their ${placeOfWork} in ${townOfHome}.`);}
                                        else if (time >= 9)
                                        {console.log(`they are currently at ${placeOfWork} in ${townOfHome}`);}
                                        }

        
console.log();
console.log(`${header} Challenge 6 - Vowel in the string`);
console.log();

let str = ("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi");
//let vowels = ['a','e','i','o','u']; //<== not needed as can assign value in array, see L76   
let strR = str.split('').reverse().join('');
////console.log(vowels);
        // console.log(strR.indexOf("a"));
        // console.log(strR.indexOf("e"));
        // console.log(strR.indexOf("i"));
        // console.log(strR.indexOf("o"));
        // console.log(strR.indexOf("u"));
        //console.log(str.length -= strR);
        //console.log(strR);
let vowels = [  a =strR.indexOf("a"),
                e =strR.indexOf("e"),
                i =strR.indexOf("i"),
                o =strR.indexOf("o"),
                u =strR.indexOf("u")];
        //vowels.sort();
let vowelsMin = Math.min(...vowels);
switch(vowelsMin){
        case a:
                console.log(`The index of the last vowel is ${str.length -= a}`);
                break;
        case e:
                console.log(`The index of the last vowel is ${str.length -= e}`);
                break;
        case i:
                console.log(`The index of the last vowel is ${str.length -= i}`);
                break;
        case o:
                console.log(`The index of the last vowel is ${str.length -= o}`);
                break;
        case u:
                console.log(`The index of the last vowel is ${str.length -= u}`);
                break;
        default:
                console.log("There is no vowels in that line");
}
console.log();
console.log(`${header} Challenge 7 - true / false statement`);
console.log();

let word = "Ford";
//let wordR = word.reverse();
// if (word [0] == wordR [0])
//     console.log("True");
//         else {console.log("False");}
// console.log(wordR)
if (word.toLowerCase().charAt(0) == word.charAt(word.length-1))
    console.log("True");
        else console.log("False");

console.log();
console.log(`${header} Challenge 8 - Even Number`);
console.log();

let num1 = (Math.ceil(Math.random()*20));
let num2 = (Math.ceil(Math.random()*20));
let sum = (num1 + num2);
//console.log(num1);
//console.log(num2);
//if ((num1 && num2) % 2 == 0) <=== You have to check the eveness separatly
        if ((num1 % 2 === 0) && (num2 % 2 == 0))
                console.log(sum);
                        else
                                console.log(num1*num2);
console.log();
console.log(`${header} FUNCTIONS - Activity 1`)
console.log();

const takeOrder = (drinkType, size) => {
        console.log(`Order received: ${size} ${drinkType}`);
       }
       takeOrder("pint","Pepsi Max");

// function factorial (n) {
//         if ((n === 0) || (n === 1)) {
//         return 1;
//         } else {
//         return (n * factorial(n-1));
//         }
//        }
       
//        console.log(factorial(33))

const factorial = (n) => {
        if ((n === 0) || (n === 1)) {
        return 1;
        } else {
        return (n * factorial(n-1));
        }
       }
       console.log(factorial(33))

console.log();
console.log(`${header} Arrays - Activity 1 - Favourite Games`)
console.log();

let favGames = [
        "Gran Turismo",
        "Need for Speed (All of them)",
        "Assassin's Creed"
    ];
        console.log(favGames);
            favGames[1] = "Borderlands";
            console.log(favGames[1]);
            console.log(favGames.length);
            console.log(favGames[1].length);
                favGames.push("The Surge" , "Metal Gear Solid"); //<== add to bottom of list
                console.log(favGames);
                    favGames.pop(); //<== removes from bottom of list
                    console.log(favGames);
                    console.log(favGames[1],favGames[2]);

console.log();
console.log(`${header} Activity 2 - multiple methods`)
console.log();

const customer = [ 
        {first_name:	"Aleshia",	last_name:	"Tomkiewicz",	phone:	11835703597},
        {first_name:	"France",	last_name:	"Andrade",	phone:	1347368222},
        {first_name:	"Ulysses",	last_name:	"Mcwalters",	phone:	11912771311},
        {first_name:	"Tyisha",	last_name:	"Veness",	phone:	11547429341},
        {first_name:	"Eric",	last_name:	"Rampy",	phone:	11969886290},
        {first_name:	"Marg",	last_name:	"Grasmick",	phone:	11865582516},
        {first_name:	"Laquita",	last_name:	"Hisaw",	phone:	11746394243},
        {first_name:	"Lura",	last_name:	"Manzella",	phone:	11907538509},
        {first_name:	"Yuette",	last_name:	"Klapec",	phone:	11903649460},
        {first_name:	"Fernanda",	last_name:	"Writer",	phone:	11630202053},
        {first_name:	"Charlesetta",	last_name:	"Erm",	phone:	11276816806},
        {first_name:	"Corrinne",	last_name:	"Jaret",	phone:	11625932209},
        {first_name:	"Niesha",	last_name:	"Bruch",	phone:	11874856950},
        {first_name:	"Rueben",	last_name:	"Gastellum",	phone:	11976755279},
        {first_name:	"Michell",	last_name:	"Throssell",	phone:	11967580851},
        {first_name:	"Edgar",	last_name:	"Kanne",	phone:	11326532337},
        {first_name:	"Dewitt",	last_name:	"Julio",	phone:	11253528327},
        {first_name:	"Charisse",	last_name:	"Spinello",	phone:	11719831436}];

// Create an array of Customers first names with .map()

        const cust1stName = customer.map(function(customer){
                return customer.first_name;
});

        console.log(cust1stName)

// .shift() will remove the 1st element of an array AND next element will be position 0

favGames.shift();

        console.log(favGames);

// .slice() will return a portion of the array you specify without changing the original array

const testslice = cust1stName.slice(6, 9); //<==== Thats index 6, 7, 8 and 9.

        console.log(testslice);

// .splice(startAtThisIndex, removeThisManyItems) will remove specified indexes and hold them in new variable

const spliced = cust1stName.splice(9, 9);

        console.log(spliced);
        console.log(spliced.length);
        console.log(cust1stName);
        console.log(cust1stName.length);

console.log();
console.log(`${header} Loops - Activity 1 - Arrays with method`)
console.log();

let favCars = [
        "Nissan Skyline R33 GTR",
        "Mazda RX7",
        "Toyota Celica GT4",
        "Honda NSX",
        "Audi RS6",
    ];
    
    console.log(favCars.unshift("Mazda RX8", "Mercedes S63"));
    console.log(favCars);
    
    for (let favCarsLi = 0; favCarsLi<favCars.length; favCarsLi++){
        console.log(favCars[favCarsLi]);
    }

console.log();
console.log(`${header} Activity 2 - generate numbers between 1 - 50`)
console.log();

for (let n = 0; n < 6; n++){
        console.log(Math.ceil(Math.random() * 50));
    }

console.log();
console.log(`${header} Activity 3 - Loop from 9 to 0`)
console.log();
    
for (let n = 9; n > -1; n--){
console.log(n)
};

console.log();
console.log(`${header} Activity 4 - Films`)
console.log();

let films = [
"Matrix Trilogy",
"Constantine",
"Kung Fu Hustle",
"Shaolin Soccer"
];

for (let i = 0; i < films.length; i ++){
console.log(films[i]);
};

console.log();

let input = "Ghostbusters";
const filmCheck = () => {
if (films[2] == input) { 
        console.log(`yey! it’s ${input}`);
} else {(console.log(`booo, we want ${input}`))}
};

filmCheck();

console.log();
console.log(`${header} Activity 5 - Random numbers divisable by 7`)
console.log();

// for (let n = 0; n < 6; n++){
//     console.log(Math.ceil(Math.random() * 30));
// }

for (let n = 0; n < 6; n++) { 
        console.log(Number.isInteger(Math.ceil(Math.random() * 30) / 7)) ? 'yes' : 'no';}

console.log();
console.log(`${header} Activity 6 - do...while and while loops`)
console.log();

let n = 0;
console.log(`A WHILE loop has more lines than a FOR loop but they do the same thing`)
while (n < 6) { 
        console.log(Number.isInteger(Math.ceil(Math.random() * 30) / 7) ? 'yes' : 'no');
        n++;}

console.log;
console.log(`A DO...WHILE loop outputs value before the calculation for instances where the calculations in the loop need to be done step by step similar to IF(True) then again ELSE (END)`)
do {console.log(Number.isInteger(Math.ceil(Math.random() * 30) / 7) ? 'yes' : 'no');
n++;}
while (n < 6);

console.log();
console.log(`${header} Activity 7 - Prime Number checker`)
console.log();

// let n = 1;
// while (n = 1); n < 20; {
//     if (floor(n0 / n1) == n0 / n1) {
//     console.log(`Yes, ${n} is a Prime Number`); n++;}
//         else {console.log(`No, ${n} is not a Prime Number`)
//         }n++;
// };

// while (n = 1); n < 20; n++; {
//     if (n == (n / n) && n == (n / 1)) //!= (n / (Math.Round(Math.random() * 20)) != n)) 
//     {console.log(`Yes, ${n} is a Prime Number`); n++;}
//      else {console.log(`No, ${n} is not a Prime Number`)}
    
// };

    //console.log(Number.isInteger(n / n && n / 1 || n / 21)) ? 'Yes, It is a Prime Number' : 'No, It is not a Prime Number'};
//n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// for (let n = 1; n < 20; n++) {
//         console.log(n)
// };

// let n = 1
// while (n < 20) {
//     if ((n == (n / n) && n == (n / 1)) || (n / (Math.random() * 20) != n)) {
//     console.log(`Yes, ${n} is a Prime Number`);}
//      else {(`No, ${n} is not a Prime Number`)}
//         n++;
// };

n = 1
while (n < 21) {
    if ((1 == (n / n) && (n == (n / 1))) || (n / (Math.random() * 20) != n)) {
    console.log(`Yes, ${n} is a Prime Number`);}
     else {(`No, ${n} is not a Prime Number`)}
        n++;
};

    