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
}