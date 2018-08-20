const hexCombinations = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const bodyBgc = document.querySelector('body');
const hexBtn = document.querySelector('.hexBtn');
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click',getHex);

function getHex (){
    let hexCol = "#"

    for(i=0; i<6; i++){
        let random = Math.floor(Math.random()*hexCombinations.length)

        hexCol += hexCombinations[random];

    }
    bodyBgc.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}
