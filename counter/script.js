const counter = document.getElementById('counter')
const increase = document.getElementById('increase')
const reset = document.getElementById('reset')
const decrease = document.getElementById('decrease')

let count = 0


increase.addEventListener('click', () => {
    count = count + 1
    check(count)
    counter.innerText = "" + count
})

decrease.addEventListener('click', () => {
    count = count - 1
    check(count)
    counter.innerText = "" + count
})

reset.addEventListener('click', () => {
    count = 0
    check(count)
    counter.innerText = "" + count
})

function check(count) {
    if (count > 0) {
        counter.style.color = "green"
    }
    else if (count < 0) {
        counter.style.color = "red"
    }
    else {
        counter.style.color = "black"
    }
}