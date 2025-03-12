const $h2 = document.querySelector('h2');
// query Selector by ID
const $list = document.querySelector('#my-list');
// create a variable that references the span element
const $span = document.querySelector('span');

$h2.textContent = "Ken's To Do List";

let $items = $list.getElementsByTagName('li');

// create global variable equal to length of items array
let num = $items.length;

update();

// create the functions to update the todo list
// function updates the number of items in the list
function update() {
    $span.textContent = `Number of items: ${num}`;
    if (num === 0) {
        alert('You have no items in your list');    
    };
};

// function to add a new item to the list
function addListItem(text) {
    let $item = document.createElement('li');
    $item.textContent = text;
    $list.append($item);
    num++;
    update();
}

addListItem("Eat");

/* store all list items in an array
let $items = $list.getElementsByTagName('li');
*/
// function to remove an item from the list
function removeItem(index) {
    $items[index].remove();
    num--;
    update();
}
// function to strike through an item in the list
function strikeItem(index) {
    $items[index].setAttribute('class', 'strike');
    num--;
    update();
}