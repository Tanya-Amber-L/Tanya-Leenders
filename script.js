// Tanya Leenders - Curriculum Vitae and Portfolio

scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
    console
}

document.getElementById("btnSkills").addEventListener('click', () => {
    scrollTo(document.getElementById("skills"));
});
document.getElementById("btnExp").addEventListener('click', () => {
    scrollTo(document.getElementById("exp"));
});
document.getElementById("btnPortfolio").addEventListener('click', () => {
    scrollTo(document.getElementById("portfolio"));
});
document.getElementById("btnContact").addEventListener('click', () => {
    scrollTo(document.getElementById("contact"));
}); 
console.log("text");