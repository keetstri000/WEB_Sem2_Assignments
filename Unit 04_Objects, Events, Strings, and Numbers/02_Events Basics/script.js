function mouseOverHandler() {
    document.getElementById("demo").innerHTML = "Hello Again;"
}

function mouseOutHandler() {
    document.getElementById("kitties").hidden = false;
}

function keyDownHandler() {
    let x = 5
    let y = x + 7
    document.getElementById("memo").innerHTML = y;
    
}

function keyUpHandler() {
    document.getElementById("greg").hidden = true;
}