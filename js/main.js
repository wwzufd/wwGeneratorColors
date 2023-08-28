document.addEventListener('DOMContentLoaded', function() {
    const fill1 = document.getElementById('color1');
    const hexColor = convertColor();
    fill1.style.backgroundColor = `#${hexColor}`;
    updateTextColor(fill1);
    document.getElementById('idTextColor1').innerText = `#${hexColor}`;
});

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        changeColor();
    }
});
function handleSpaceKeyPress(event) {
    if (event.keyCode === 32) {
        event.preventDefault();
    }
}

function changeColor() {
    for (let i = 1; i <= 6; i++) {
        const currentFill = document.getElementById(`color${i}`);
        if (getComputedStyle(currentFill).display === 'flex') {
            const hexColor = convertColor();
            currentFill.style.backgroundColor = `#${hexColor}`;
            updateTextColor(currentFill);
            document.getElementById(`idTextColor${i}`).innerText = `#${hexColor}`;
        }
    }
}


let currentElement = 2;

function addFill() {
    const button = document.getElementById('buttonAddColor');
    button.addEventListener('keydown', handleSpaceKeyPress);

    const currentFill = document.getElementById(`color${currentElement}`);
    if (currentFill) {
        if (getComputedStyle(currentFill).display === 'none') {
            currentFill.style.display = "flex";

            const hexColor = convertColor();
            currentFill.style.backgroundColor = `#${hexColor}`;
            updateTextColor(currentFill);
            document.getElementById(`idTextColor${currentElement}`).innerText = `#${hexColor}`;
        }
        currentElement++;
        if (currentElement >= 7) {
            currentElement = 7;
        }
    }
    console.log(currentElement - 1);
}

function remFill() {
    const button = document.getElementById('buttonRemColor');
    button.addEventListener('keydown', handleSpaceKeyPress);

    if (currentElement > 2) {
        currentElement--;
        const currentFill = document.getElementById(`color${currentElement}`);
        if (currentFill) {
            if (getComputedStyle(currentFill).display === 'flex') {
                currentFill.style.display = "none";
            }
            if (currentElement <= 2) {
                currentElement = 2;
            }
        }
    }
    console.log(currentElement - 1);

}