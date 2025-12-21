import { sum, arrowSum, PI } from "./amazingMath.js"
import { fetchUsers } from "./api.js"

fetchUsers()

const sum1 = sum(1, 5)
const sum2 = arrowSum(4, 2)
console.log(PI)

const person = {
    firstName: "",
    lastName: "",
    address: {
        city: "Plovdiv",
        street: "Tralala",
        number: "12A"
    },
    age: 50,
    hobbies: ["Skiing", "Skating", "Fitness"]
}
console.log(person.address.city)

person.firstName = "Peter"
console.log(person.firstName)

const personInfo = `${person.firstName} is not so old: ${person.age}`
console.log(personInfo)

/*
import * as math from "./amazingMath.js"

const sum1 = math.sum(1, 5)
const sum2 = math.arrowSum(4, 2)
*/

console.log(sum1, sum2)


const a = { 
    number01: 2, 
    number02: 3,
}

const b = {
    chisloto3: 4,
    chisloto4: 5,
}

const mergedAandB = {...a, ...b}
const clonedA = {...a}

const array1 = [1,2,3]
const array2 = [4,5,6]

const clonedArray1 = [...array1]

const mergedArrays = [...array1, ...array2]


const fruit = {
    fruitName: "Kiwi",
    weight: 100,
    size: "L"
}

const { fruitName, weight } = fruit
console.log(fruitName, weight)

const { t } = { t : 1}
console.log(t)














