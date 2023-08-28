const fillColor = document.querySelector(".fillColor");
const fill1 = document.getElementById('color1');
const fill2 = document.getElementById('color2');
const fill3 = document.getElementById('color3');
const fill4 = document.getElementById('color4');
const fill5 = document.getElementById('color5');
const fill6 = document.getElementById('color6');


function generateColor(){
    const colorR = Math.floor(Math.random() * 256);
    const colorG = Math.floor(Math.random() * 256);
    const colorB = Math.floor(Math.random() * 256);
    return `${colorR}, ${colorG}, ${colorB}`
}
function convertColor(){
    const colors = generateColor();
    const colorsArray = colors.split(',');
    const colorsNumbers = colorsArray.map(Number);
    const [colorR, colorG, colorB] = colorsNumbers;
    const hexR = colorR.toString(16).padStart(2, '0');
    const hexG = colorG.toString(16).padStart(2, '0');
    const hexB = colorB.toString(16).padStart(2, '0');
    
    return `${hexR}${hexG}${hexB}`;
}
function changeColor(){ 
    const hexColor1 = convertColor();
    const hexColor2 = convertColor();
    const hexColor3 = convertColor();
    const hexColor4 = convertColor();
    const hexColor5 = convertColor();
    const hexColor6 = convertColor();
    fill1.style = `background-color: #${hexColor1}`;
    updateTextColor(fill1);
    document.getElementById('idTextColor1').innerText = `#${hexColor1}`;
    
    if (getComputedStyle(fill2).display == 'flex'){
        fill2.style = `background-color: #${hexColor2}`;
        updateTextColor(fill2);
        document.getElementById('idTextColor2').innerText = `#${hexColor2}`;

    } if (getComputedStyle(fill3).display == 'flex'){
        fill3.style = `background-color: #${hexColor3}`;
        updateTextColor(fill3);
        document.getElementById('idTextColor3').innerText = `#${hexColor3}`;

    } if (getComputedStyle(fill4).display == 'flex'){
        fill4.style = `background-color: #${hexColor4}`;
        updateTextColor(fill4);
        document.getElementById('idTextColor4').innerText = `#${hexColor4}`;

    } if (getComputedStyle(fill5).display == 'flex'){
        fill5.style = `background-color: #${hexColor5}`;
        updateTextColor(fill5);
        document.getElementById('idTextColor5').innerText = `#${hexColor5}`;
        
    } if (getComputedStyle(fill6).display == 'flex'){
        fill6.style = `background-color: #${hexColor6}`;
        updateTextColor(fill6);
        document.getElementById('idTextColor6').innerText = `#${hexColor6}`;
    }
    function isColorDark(color) {
        const rgb = color.match(/\d+/g);
        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
        return brightness < 128;
    }
    function updateTextColor(fill) {
        const backgroundColor = getComputedStyle(fill).backgroundColor;
        const isDark = isColorDark(backgroundColor);
        if(!isDark){
            fill.style.color = "rgba(0, 0, 0, 0.6)"
        } if(isDark){
            fill.style.color = "rgba(255, 255, 255, 0.8)"
        }
    }}

function addFill() {

}