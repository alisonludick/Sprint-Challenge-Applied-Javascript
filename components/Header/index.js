// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:

//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container')

function indexHeader() {
    let headerDiv = document.createElement('div')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    
    let h1 = document.createElement('h1')

    headerDiv.classList.add('header')

    headerDiv.appendChild(span1)
    span1.classList.add('date')
    span1.textContent = 'MARCH 28, 2019'

    headerDiv.appendChild(h1)
    h1.textContent = 'Lambda Times'


    headerDiv.appendChild(span2)
    span2.classList.add('temp')
    span2.textContent = '98°'

    return headerDiv
}

let myHeader = indexHeader()

console.log(myHeader)

headerContainer.appendChild(myHeader)