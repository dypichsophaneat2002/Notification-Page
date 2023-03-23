const read_btn = document.querySelector(".read-btn");
const active_item = document.querySelectorAll(".item");
const active_dot = document.querySelectorAll(".active-dot");
const notification = document.querySelector(".notification");
read_btn.addEventListener("click", () => {
    active_item.forEach((item) => {
        item.classList.remove("item");
        item.classList.add("item-unactive");
        console.log("Button Click");
        console.log(active_item);
    })
    active_dot.forEach((item) => {
        item.classList.add("d-none");
    })
    notification.innerHTML = "0";
})