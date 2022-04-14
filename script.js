//Gets the elements which are used for making the initial transition animations
let infoGrid = document.getElementById("info-grid");
let infoGridChildren = document.getElementById("info-grid").getElementsByTagName("div");
let bioTextbox = document.getElementById("bio-textbox");
let bioTextboxChildren = document.getElementById("bio-textbox").getElementsByTagName("p");
let awardsTextbox = document.getElementById("awards-textbox");
let awardsTextboxChildren = document.getElementById("awards-textbox").getElementsByTagName("p");
let codingGrid = document.getElementById("coding-grid");
let codingGridChildren = document.getElementById("coding-grid").getElementsByTagName("div");

setTimeout(() => { transition() },100);

function transition() {
    //Sets the starting time as 0.1 seconds
    var time = 100;
    //Sets the infoGrid to fade in first
    setTimeout(() => { infoGrid.classList.add("fade-in");}, time);
    //Iterates through each of the infoGrid's children
    for (let infoSec of infoGridChildren) {
        setTimeout(() => { infoSec.classList.add("fade-in");}, time);
        //Increments time to space out the transitions
        time = time + 60;
    }
    time = 100;
    setTimeout(() => { bioTextbox.classList.add("fade-in");}, time);
    //Does the same for the other sets
    for (let bioText of bioTextboxChildren) {
        setTimeout(() => { bioText.classList.add("fade-in");}, time);
        time = time + 60;
    }
    time = 100;
    setTimeout(() => { awardsTextbox.classList.add("fade-in");}, time);
    for (let awardsText of awardsTextboxChildren) {
        setTimeout(() => { awardsText.classList.add("fade-in");}, time);
        time = time + 60;
    }
    time = 100;
    setTimeout(() => { codingGrid.classList.add("fade-in");}, time);
    for (let coding of codingGridChildren) {
        setTimeout(() => { coding.classList.add("fade-in");}, time);
        time = time + 100;
    }
}

//Gets each of the navigation links
const navTags = document.querySelectorAll(".site-nav");
//Gets each of the segments which the navigation links direct to
const segments = document.querySelectorAll(".segment");
//Stores the ID of the closest segment that a user is viewing
let closestSegment = "";

//Checks the users position on the page every time a scroll event occurs
window.onscroll = () => {

    //Goes through and checks each of the segments present on the webpage
    //to find the closest segment (Furthermost down the page )
    segments.forEach((segment) => {
        //Works out the position of the segment on the page and subtracts 70 pixels
        //to give extra whitespace to account for the height of the header.
        const segmentTop = segment.offsetTop - 70;
        //Checks if the user is scrolled to a point where a segment is past the
        //current position of the header bar by getting the current Y Offset
        //(How many pixels down the page)
        if (pageYOffset >= segmentTop) {
            //Assigns the ID of this segment to be the current closestSegment
            closestSegment = segment.getAttribute("id");
        }
    });

    //Goes through each of the navigation list items in order to highlight the element
    //to show the current section that a user is at
    navTags.forEach((li) => {
        //Sets the default class properties to be "nonactive"
        li.classList.remove("active");
        li.classList.add("nonactive");
        //Check if the segment ID name is within the classlist
        //meaning that it should be set as "active"
        if (li.classList.contains(closestSegment)) {
            //Sets the matching navigation list item as active
            li.classList.add("active");
            li.classList.remove("nonactive");
        }
    });
};
