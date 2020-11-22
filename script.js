// Tanya Leenders - personal project to create an interactive CV.
// I used the knowledge I aquired after 1 month training at BeCode Liege.
// Project begins the first nov 2020



// Navbar clicks: when you click on a section's name, the current one disappears and the one you want becomes visible
// TODO: find a way to get this part of the code shorter

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
// Inspired by codePen: https://codepen.io/soulwire/pen/mErPAK?editors=1010
// TODO: create this code more personal, less like the link above. Get the same effect with maybe sipler functions?

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
        let start = Math.floor(Math.random() * 30)
        let end = start + Math.floor(Math.random() * 30)
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
         
          if (!char || Math.random() < 0.01) {
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
// TODO: find a way to get this part of the code shorter? 

let exploreCV = document.querySelector(".home-text__par").innerHTML;
let exploreCVElement = document.querySelector(".home-text__par");
let exploreCVScramble = new TextScramble(exploreCVElement);
let exploreCVNext = () => {
  exploreCVScramble.setText(exploreCV).then(() => {
  setTimeout(exploreCVNext, 4000)
  })
}
exploreCVNext()

let aboutTitle = document.querySelector(".about-text__title").innerHTML;
let aboutTitleElement = document.querySelector(".about-text__title");
let aboutTitleScramble = new TextScramble(aboutTitleElement);
let aboutNext = () => {
  aboutTitleScramble.setText(aboutTitle).then(() => {
  setTimeout(aboutNext, 4000)
  })
}
aboutNext() 

let expTitle = document.querySelector(".experience__title").innerHTML;
let expTitleElement = document.querySelector(".experience__title");
let expTitleScramble = new TextScramble(expTitleElement);
let expNext = () => {
  expTitleScramble.setText(expTitle).then(() => {
  setTimeout(expNext, 4000)
  })
}
expNext() 

let educTitle = document.querySelector(".education__title").innerHTML;
let educTitleElement = document.querySelector(".education__title");
let educTitleScramble = new TextScramble(educTitleElement);
let educNext = () => {
  educTitleScramble.setText(educTitle).then(() => {
  setTimeout(educNext, 4000)
  })
}
educNext() 

let skillsTitle = document.querySelector(".skills-text__title").innerHTML;
let skillsTitleElement = document.querySelector(".skills-text__title");
let skillsTitleScramble = new TextScramble(skillsTitleElement);
let skillsNext = () => {
  skillsTitleScramble.setText(skillsTitle).then(() => {
  setTimeout(skillsNext, 4000)
  })
}
skillsNext() 

let contactTitle = document.querySelector(".contact-text__title").innerHTML;
let contactTitleElement = document.querySelector(".contact-text__title");
let contactTitleScramble = new TextScramble(contactTitleElement);
let contactNext = () => {
  contactTitleScramble.setText(contactTitle).then(() => {
  setTimeout(contactNext, 4000)
  })
}
contactNext() 