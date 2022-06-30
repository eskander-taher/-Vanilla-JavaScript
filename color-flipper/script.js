const colorVal = document.getElementById('color-val')
const btn = document.getElementById('click-me')
const bgColor = document.getElementById('color-val')
const body = document.getElementsByTagName('body')[0]


btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 1000000)
    let color = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
    body.style.backgroundColor = color
    colorVal.innerText = color
})