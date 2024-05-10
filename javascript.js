var currentColor = 'red';
function changeColor() {
        var button = document.getElementById('colorButton');
        if (currentColor === 'red') {
                button.style.backgroundColor = 'yellow';
                currentColor = 'yellow';
         }else if (currentColor === 'yellow') {
                button.style.backgroundColor = 'green';
                currentColor = 'green';
        }else if (currentColor === 'green') {
                button.style.backgroundColor = 'red';
                currentColor = 'red';
        }
}
