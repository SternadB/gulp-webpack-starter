/**
 * Best Practices
 **/

export function best_pratcises_destruction () {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
    const numbers = ['1', '2', '3', '4', '5', '6']

    console.log('%c Best practices', 'background: #2cae1e; color:#ffffff; text-transform: uppercase;')

    //const a = alphabet[0]
    //const b = alphabet[1]
    // with CS6
    //const [a, b] = alphabet
    //const [a,,c] = alphabet //skipping elements in array
    const [a,,c, ... rest] = alphabet

    //console.log(a)
    //console.log(c)
    //console.log(rest)

    //Combining array
    const newArr = [...alphabet, ...numbers]

    //console.log(newArr)

    //Function return array
    function sumAndMultiply(a, b) {
        return [a+b, a*b]
    }

    //Third parameter is default
    const [sum, multiply, division = 'No division'] = sumAndMultiply(2,3)

    //console.log(sum)
    //console.log(multiply)
    //console.log(division)

    //Object destructuring
    const personOne = {
        name: 'Blaž',
        age: 31,
        address: {
            city: 'Maribor',
            country: 'Slovenia'
        },
        sport: 'Basketball'
    }

    const personTwo = {
        age: 33,
        address: {
            city: 'Ljubljana',
        },
        sport: 'Basketball'
    }

    //const { name: firstName = 'No name', age, sport = 'No sports defined', address: { city = 'No city' } } = personOne

    //console.log(firstName)
    //console.log(age)
    //console.log(sport)
    //console.log(city)

    //Combine two objects
    const personThree = {...personOne, ...personTwo}

    //console.log(personThree)

    //Pass object in function (crazy shit)
    function printUser ({name, age, sport = 'Snorkling not!'}) {
        console.log(`User name is ${name}. User is ${age}. User sports is ${sport}`)
    }

    printUser(personOne)

}