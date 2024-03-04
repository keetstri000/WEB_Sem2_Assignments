const numbers = ["1","2","3","4","5","6","7","8","9","10"]

for(let i = 0; i < 10, i++;){
    let num = Math.floor(Math.random() * 10) + 1;
    numbers.push(num);
}

document.getElementById("unsorted").innerHTML = numbers;