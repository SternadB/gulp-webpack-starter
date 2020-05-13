/**
 * ARROW FUNCTIONS
 */

export function bp_arrow_functions () {
    console.log('%c Arrow functions', 'background: #2cae1e; color:#ffffff; text-transform: uppercase;')

    /*function sum (a, b) {
        return a+b
    }*/
    let sum = (a ,b) => a+b
    /* function isPositive (number) {
        return number >= 0
    }*/
    let isPositive = number => number >= 0
    /*function randomNumber () {
        return Math.random
    }*/
    let randomNumber = () => Math.random
    /*
    document.addEventListener('click', function () {
        console.log('Click!')
    })*/

    document.addEventListener('click', (event) => console.log(event.target))

    console.log(sum(2,2))
    console.log(isPositive(1))
    console.log(randomNumber())
}

export class Person {
    constructor (name) {
        this.name = name
    }

    printnameArrow() {
        setTimeout(() => {
            console.log('Arrow: '+this.name)
        }, 100)
    }

    printNameNormal() {
        setTimeout(function () {
            console.log('Function: '+this.name)
        }, 100)
    }
}