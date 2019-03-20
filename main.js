let textField = document.getElementById('txtfield')
let mainBtn = document.getElementById('button')
let mainList = document.getElementById('list')

let mainArray = []

appEvents()

function appEvents() {
    window.addEventListener('load', ceateArray)
    mainBtn.addEventListener('click', getSearch)
}

function ceateArray() {
    for (let i = 0; i < 50; i++) {
        mainArray[i] = Math.floor(Math.random() * (10 - 1) + 1)
    }

    console.log(mainArray)
}

function getSearch() {

    let search = textField.value
    let arrayIdexes = []
    let i = 0
    let text = `<li class="list-group-item active">
    ${search} matches at the following position(s):
    </li>`

    mainArray.forEach((currentValue, currentIndex) => {

        if (currentValue == search) {
            arrayIdexes[i] = currentIndex
            text += `<li class="list-group-item"> 
        ${ arrayIdexes[i]}
        </li>`
            i++
        }
    })

    console.log(arrayIdexes)

    mainList.innerHTML = text
}