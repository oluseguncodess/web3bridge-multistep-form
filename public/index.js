//get the btn to switch to the next page (plan page)
const nextPage = document.querySelector(".next-btn");
//get the form page
const formPage = document.querySelector(".form");
//get the plan page 
const planPage = document.querySelector(".plan")


function nextPlan() {
    // hide the form page
    formPage.classList.add("hidden");
    // show the plan page
    planPage.classList.remove("hidden");
}

nextPage.addEventListener("click", nextPlan)