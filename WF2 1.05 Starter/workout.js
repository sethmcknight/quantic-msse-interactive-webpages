const $list = document.querySelector("#my-list")

const $span = document.querySelector("span")

let $items = $list.getElementsByTagName("li")

let num = $items.length

update()

function update(){
    let $strikes = document.querySelectorAll(".strike")
    let remaining = num - $strikes.length
    $span.textContent = `(${remaining} left!)`
    if(remaining == 0){
        setTimeout( alert, 500, "Way to go Ken!")
    }
}

function addItem(text){
    let $item = document.createElement("li")
    $item.textContent = text
    $list.append($item)
    num += 1
    update()
}

function removeItem(index){
    $items[index].remove()
    num -= 1
    update()
}

function strikeItem(index){
    $items[index].classList.toggle("strike")
    update()
}