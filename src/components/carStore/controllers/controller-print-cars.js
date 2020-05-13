import { car_mark, car_model, carArr } from "../car_options"
/**
 * Default inti function
 */
export default function init() {
    let carlenght = carArr.length

    if(carlenght > 0) {
        generatedList()
        fillList()
        updateTitle(carlenght)
    }
}

/**
 * generated list of cars
 */
function generatedList() {
    let fieldset = document.getElementsByTagName('fieldset')[0]
    let list = ''

    if(!fieldset.querySelector('#carlist')) {
        list = document.createElement('ul')
        list.id = 'carlist'
    }else{
        list = document.getElementById('carlist')
        list.innerText = ''
    }

    fieldset.appendChild(list)
}

/**
 * Fill list
 */
function fillList(){
    let carlist = document.getElementById('carlist')
    let index = 0;

    for (let car of carArr ) {
        let list = document.createElement('li')
        let mark = car['mark']
        let model = car['model']
        let typ = car['typ']
        let turbo = car['safety'][0]
        let abs = car['safety'][1]
        let esp = car['safety'][2]


        list.innerHTML = `<div class="car" index="${index}">
                            <div class="left">
                                <p class="mark">${car_mark[mark]['name']} - ${car_model[mark][model]}</p>
                                <p class="typ">${typ}</p>
                                <ul>
                                    <li ${turbo ? 'class="oop"' : ''}>Turbo: ${turbo ? 'Yes' : 'No'}</li>
                                    <li ${abs ? 'class="oop"' : ''}>ABS: ${abs ? 'Yes' : 'No'}</li>
                                    <li ${esp ? 'class="oop"' : ''}>ESP: ${esp ? 'Yes' : 'No'}</li>
                                </ul>
                            </div>
                            <div class="right">
                                <span class="remove" id="${index}">X</span>
                            </div>
                            </div>`

        carlist.appendChild(list)
        index++
    }
}

/**
 * Update car title
 * @param carlength
 */
function updateTitle(carlength) {
    let title = document.querySelector('fieldset').querySelector('h2')
    let lengthText = carlength ==1 ? "List of one car" : "List of "+carlength+" cars"

    title.textContent = lengthText

}