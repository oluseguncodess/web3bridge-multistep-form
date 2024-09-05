//get the btn to switch to the next page (plan page)
const nextPage = document.querySelector(".next-btn");
//get the form page
const formPage = document.querySelector(".form");
//get the plan page 
const planPage = document.querySelector(".plan")

//get step 1
const stepOne = document.querySelector(".step-one")

//get all the other step numbers
const stepNumbers = document.querySelectorAll(".step_numbers")

let counter = 0;


function nextPlan() {
    // hide the form page
    formPage.classList.add("hidden");

    // show the plan page
    planPage.classList.remove("hidden");

    // remove the bg color and change text color of step one
    stepOne.classList.remove("locator");
    stepOne.classList.add("text-black");

    // increment the counter
    counter++
}

nextPage.addEventListener("click", ()=> {
    if(counter == 0) {
        stepNumbers[counter].classList.add("locator");
        stepNumbers[counter].classList.replace("text-white", "text-black");
        nextPlan();
    }
})