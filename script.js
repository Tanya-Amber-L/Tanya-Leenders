// Tanya Leenders - personal project to create an interactive CV.
// I used the knowledge I aquired after 1 month training at BeCode Liege.
// Project begins the first nov 2020

// Navbar clicks: text changes

let homeBtn = document.getElementById("btnHome");
let aboutBtn = document.getElementById("btnAbout");
let expBtn = document.getElementById("btnExp");
let skillsBtn = document.getElementById("btnSkills");
let contactBtn = document.getElementById("btnContact");


let homeArt = document.getElementById("home-text");
let aboutArt = document.getElementById("about-text");
let expArt = document.getElementById("exp-text");
let skillsArt = document.getElementById("skills-text");
let contactArt = document.getElementById("contact-text");

homeBtn.addEventListener("click", function() {
    homeArt.style.display = "flex";
    aboutArt.style.display = "none"; 
    expArt.style.display = "none";
    skillsArt.style.display = "none";
    contactArt.style.display = "none";
});

aboutBtn.addEventListener("click", function() {
    homeArt.style.display = "none";
    aboutArt.style.display = "flex";
    expArt.style.display = "none";
    skillsArt.style.display = "none";
    contactArt.style.display = "none";
});

expBtn.addEventListener("click", function() {
    homeArt.style.display = "none";
    aboutArt.style.display = "none";
    expArt.style.display = "flex";
    skillsArt.style.display = "none";
    contactArt.style.display = "none";
})

skillsBtn.addEventListener("click", function() {
    homeArt.style.display = "none";
    aboutArt.style.display = "none";
    expArt.style.display = "none";
    skillsArt.style.display = "flex";
    contactArt.style.display = "none";
})

contactBtn.addEventListener("click", function() {
    homeArt.style.display = "none";
    aboutArt.style.display = "none";
    expArt.style.display = "none";
    skillsArt.style.display = "none";
    contactArt.style.display = "flex";
})

// TextScramble class creation

class TextScramble {
  
    constructor(textElement) {
      this.textElement = textElement
      this.chars = '!<>-_\\/[]{}—=+*^?#____'
      this.update = this.update.bind(this) //recherche bind ??
    }
   

    setText(newText) {
      let oldText = this.textElement.innerText // old text = innertext, pour choper les caractères
     
      let length = Math.max(oldText.length, newText.length) // length = max de soit l'ancien soit le nouveau texte
     
      let promise = new Promise((resolve) => this.resolve = resolve) //recherche promise????
     
      this.queue = [] //creation tableau vide
     
      for (let i = 0; i < length; i++) {
        let from = oldText[i]
        let to = newText[i]
        let start = Math.floor(Math.random() * 40)
        let end = start + Math.floor(Math.random() * 40)
        // definir certains elements dans le tableau + math random
        this.queue.push({ from, to, start, end }) // push dans le tableau vide
      }
     
     
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
   
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
       
        let { from, to, start, end, char } = this.queue[i]
       
        if (this.frame >= end) {
          complete++
          output += to
        }
       
        else if (this.frame >= start) {
         
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
         
          output += `<span class="dud">${char}</span>`
        }
       
        else {
          output += from
        }
      } // tout ça définit la variable output
     
     
      this.textElement.innerHTML = output
     
     
      if (complete === this.queue.length) {
        this.resolve()
      }
     
      else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
   
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// say the text to scramble 
let exploreCV = document.querySelector(".home-text__par").innerHTML;

let textElement = document.querySelector(".home-text__par");
let myTitleScramble = new TextScramble(textElement);

let next = () => {
    myTitleScramble.setText(exploreCV).then(() => {
    setTimeout(next, 3000)
})
}

next()

 