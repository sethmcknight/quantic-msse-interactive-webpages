const $h2 = document.querySelector('h2');
/* query Selector by ID
const $list = document.querySelector('#my-list');
*/
$h2.textContent = "Ken's To Do List";

function addListItem(text) {
    let $item = document.createElement('li');
    $item.textContent = text;
    $list.append($item);
}

addListItem("Eat");

