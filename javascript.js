const container = document.querySelector('#container');

function createGrid (num) {
    let x = 960/num;
    for (let i=0;i<num;++i){
        let column = document.createElement('div');
        column.classList.add('column');
        for (let j=0;j<num;++j) {
            let row = document.createElement('div');
            row.classList.add('row');
            
            customHover(row);

            row.style.width = x + 'px';
            row.style.height = x + 'px';
            column.appendChild(row);
        }
        container.appendChild(column);
    }
};

createGrid(16);

function customHover (row) {
    row.addEventListener('mouseover', () => {
        const rgbArray = new Array(3);
        for (let i=0;i<rgbArray.length;i++) {
            rgbArray[i] = Math.floor(Math.random() * 256);
        }

        row.style.backgroundColor = 'rgb(' + rgbArray[0] + ',' + rgbArray[1] + ',' + rgbArray[2] + ')';
    });
};

function newGrid() {
    let num = prompt("Please enter the new grid dimensions (they must be <=100)");

    container.innerHTML = "";
    if(num != null && num <= 100){
        
        createGrid(num);
    }
};