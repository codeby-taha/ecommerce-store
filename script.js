/* =========================================
   SELECT ELEMENTS FROM HTML
========================================= */

// Trend sections (Men's and Women's)
let menTrend = document.querySelector(".trend");
let womenTrend = document.getElementById("trendSec");

// About us section
let about = document.querySelector(".about");

// Contact section
let contact = document.querySelector(".contact");

// Blog section
let blog = document.querySelector(".trends");

// Main page section (hero)
let mainPage = document.querySelector(".main");

// Cart section
let cart = document.querySelector(".cart");
let cartImage = document.getElementById("newImg");

/* =========================================
   NAVIGATION FUNCTIONS
========================================= */

/* Show Home Page */
function homes() {
    mainPage.style.display = "flex"; // Show main hero
    menTrend.style.display = "block"; // Show men's trend
    womenTrend.style.display = "block"; // Show women's trend
    blog.style.display = "block"; // Show blog
    about.style.display = "none"; // Hide about
    contact.style.display = "none"; // Hide contact
    cart.style.display = "none"; // Hide cart

    // Change nav colors
    document.getElementById("home").style.color = "#02adad";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

/* Show Shops Page */
function shops() {
    mainPage.style.display = "none"; // Hide main hero
    menTrend.style.display = "block"; // Show men's trend
    womenTrend.style.display = "block"; // Show women's trend
    blog.style.display = "none"; // Hide blog
    about.style.display = "none"; // Hide about
    contact.style.display = "none"; // Hide contact
    cart.style.display = "none"; // Hide cart

    // Change nav colors
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "#02adad";
    document.getElementById("blog").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

/* Show Blog Page */
function blogs() {
    mainPage.style.display = "none";
    menTrend.style.display = "none";
    womenTrend.style.display = "none";
    blog.style.display = "block"; // Show blog
    about.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none";

    // Change nav colors
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "#02adad";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

/* Show About Us Page */
function abouts() {
    mainPage.style.display = "none";
    menTrend.style.display = "none";
    womenTrend.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block"; // Show about
    contact.style.display = "none";
    cart.style.display = "none";

    // Change nav colors
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("about").style.color = "#02adad";
    document.getElementById("contact").style.color = "black";
}

/* Show Contact Page */
function contacts() {
    mainPage.style.display = "none";
    menTrend.style.display = "none";
    womenTrend.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block"; // Show contact
    cart.style.display = "none";

    // Change nav colors
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "#02adad";
}

/* =========================================
   CART FUNCTIONS
========================================= */

/* Show Cart When Clicking On Product Image */
function show(img) {
    cartImage.src = img.src; // Set cart image to clicked image

    // Hide other sections
    mainPage.style.display = "none";
    menTrend.style.display = "none";
    womenTrend.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";

    // Show cart section
    cart.style.display = "flex";
}

/* Add to Cart Button */
function addCart() {
    alert("Added To Cart!"); // Simple feedback
    location.reload(); // Reload page to reset view
}

/* =========================================
   OPTIONAL: INITIALIZE PAGE
========================================= */

// By default, show Home Page when website loads
window.onload = homes;
