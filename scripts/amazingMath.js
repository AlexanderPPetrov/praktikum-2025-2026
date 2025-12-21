export function sum(a, b) {
    return a + b
}

export const arrowSum = (a, b) => a + b

export const PI = 3.14


export function getEvenNumbers(numberArray) {
    return numberArray.filter((el) => el % 2 === 0)
}

export function getNumbersAbove(numberArray, above = 10) {
    return numberArray.filter((el) => el > above )
}


export function addCountToNumbersInArray(numberArray, addition = 1) {
    return numberArray.map((el) => el + addition)
}

export function sumNumbersInArray(numberArray) {
    return numberArray.reduce(( acc, curr) => {
        return acc + curr
    }, 0)
}

export function sumEvenNumbersInArray(numberArray) {
    return numberArray.reduce(( acc, curr) => {
        if(curr % 2 === 0) {
            return acc + curr
        }
        return acc
    }, 0)
}



