import {car_mark as mark, car_model as model} from "../car_options"

//Init function
export default function init() {
    fill_mark_select()
}

//Fill mark select
function fill_mark_select () {
    let form = document.querySelector('form')

    if(form.id == 'addCar') {
        let mark_select = form.querySelector('#mark')
        onClick(mark_select)

        for (let key in mark) {
            let option = document.createElement('option')
            option.value = mark[key]['id']
            option.text = mark[key]['name']

            mark_select.appendChild(option)
        }
    }
}

//Change function
function onClick (mark_select) {
    mark_select.addEventListener('change', (event) =>{
        let choice = mark_select.value

       fill_model_select(choice)
    })
}

//Fill model select
function fill_model_select (id_mark) {
    let form = document.querySelector('form')
    let model_select = form.querySelector('#model')
    //Removing useless childs
    removeOptions(model_select)


    model[id_mark].forEach((element, index) => {
        let option = document.createElement('option')
        option.value = index
        option.text = element
        model_select.appendChild(option)
    })
}

//Removing options from select
function removeOptions(model_select) {
    let removingChilds = model_select.querySelectorAll('option')

    for (let option of removingChilds ) {
        let value = option.value

        if(value != 'null') {
            model_select.removeChild(option)
        }
    }
}

