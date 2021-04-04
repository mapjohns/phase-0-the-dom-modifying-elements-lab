// Write your code here!
const remMain = document.getElementById('main')
remMain.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
document.body.appendChild(newHeader)

newHeader.innerHTML = 'is the champion'