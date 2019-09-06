// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:

//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(headertitle) {
    const headerComp = document.createElement('h1');
    headerComp.textContent = headertitle;
    headerComp.classList.add('header');

    return headerComp;
}

let topHeader = headertitle('Lambda Times');

parent.appendChild(topHeader);