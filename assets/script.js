// Declaring variables
time = document.querySelector("#time");
nineAm = document.getElementById("9amtextarea");
tenAm = document.getElementById("10amtextarea");
elevenam = document.getElementById("11amtextarea");
twelvepm = document.getElementById("12pmtextarea");
onepm = document.getElementById("1pmtextarea");
twopm = document.getElementById("2pmtextarea");
threepm = document.getElementById("3pmtextarea");
fourpm = document.getElementById("4pmtextarea");
fivepm = document.getElementById("5pmtextarea");
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



// If statements for past
if (moment().hours() > 9) {
    nineAm.classList.add("bg-secondary");
}
if (moment().hours() > 10) {
    tenAm.classList.add("bg-secondary");
}
if (moment().hours() > 11) {
    elevenam.classList.add("bg-secondary");
}
if (moment().hours() > 12) {
    twelvepm.classList.add("bg-secondary");
}
if (moment().hours() > 13) {
    onepm.classList.add("bg-secondary");
}
if (moment().hours() > 14) {
    twopm.classList.add("bg-secondary");
}
if (moment().hours() > 15) {
    threepm.classList.add("bg-secondary");
}
if (moment().hours() > 16) {
    fourpm.classList.add("bg-secondary");
}
if (moment().hours() > 17) {
    fivepm.classList.add("bg-secondary");
}
// If statements for future
if (moment().hours() < 9) {
    nineAm.classList.add("bg-danger");
}
if (moment().hours() < 10) {
    tenAm.classList.add("bg-danger");
}
if (moment().hours() < 11) {
    elevenam.classList.add("bg-danger");
}
if (moment().hours() < 12) {
    twelvepm.classList.add("bg-danger");
}
if (moment().hours() < 13) {
    onepm.classList.add("bg-danger");
}
if (moment().hours() < 14) {
    twopm.classList.add("bg-danger");
}
if (moment().hours() < 15) {
    threepm.classList.add("bg-danger");
}
if (moment().hours() < 16) {
    fourpm.classList.add("bg-danger");
}
if (moment().hours() < 17) {
    fivepm.classList.add("bg-danger");
}


// If statements for current time
if (moment().hours() == 9) {
    nineAm.classList.add("bg-success");
}
if (moment().hours() == 10) {
    tenAm.classList.add("bg-success");
}
if (moment().hours() == 11) {
    elevenam.classList.add("bg-success");
}
if (moment().hours() == 12) {
    twelvepm.classList.add("bg-success");
}
if (moment().hours() == 13) {
    onepm.classList.add("bg-success");
}
if (moment().hours() == 14) {
    twopm.classList.add("bg-success");
}
if (moment().hours() == 15) {
    threepm.classList.add("bg-success");
}
if (moment().hours() == 16) {
    fourpm.classList.add("bg-success");
}
if (moment().hours() == 17) {
    fivepm.classList.add("bg-success");
}


// Save everything 
function save9am(){
    console.log(nineAm.value)
    localStorage.setItem("9am",nineAm.value)
}
function save10am(){
    console.log(nineAm.value)
    localStorage.setItem("10am",tenAm.value)
}
function save11am(){
    console.log(nineAm.value)
    localStorage.setItem("11am",elevenam.value)
}
function save12pm(){
    console.log(nineAm.value)
    localStorage.setItem("12pm",twelvepm.value)
}
function save1pm(){
    console.log(nineAm.value)
    localStorage.setItem("1pm",onepm.value)
}
function save2pm(){
    console.log(nineAm.value)
    localStorage.setItem("2pm",twopm.value)
}
function save3pm(){
    console.log(nineAm.value)
    localStorage.setItem("3pm",threepm.value)
}
function save4pm(){
    console.log(nineAm.value)
    localStorage.setItem("4pm",fourpm.value)
}
function save5pm(){
    console.log(nineAm.value)
    localStorage.setItem("5pm",fivepm.value)
}
// Save everything end


