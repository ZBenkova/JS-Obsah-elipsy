//Obsah elipsy
const ellipseArea = (height, width) => {
    let vysledek=height/2*width/2*Math.PI
    return vysledek
}

ellipseArea (29,30)

document.body.innerHTML += ellipseArea (1, 2)


// maximum ze dvou cisel

const max2 = (number1, number2) => {
    let vysledek 
    if (number1 <= number2) {
        vysledek = number2
    } else {
        vysledek = number1
    } 
    return vysledek
}
max2 (2,3)

document.body.innerHTML += max2(678, 76)