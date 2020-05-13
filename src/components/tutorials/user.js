export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

export function printName(user) {
    console.log(`Users name is ${user.name}`)
}

export function printAge(user) {
    console.log(`User is ${user.age} years old.`)
}

//export default User
//export {printAge, printName}

/**
 * !!
 * default export is only one per file and usually is main class in this case User
 */