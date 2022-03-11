//Gets the elements which are used for making the initial transition animations
let infoGrid = document.getElementById("info-grid");
let infoGridChildren = document.getElementById("info-grid").getElementsByTagName("div");
let bioTextbox = document.getElementById("bio-textbox");
let bioTextboxChildren = document.getElementById("bio-textbox").getElementsByTagName("p");
let awardsTextbox = document.getElementById("awards-textbox");
let awardsTextboxChildren = document.getElementById("awards-textbox").getElementsByTagName("p");
let codingContainer = document.getElementById("coding-container");
let codingContainerChildren = document.getElementById("coding-container").getElementsByTagName("div");

setTimeout(() => { transition() },100);

function transition() {
    //Sets the starting time as 0.1 seconds
    var time = 100;
    //Sets the infoGrid to fade in first
    setTimeout(() => { infoGrid.classList.add("fade-in-1");}, time);
    //Iterates through each of the infoGrid's children
    for (let infoSec of infoGridChildren) {
        setTimeout(() => { infoSec.classList.add("fade-in-1");}, time);
        //Increments time to space out the transitions 
        time = time + 60;
    }
    time = 100;
    setTimeout(() => { bioTextbox.classList.add("fade-in-1");}, time);
    //Does the same for the other sets
    for (let bioText of bioTextboxChildren) {
        setTimeout(() => { bioText.classList.add("fade-in-1");}, time);
        time = time + 60;
    }
    time = 100;
    setTimeout(() => { awardsTextbox.classList.add("fade-in-1");}, time);
    for (let awardsText of awardsTextboxChildren) {
        setTimeout(() => { awardsText.classList.add("fade-in-1");}, time);
        time = time + 60;
    }
    time = 100;
    setTimeout(() => { codingContainer.classList.add("fade-in-1");}, time);
    for (let coding of codingContainerChildren) {
        setTimeout(() => { coding.classList.add("fade-in-1");}, time);
        time = time + 100;
    }
}