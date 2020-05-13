//Main.js files
import { barFunction as bar01 } from './bar.js'
import User, { printName as printUserName, printAge as printUserAge} from './tutorials/user.js'
import {best_pratcises, best_pratcises_destruction} from "./tutorials/BP_destrustion";
import {Person, bp_arrow_functions} from "./tutorials/BP_arrowFunctions";

/*Grabs some select element
var myNodeList 	= document.querySelectorAll('select')
console.log('Here we are!!!')
bar01(myNodeList)*/

/**
 * For class User
 */
//let firstUser = new User('Blaž', 31);
//console.log(`User name is: ${firstUser.name} and he/she is ${firstUser.age} years old!`);
//printUserName(firstUser);
//printUserAge(firstUser);

/**
 * Best practices
 */

//Destructuring arrays, objects, functions...
//best_pratcises_destruction()

//Arrows functions
//bp_arrow_functions()
let p1 = new Person('Blaž')
p1.printnameArrow()
p1.printNameNormal()