// Tanya Leenders - personal project to create an interactive CV.
// I used the knowledge I aquired after 1 month training at BeCode Liege.
// Project begins the first nov 2020

// Text animations 


// Navbar clicks: text changes

let homeBtn = document.getElementById("btnHome");
let aboutBtn = document.getElementById("btnAbout");
let educBtn = document.getElementById("btnEduc");
let expBtn = document.getElementById("btnExp");
let skillsBtn = document.getElementById("btnSkills");
let contactBtn = document.getElementById("btnContact");

let homeArt = document.getElementById("home-text");
let aboutArt = document.getElementById("about-text");
let educArt = document.getElementById("educ-text");
let expArt = document.getElementById("exp-text");
let skillsArt = document.getElementById("skills-text");
let contactArt = document.getElementById("contact-text");

homeBtn.addEventListener("click", function() {
    homeArt.style.display = "flex";
    aboutArt.style.display = "none";
    educArt.style.display = "none";
    expArt.style.display = "none";
    skillsArt.style.display = "none";
    contactArt.style.display = "none";
});

aboutBtn.addEventListener("click", function() {
    homeArt.style.display = "none";
    aboutArt.style.display = "flex";
    educArt.style.display = "none";
    expArt.style.display = "none";
    skillsArt.style.display = "none";
    contactArt.style.display = "none";
});

educBtn.addEventListener("click", function() {
    homeArt.style.display = "none";
    aboutArt.style.display = "none";
    educArt.style.display = "flex";
    expArt.style.display = "none";
    skillsArt.style.display = "none";
    contactArt.style.display = "none";
})

expBtn.addEventListener("click", function() {
    homeArt.style.display = "none";
    aboutArt.style.display = "none";
    educArt.style.display = "none";
    expArt.style.display = "flex";
    skillsArt.style.display = "none";
    contactArt.style.display = "none";
})

skillsBtn.addEventListener("click", function() {
    homeArt.style.display = "none";
    aboutArt.style.display = "none";
    educArt.style.display = "none";
    expArt.style.display = "none";
    skillsArt.style.display = "flex";
    contactArt.style.display = "none";
})

contactBtn.addEventListener("click", function() {
    homeArt.style.display = "none";
    aboutArt.style.display = "none";
    educArt.style.display = "none";
    expArt.style.display = "none";
    skillsArt.style.display = "none";
    contactArt.style.display = "flex";
})

    
 
