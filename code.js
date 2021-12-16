// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function notHelloWorld(){
    return "Let's hope this works";
}
function sayHello (name){
    if (typeof name !== 'string'){
        return 'Hello, World!';
    } else if (name === ""){
        return 'Hello, World!';
    } else if (!isNaN(name)){
        return "Hello, World!";
    }
    return "Hello, " + name + "!"
}
function isFive (num){
    return parseInt(num) === 5;
}

