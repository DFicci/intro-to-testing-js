// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function notHelloWorld(){
    return "Let's hope this works";
}
//allows other strings to be passed through to say "hello, *name* " if not returns "Hello, World"----------------
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
// // This function tests to see if num is equal to 5, string or number.--------------------------------------------
function isFive (num) {
    return parseInt(num) === 5;
}
// This function tests to see if even is true
function isEven (isAnEvenNumber){
    return parseInt(isAnEvenNumber) % 2 === 0;

}
//this function will only allow vowels
function isVowel (isItVowel){
    let vowel
    if (typeof isItVowel === 'string'){
        vowel = isItVowel.toLowerCase()
    }

    switch (vowel){
        case "a":
            return true
        case "e":
            return true
        case "i":
            return true
        case "o":
            return true
        case "u":
            return true
        default:
            return false
    }
}
