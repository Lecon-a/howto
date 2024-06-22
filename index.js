// store - document
const toggleBtn = document.querySelector(".toggleButton");
const container = document.querySelector(".container");
toggleBtn.addEventListener("click", function () {
    // alert("Clicked")
    if (container.classList.contains("show")) {
        // true statement goes here
        // alert("Yes")  
        container.classList.remove("show");
    } else {
        // false statement goes here
        // alert("No")
        container.classList.add("show");
    }
});