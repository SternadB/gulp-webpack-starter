
// Uncaught TypeError: Object # has no method 'forEach'
export function barFunction (myNodeList) {
    let selectItem = document.querySelector('.selected-items');

	myNodeList.forEach( el=> {
		let select = el;
		let name = select.name;
		let text = select.options[select.selectedIndex].text;

		//Edd event listener
		el.addEventListener('change', event =>{
			let selectedItemText = el.options[el.selectedIndex].text;
			let selectedItemValue = el.value;
			selectItem.textContent = `Change ${name} from ${text} to ${selectedItemText} (value: ${selectedItemValue})`;
		});
	});
}