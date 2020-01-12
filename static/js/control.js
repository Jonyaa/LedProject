const bookstands = document.getElementsByClassName("bookstand");
let current = null;
let click = false;
const arrows = document.getElementsByClassName("arrow");
let active = null;
let wrapper = document.getElementById("bookstand_wrapper");
let input = document.getElementsByTagName("input")[0];

document.addEventListener("click", function(e) {
    const el = e.path[0];
    console.log(el.className);    
    if (el.className.includes("bookstand")) {
        for (let i = 0; i < bookstands.length; i++) {
            bookstands[i].classList.remove("active");
        }
        el.classList.add("active");
        active = el;
    } else if (el.className === "arrow") {
    } else {
        for (let i = 0; i < bookstands.length; i++) {
            bookstands[i].classList.remove("active");
        }
        active = null;
    }
})

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function() {
        if (active) {
            if (this.id === "left") {
                wrapper.insertBefore(active, active.previousElementSibling);
            } else if (this.id === "right") {
                wrapper.insertBefore(active, active.nextElementSibling.nextSibling);
            }
        }
        setBookstandsOrder();
    })
}

function setBookstandsOrder() {
    let children = wrapper.children;
    let order = "";

    for (let i = 0; i < children.length; i++) {
        order += children[i].id.slice(9, 10) + ',';
    }
    console.log(order);
    input.value = order;
}

setBookstandsOrder()