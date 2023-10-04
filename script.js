"use strict";
/*
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true

if (hasDriversLicense) console.log('I can drive')

// const interface = 'Audio' //Error

// const private = 534 //Error
*/
/***************************Functions****************************/
/*
// Function Declaration
function logger() {
    console.log('My Name is Jonas')
}

// calling / running / invoking function
console.log(typeof(logger()))   // returns undefined
logger()
logger()


function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

const num = Number('23')


function calcAge1(birthYear){
    return 2037 - birthYear
}

const age1 = calcAge1(1991)
console.log(age1)


// Function Expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear
}

const age2 = calcAge2(1991)
console.log(age2)

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear

const age3 = calcAge3(1991)
console.log(age3)


const yearUntilRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} year${retirement > 1 ? 's' : ''}`
}
console.log(yearUntilRetirement(1991, 'jonas'))
console.log(yearUntilRetirement(1980, 'Bob'))
*/

/*****************Function calling another Function****************/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces}\
 pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
/***********************Coding Challenge*************************/
/*
const calcAverage = (score_1, score_2, score_3) => (score_1 + score_2 + score_3) / 3

const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= 2*avgKoalas) {
        return `Dolphins with ${avgDolphins} score wins🏆`
    } else if (avgKoalas >= 2*avgDolphins){
        return `Koalas with ${avgKoalas} score wins🏆`
    }else{
        return `NO WINNER☹️
        Dolphins: ${avgDolphins}
        Koalas: ${avgKoalas}`
    }
}

const avgDolphins1 = calcAverage(44, 23, 71)
const avgKoalas1 = calcAverage(65, 54, 49)

const avgDolphins2 = calcAverage(85, 54, 41)
const avgKoalas2 = calcAverage(23, 34, 27)


console.log('Match - 1:',checkWinner(avgDolphins1, avgKoalas1))
console.log('Match - 2:',checkWinner(avgDolphins2, avgKoalas2))
*/

/***************************Arrays******************************/
/*
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020)
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length-1])

friends[2] = 'Jay'
console.log(friends)

const jonas = ['Jonas', 'Schmendtmann', 2037 - 1991, 'teacher', friends]

console.log(jonas)
console.log(jonas.length)

const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[2])
const age4 = calcAge(years[3])
console.log(age1, age2, age3, age4)

const ages = [age1, age2, age3, age4]
console.log(ages)

// Usefull array methods.

friends.push('Peter')  // Add element to the last of array and returns length of the new array.
console.log(friends)

const newLength = friends.push('Hary')
console.log(newLength)

friends.unshift('John')  // Add element to the front of array and returns the length of new array.
console.log(friends)

friends.pop()  // Remove the last element out of the array. And returns the poped element.
console.log(friends)

friends.shift()  // Remove the first element out of the array. And returns the length of the new array.
console.log(friends)

console.log(friends.indexOf('Steven'))

console.log(friends.indexOf('Bob'))  // returns -1 as the element is not in the array.


console.log(friends.includes('Steven'))  // Returns true if the element is in the array. Uses strict equality.
console.log(friends.includes('Bob'))    
friends.push(23)
console.log(friends.includes('23'))
console.log(friends.includes(23))
*/
/***********************Coding Challenge2************************/
/*
const calcTip = function(bill){
    return bill > 300 ? bill * 0.2 : bill * 0.15
}

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips)

const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]

console.log(totals)
*/

/*************************Objects*********************************/
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    birthYear: 1991,
    // calcAge: function(birthYear){
    //     return 2037 - birthYear
    // }
    // 
    calcAge: function(){
        this.age = 2037 - this.birthYear
        return this.age
    },
    getSummery: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} 
and has ${this.hasDriversLicense ? 'a': 'no'} driver's license.`
    }
}

console.log(jonas)

console.log(jonas.lastName)  // calling the property of the jonas object.
console.log(jonas['lastName'])  // calling the property of the jonas object 

const nameKey = 'Name'
console.log(jonas['first'+ nameKey])
console.log(jonas['last'+ nameKey])

const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstName, lastName, age, job, and friends')

if (jonas[interestedIn]){
    console.log(jonas[interestedIn])
}else{
    console.log('Bad Request!')
}

jonas.location = 'Portugal'         // Adding property with value in object
jonas['twitter'] = "@jonasschmedtmann"  // Adding property with value in object
console.log(jonas.location, jonas.twitter)

// Challenge
// Jonas has 3 friends, and his best friend in called Michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends\
and his best friend is called ${jonas.friends[0]}`)

console.log(jonas.calcAge())
console.log(jonas.age)

// Challenge
// jonas is 46-years old teacher and he has a/no driver's License

console.log(jonas.getSummery())
*/
/*************************Coding Challenge3***********************/
/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,
    
    calcBMI: function(){
        this.BMI = this.weight / this.height**2
        return this.BMI
    }
}
const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    
    calcBMI: function(){
        this.BMI = this.weight / this.height**2
        return this.BMI
    }
}

john.calcBMI()
mark.calcBMI()

if (john.BMI > mark.BMI){
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI})
is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI})`)
}
else{
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI})
is higher than ${john.firstName} ${john.lastName}'s BMI (${john.BMI})`) 
}
*/
/*****************************For Loop******************************/
/*
for (let rep = 1 ;rep <= 10; rep++){
    //console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
}

const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
]
const types = []

for (let i = 0; i < jonas.length; i++){
    console.log(jonas[i])
    types.push(typeof(jonas[i]))
}


console.log(types)

const years = [1991, 2007, 1969, 2020, 2022]
const ages = []

for(let i = 0 ; i < years.length; i++){
    ages.push(2037 - years[i])
}
console.log(ages)

// continue and break.
console.log('------ONLY STRINGS-----')
for (let i = 0; i < jonas.length; i++){
    if (typeof(jonas[i]) !== 'string') continue
    console.log(jonas[i])
}

console.log('------BREAK WITH NUMBER-----')
for (let i = 0; i < jonas.length; i++){
    if (typeof(jonas[i]) === 'number') break
    console.log(jonas[i])
}

// Looping backwards and Loop in Loop.
for (let i = jonas.length-1; i >= 0; i--){
    console.log(jonas[i])
}


for (let exercise = 1; exercise < 4; exercise++){
    console.log(`------------Starting exercise ${exercise}`)
    for (let rep = 1; rep < 6; rep++){
        console.log(`Lifting weight repetition ${rep}🏋️‍♂️`)
    }
}
*/
/*************************While Loop***************************/
/*
let rep = 1
while (rep <= 10){
    console.log(`Lifting weights repetition ${rep}🏋️‍♂️`)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
while (true){
    if (dice === 6){ 
        console.log(`Loop is about to end...`)
        break
    }
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1  
}
*/
/***********************Coding Challenge4*************************/
/*
const calcTip = function (bill) {
  return bill > 300 ? bill * 0.2 : bill * 0.15;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

for (let i = 0; i < tips.length; i++) {
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const arrayAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const billsAvg = arrayAvg(bills);
const tipsAvg = arrayAvg(tips);
const totalsAvg = arrayAvg(totals);

console.log(billsAvg);
console.log(tipsAvg);
console.log(totalsAvg);
*/
/************************Debuging******************************/
/*
const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Degrees celsius'),
    }
    const kelvin = measurement.value + 273
    return kelvin
}
console.log(measureKelvin())
*/

