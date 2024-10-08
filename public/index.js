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

// get the toggle btn
const toggle = document.querySelector(".toggle");

//get monthly paragraph button
const monthly = document.querySelector(".monthly");

// get yearly paragraph button
const yearly = document.querySelector(".yearly");

// get price 
const price = document.querySelectorAll(".price");

// get season
const season = document.querySelectorAll(".season");

// get free plan for yearly subscription
const freePlan = document.querySelectorAll(".free-plan");

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

            // reset toggle button
            toggle.checked = false;
        }
    })
})

//add event listner to the toggle function so it can be functional
toggle.addEventListener("click", ()=> {
    if(toggle.checked) {
        // the appropriate color must be set for each toggle.
        monthly.classList.replace("text-marineBlue", "text-coolGray");
        yearly.classList.replace("text-coolGray", "text-marineBlue");

        //free plan text for yearly plans must show
        freePlan.forEach((freePlans)=> {
            freePlans.classList.remove("hidden")
        });

        // change the pricing for yearly plans
        price[0].innerText = 90;
        price[1].innerText = 120;
        price[2].innerText = 150;

        // change the abbrevation from "mo" to "yr" 
        season.forEach((sea)=> {
            sea.innerText = "yr";
        })
    }

    if (!toggle.checked) {
        // the appropriate color must be set for each toggle.
        monthly.classList.replace("text-coolGray", "text-marineBlue");
        yearly.classList.replace("text-marineBlue", "text-coolGray");

        // free plan text for monthly plans should be removed!
        freePlan.forEach((freePlans)=> {
            freePlans.classList.add("hidden")
        })

        // change the pricing back to the monthly plan prices
        price[0].innerText = 9;
        price[1].innerText = 12;
        price[2].innerText = 15;

        // change the abbrevation back to "mo" from "yr" 
        season.forEach((sea)=> {
            sea.innerText = "mo";
        })
    }
})