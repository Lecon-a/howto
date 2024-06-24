const toggleButton = document.querySelector(".toggle__circle");
const websiteBody = document.querySelector(".container");

toggleButton.addEventListener("click", function () { 
    if (websiteBody.classList.contains("bg-white")) {
        // executes the statement
        // alert("Yes, it contains the bg-white");
        websiteBody.classList.remove("bg-white");
        toggleButton.classList.remove("toggle__circle__move");
    } else {
        // if the condition is false, it executes the statement
        // alert("No, it does not contain the bg-white");
        websiteBody.classList.add("bg-white");
        toggleButton.classList.add("toggle__circle__move");
    }
})