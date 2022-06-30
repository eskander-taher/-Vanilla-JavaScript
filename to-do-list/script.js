const input = document.getElementById('input')
const addBtn = document.getElementById('add')
const list = document.getElementById('list')

addBtn.addEventListener('click', () => {
    let newItem = addItem()
    newItem.firstElementChild.innerText = input.value

    if (input.value) {
        list.appendChild(newItem)
        input.value = ''

        const deleteBtns = document.querySelectorAll('.delete')
        deleteBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener('click', () => {
                deleteBtn.parentElement.remove()
            })
        })

        const doneBtns = document.querySelectorAll('.done')
        doneBtns.forEach(doneBtn => {
            doneBtn.addEventListener('click', () => {
                doneBtn.parentElement.firstChild.style.textDecorationLine = "line-through"
            })
        })

    }
})

function addItem() {

    let item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = `<span class="word"></span>
    <button class="done">Done</button>
    <button class="delete">Delete</button>`
    return item
}
