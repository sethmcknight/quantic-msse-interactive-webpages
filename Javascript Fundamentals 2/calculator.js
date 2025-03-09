/*
function drink () {
    alert("Cortado");
};

drink();
*/

/*
let num1 = parseInt(prompt('Type in a number.'));
let num2 = parseInt(prompt('Type in another number.'));

function add(x, y) {
    return x + y;
}

alert(add(num1, num2));
*/

//Global Variables
const passing = 75;

//Functions
function getCurrent(){
    return parseInt(prompt('What is your current grade?'));
};

function getWeight(){
    return parseInt(prompt('What is the weight of the exam?'));
};

function calculate(c, w){
    let finalScore = ((passing - (1 - (w/100)) * c) / (w/100));
    let rounded = Math.round(finalScore);
    return `You must get a score of ${rounded}% to pass.`;
}

alert( calculate(getCurrent(), getWeight()) );