const $list = document.querySelector("#my-list")

const $span = document.querySelector("span")

let $items = $list.getElementsByTagName("li")

let num = $items.length

// Creates an array that references each button in the HTML file's list element
let $buttons = $list.getElementsByTagName("button");

// Iterate through each button to attach an event listener to removeItem
for (const button of $buttons) {
    button.addEventListener("click", removeItem);
}

// Event listener that calls the addItem function when the button on the form is clicked
const $addButton = document.querySelector("#addBtn");
$addButton.addEventListener("click", addItem)

update()

function update(){
    let $strikes = document.querySelectorAll(".strike")
    let remaining = num - $strikes.length
    $span.textContent = `(${remaining} left!)`
    if(remaining == 0){
        setTimeout( alert, 500, "Way to go Ken!")
    }
}

// addButton function to make sure a 'Remove' button exists for all newly added items
function addButton(){
    let $button = document.createElement("button")
    $button.textContent = "X"
    $item.append($button)
    $button.addEventListener("click", removeItem)
}

function addItem(){
    let $item = document.createElement("li")
    let $input = document.querySelector("#myInput")
    $item.textContent = $input.value
    // make sure new items get the Strike Item functionality
    $item.addEventListener("click", strikeItem)
    // reset the value of $input to an empty string
    $input.value = ""
    addButton($item)
    $list.append($item)
    num += 1
    update()
}

// Remove an item from the list when the childNode button of the parentNode li is clicked
function removeItem(){
    this.parentNode.remove()
    num -= 1
    update()
}

function strikeItem(){
    this.classList.toggle("strike")
    update()
}

for (const item of $items){
    item.addEventListener("click", strikeItem);
}