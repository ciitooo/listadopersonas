const form = document.getElementById('form')
const list = document.getElementById('list')

let fragment = document.createDocumentFragment()



form.addEventListener('submit', (e) => {
	e.preventDefault()
	let item = document.createElement('LI')
	item.textContent = `${form.children[0].value} ${form.children[1].value}`
	item.classList.add('list__item')
	if (item.textContent.trim().length == 0) {
		alert('no se puede agregar un texto vacio')
	}
	else list.appendChild(item)
})


