import Car from "../car"
import { carArr } from "../car_options"
import printCar from "./controller-print-cars"
import deleteentry from "./controller-delete-entry"

/**
 * Default init function
 */
export default function init() {
    let form = document.getElementById('addCar')

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        event.stopPropagation()

        let formElements = form.elements
        form_validation(formElements)
    })
}

/**
 * Converting array to object
 * @param datas
 */
function convertingToObject(datas) {
    let safety = [datas[3], datas[4], datas[5]]
    let newCar = new Car(1, datas[0], datas[1], datas[2], safety)

    carArr.push(newCar)

    printCar()
    deleteentry()
}

/**
 * Form validations
 * @param formElements
 */
function form_validation(formElements) {
    let mark = formElements['mark'].value
    let model = formElements['model'].value
    let typ = formElements['typ'].value
    let turbo = formElements['turbo'].checked
    let abs = formElements['abs'].checked
    let esp = formElements['esp'].checked

    if(mark == 'null' || model == 'null') {
        setWarnings()
        if(mark == 'null') {
            formElements['mark'].parentElement.style.border = 'solid 1px red'
        }
        if (model == 'null')  formElements['model'].parentElement.style.border = 'solid 1px red'
    }else {
        let submitedForm = [mark, model, typ, turbo, abs, esp]
        convertingToObject(submitedForm)
    }
}

/**
 * Set warnings if all fields are not filled properly
 */
function setWarnings() {
    let warnings = document.getElementById('warnings')
    warnings.textContent = 'Please fill out all mandatory fields!'
    warnings.setAttribute('style', 'color: red; font-weight: bold;')
}