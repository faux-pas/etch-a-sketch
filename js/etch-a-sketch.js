var div = document.createElement('div');

window.onload = () => {
    var startBtn = document.getElementById("startBtn");
    startBtn.addEventListener('click', createSketchArea);
    var randomBtn = document.getElementById("randomBtn");
    randomBtn.addEventListener('click', random);
}

function createSketchArea() {
    var etch = document.getElementById("etchArea");
    etch.innerHTML = '';
    var num = prompt("Enter the size of the grid you want");
    var blockSize = 100 / num;
    var rowSize = etch.offsetHeight / num;
    for (var i = 0; i < num; i++) {
        var row = div.cloneNode();
        row.setAttribute('class', 'sketch-row')
        for (var j = 0; j < num; j++) {
            var block = div.cloneNode();
            block.setAttribute('class', 'block');
            block.setAttribute('style', 'width:' + blockSize + '%;');
            block.setAttribute('coloured', 'false');
            block.addEventListener('mouseover', colourBlack);
            row.append(block);
        }
        etch.append(row);
    }
}

function colourBlack(e) {
    e.target.classList.add('colourBlack');
}

function colourRandom(e) {

    if (e.target.getAttribute('coloured') == 'false') {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        e.target.style.filter = `brightness(100%)`;
        e.target.setAttribute('coloured', 'true');
    }else{
        let currentBrightness = e.target.style.filter.match(/\d/g);
        let brightness = currentBrightness.join("");
        e.target.style.filter = `brightness(${brightness - 10}%)`;
    }

}

function random() {
    let blocks = document.querySelectorAll('.block');
    console.log({ blocks });
    blocks.forEach(block => {
        block.removeEventListener('mouseover', colourBlack);
        block.addEventListener('mouseover', colourRandom);
    });
}