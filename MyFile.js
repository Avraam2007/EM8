alert("Hello world!")

let a = 0;

while(a>=0) {
    a++;
}

let b = a--;
let info = prompt("Who are you?");
console.log(b);
if (a===0) {
    console.log(`Hello, ${info}`);
}