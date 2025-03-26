// output
let greet = "hello";

function changeGreed(){
    let greet = "Namaste India";
    console.log(greet);

    function  greedSecond(){
        console.log(greet);  // this is called lexcical greed because inner function is calling variable of the outer function 
    }
    greedSecond();
}

console.log(greet);

greedSecond();