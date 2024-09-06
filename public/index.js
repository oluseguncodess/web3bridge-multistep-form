//get the btn to switch to the next page (plan page)
const nextPage = document.querySelectorAll(".next-btn");

//get the form page
const formPage = document.querySelector(".form");

//get the plan page 
const planPage = document.querySelector(".plan");

//get step 1
const stepOne = document.querySelector(".step-one");

//get all the other step numbers
const stepNumbers = document.querySelectorAll(".step_numbers");

// get button containers
const btnContainer = document.querySelectorAll(".button-container");

// get the prev buttons
const prevBtn = document.querySelectorAll(".prevBtn");

let counter = 0;


function nextPlan() {
    // hide the form page
    formPage.classList.add("hidden");

    // show the plan page
    planPage.classList.remove("hidden");

    // remove the bg color and change text color of step one
    stepOne.classList.remove("locator");
    stepOne.classList.add("text-white");

    // increment the counter
    counter++

    // show the "go back" button
    prevBtn.forEach((prev)=> {
        prev.classList.remove("hidden");
    })

    // change the button div container flex position
    btnContainer.forEach((btnCon)=> {
        btnCon.classList.replace("justify-end", "justify-between")
    })
}

// it's going to add event listener for each button in the node list (we used querySelectorAll)
nextPage.forEach(function(button) {
    button.addEventListener("click", ()=> {
        if(counter == 0) {
            stepNumbers[counter].classList.add("locator");
            stepNumbers[counter].classList.replace("text-white", "text-black");
            nextPlan();
        }
    })
})

prevBtn.forEach(function(prevBtn) {
    prevBtn.addEventListener("click", ()=> {
        if(counter == 1) {
            // reduce counter
            counter--;

            // change active state to step one
            stepOne.classList.add("locator");
            stepOne.classList.replace("text-white", "text-black");
            
            // remove active state from step 2
            stepNumbers[counter].classList.remove("locator");
            stepNumbers[counter].classList.replace("text-black", "text-white");

            //hide the previous btn
            prevBtn.classList.add("hidden");

            // change the flex propery of the container
            btnContainer.forEach((btnCon)=> {
                btnCon.classList.replace("justify-between", "justify-end")
            })

            //show the appropriate form

            // hide the plan page
            planPage.classList.add("hidden");

            // show the form page
            formPage.classList.remove("hidden");
        }
    })
})
