// Declaring variables
let time = document.querySelector("#time");
let nineAm = document.getElementById("9amtextarea");
let tenAm = document.getElementById("10amtextarea");
let elevenAm = document.getElementById("11amtextarea");
let twelvePm = document.getElementById("12pmtextarea");
let onePm = document.getElementById("1pmtextarea");
let twoPm = document.getElementById("2pmtextarea");
let threepm = document.getElementById("3pmtextarea");
let fourPm = document.getElementById("4pmtextarea");
let fivePm = document.getElementById("5pmtextarea");
// Displaying all storage onto page.
nineAm.value = localStorage.getItem("9am")
tenAm.value = localStorage.getItem("10am")
elevenAm.value = localStorage.getItem("11am")
twelvePm.value = localStorage.getItem("12pm")
onePm.value = localStorage.getItem("1pm")
twoPm.value = localStorage.getItem("2pm")
threepm.value = localStorage.getItem("3pm")
fourPm.value = localStorage.getItem("4pm")
fivePm.value = localStorage.getItem("5pm")

// Repeating every 1s
setInterval(function() {
    time.innerText = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
}, 1000);

const times = ["","","","","","","","","",nineAm,tenAm,elevenAm,twelvePm,onePm,twoPm,threepm,fourPm,fivePm]


//sets all to secondary collar
        for (let i = 9; i <= 17; i++) {
            times[i].classList.add("bg-secondary");
        }

// rewrites over secondary if moment hours = current
for (let index = 9; index < 17; index++) {
    
    if (moment().hours() == index) {
       times[index].classList.add("bg-success")
    }
}
// rewrites over secondary if moment hours = more than current
for (let index = 9; index < 18; index++) {
    
    if (moment().hours() < index) {
       times[index].classList.add("bg-danger")
    }
}

    function save9am()
    {
        localStorage.setItem("9am",nineAm.value)
    }
    function save10am()
    {
        localStorage.setItem("10am",tenAm.value)
    }
    function save11am()
    {
        localStorage.setItem("11am",elevenAm.value)
    }
    function save12pm()
    {
        localStorage.setItem("12pm",twelvePm.value)
    }
    function save1pm()
    {
        localStorage.setItem("1pm",onePm.value)
    }
    function save2pm()
    {
        localStorage.setItem("2pm",twoPm.value)
    }
    function save3pm()
    {
        localStorage.setItem("3pm",threepm.value)
    }
    function save4pm()
    {
        localStorage.setItem("4pm",fourPm.value)
    }
    function save5pm()
    {
        localStorage.setItem("5pm",fivePm.value)
    }