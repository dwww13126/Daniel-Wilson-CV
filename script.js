//Gets the elements which are used for making the initial transition animations
let infoGrid = document.getElementById("info-grid");
let infoGridChildren = document.getElementById("info-grid").getElementsByTagName("div");

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
}