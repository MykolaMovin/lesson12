// Practical task 1
function upperCase(str) {
    const regExp = /^[A-Z]/;
    let message = (regExp.test(str)) ? "String's starts with uppercase character" : "String's not starts with uppercase character";
    console.log(message);
};

// Practical task 2
function checkEmail(email) {
    const emailPattern = /^\w+\@\w+\.(\w+\.)?[a-z]+$/g;
    return emailPattern.test(email);
}

// Practical task 3
let regExp = /d(b+)(d*)/i;
let string = "cdbBdbsbz";
console.log(string.match(regExp));

// Practical task 4
let testString = "Java Script";
let swappedWords  = testString.replace(/(\w+)\s(\w+)/, '$2, $1');
console.log(swappedWords);

// Practical task 5
function checkCardNumber(cardNumber) {
    let regExp = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/g;
    return regExp.test(cardNumber);
}