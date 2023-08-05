const container = document.querySelector('#container');

function createGrid (num) {
    for (let i=0;i<num;++i){
        let column = document.createElement('div');
        column.classList.add('column');
        for (let j=0;j<num;++j) {
            let row = document.createElement('div');
            row.classList.add('row');
            //row.textContent = '';
            
            column.appendChild(row);
        }
        container.appendChild(column);
    }
};

createGrid(16);