//Global Variables
let time = 30;
const message = "Wake up!";

//Functions
for (let i = 0; i <= time; i++){
    if (i === time){
        setTimeout(alert, i*1000, i);
    } else {
        setTimeout(console.log, i*1000, i);
}
};

setTimeout(alert, time*1000, message);
