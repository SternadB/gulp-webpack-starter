import { car_mark, car_model, carArr } from "../car_options"

/**
 * Default init function
 */
export default function init() {
    let deleteEntry = document.querySelector("#carlist").querySelectorAll('.car span.remove')
    reindexinCar()
    addListener(deleteEntry)
}

/**
 * Add click listener
 * @param array
 */
function addListener(array) {

    array.forEach((element) =>{

        element.addEventListener('click', (event) => {
            let liClick = element.closest('li')
            let car = liClick.querySelector('.car')
            let listIndex = car.getAttribute('index')

            //Open modal window for confirmation
            openModal(liClick, listIndex)

            /*console.log(`Delete index: ${listIndex}`)

            let deleteAction = deleteEntry(listIndex)
            if(deleteAction) {
                liClick.remove()
                reindexinCar()
            }else console.log('Cant delete car at index '+listIndex)*/
        })
    })
}

function reindexinCar() {
    let indexset = 0;
    let cars = document.querySelectorAll('#carlist li .car')

    cars.forEach((element) => {

        element.setAttribute('index', indexset)
        indexset++
    })

}

/**
 * Delete entry
 * @param index
 */
function deleteEntry(index) {
    let carlength = carArr.length

    if(carArr[index]) {
        carArr.splice(index, 1)
        return true
    } else return false
}

/**
 * Open modal and set eventlistener
 * @param carName
 */
function openModal(li, index) {
    let carName = li.querySelector('.mark').textContent
    let modal = document.getElementById('modal')
    let closeIcon = modal.querySelector('span.close')
    let confirm = modal.querySelector('button.confirm')
    let cancel = modal.querySelector('button.cancel')

    modal.style.display = 'block'
    modal.querySelector('p.text').textContent = `Do you really like to delete ${carName}?`

    //On close button
    closeIcon.addEventListener('click', (event) => {
        modal.style.display = 'none'
    })

    cancel.addEventListener('click', (event) => {
        modal.style.display = 'none'
    })

    confirm.addEventListener('click', (event) => {
        let deleteAction = deleteEntry(index)
        if(deleteAction) {
            li.remove()
            reindexinCar()
            modal.style.display = 'none'
        }
    }, {once: true})
}