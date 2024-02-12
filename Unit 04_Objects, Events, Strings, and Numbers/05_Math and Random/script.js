function takeSquareRoot() {
    let number = +document.getElementById("input1").value;

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innervalueHTML = squareRoot

}
function takeSin(){
    let number = +document.getElementById("input2").value;

    let sin = Math.sin(number * Math.PI / 180);
    document.getElementById("result").innervalueHTML = sin
}
function takeCos(){
    let number = +document.getElementById("input3").value;

    let cos = Math.sin(number * Math.PI / 180);
    document.getElementById("result").innervalueHTML = cos
}