// Declaring variables
let time = document.querySelector("#time");
let nineAm = document.getElementById("9amtextarea");
let tenAm = document.getElementById("10amtextarea");
let elevenam = document.getElementById("11amtextarea");
let twelvepm = document.getElementById("12pmtextarea");
let onepm = document.getElementById("1pmtextarea");
let twopm = document.getElementById("2pmtextarea");
let threepm = document.getElementById("3pmtextarea");
let fourpm = document.getElementById("4pmtextarea");
let fivepm = document.getElementById("5pmtextarea");
// Displaying all storage onto page.
nineAm.value = localStorage.getItem("9am")
tenAm.value = localStorage.getItem("10am")
elevenam.value = localStorage.getItem("11am")
twelvepm.value = localStorage.getItem("12pm")
onepm.value = localStorage.getItem("1pm")
twopm.value = localStorage.getItem("2pm")
threepm.value = localStorage.getItem("3pm")
fourpm.value = localStorage.getItem("4pm")
fivepm.value = localStorage.getItem("5pm")

// Repeating every 1s
setInterval(function() {
    time.innerText = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
}, 1000);

const times = ["","","","","","","","","",nineAm,tenAm,elevenam,twelvepm,onepm,twopm,threepm,fourpm,fivepm]


//sets all to secondary collar
        for (let i = 9; i < 17; i++) {
            times[i].classList.add("bg-secondary");
        }

// rewrites over secondary if moment hours = current
for (let index = 9; index < 17; index++) {
    
    if (moment().hours() == index) {
       times[index].classList.add("bg-success")
    }
}
// rewrites over secondary if moment hours = more than curren
for (let index = 9; index < 18; index++) {
    
    if (moment().hours() < index) {
       times[index].classList.add("bg-danger")
    }
}

for (let index = 0; index < 9; index++) {
    
    if (moment().hours() < index) {
       times[index].classList.add("bg-danger")
    }
}

function save() {

    localStorage.setItem("9am",nineAm.value)
    localStorage.setItem("10am",elevenam.value)
    localStorage.setItem("11am",elevenam.value)
    localStorage.setItem("12pm",twelvepm.value)
    localStorage.setItem("1pm",onepm.value)
    localStorage.setItem("2pm",twopm.value)
    localStorage.setItem("3pm",threepm.value)
    localStorage.setItem("4pm",fourpm.value)
    localStorage.setItem("5pm",fivepm.value)
}
    

