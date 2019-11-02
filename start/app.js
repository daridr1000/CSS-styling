var fullName = "Darius Dragnea"
const nstates = 50
var number = nstates + 5 + 4
console.log(number)

function sayHello() {
    return "Hello World!"
}

console.log(sayHello())

function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you are not old enough to view this page!")
    }
}
checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

var vegetables = ["onions", "garlic", "pickles", "cabbage", "potatoes"]

for (let i of vegetables) {
    console.log(i)
}

var array = [
    obj1 = {
        name: "Charles",
        age: 21
    },
    obj2 = {
        name: "Darius",
        age: 19
    },
    obj3 = {
        name: "Zulfikar",
        age: 22
    },
    obj4 = {
        name: "Sharon",
        age: 18
    },
    obj5 = {
        name: "Charlotte",
        age: 40
    }
]

for(var i of array ){
    checkAge(i.name,i.age)
}

function getLength(word){
    return word.length
}

var n=getLength("Hello, World!")

console.log(n)
if(n%2==0){
    console.log("The world is even!")
}
else{
    console.log("The world is odd!")
}