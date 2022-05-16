// Variables globales
// Sous-titre (Questions)
const subTitles = document.querySelectorAll('.subtitle');
// Réponses (cachées par défaut)
const textContents = document.querySelectorAll('.displayNone');
// Arrows
const fleches = document.querySelectorAll('.imgArrow');

// Logique :  Ajout d'écouteur de click sur chaque question
for (let i = 0; i < subTitles.length;i++) {
    subTitles[i].addEventListener('click', () => {
        // Reset des flaches en position initiale
        for (elt of fleches) {
            elt.classList.remove('arrowUp');
        }
        // Reset des réponses en affichage caché
        for (elt of textContents) {
            elt.style.opacity = 0;
            elt.classList.remove('displayNone');
            elt.classList.add('displayNone');
            elt.classList.remove('paddBottom20');
        }
        // Reset des Questions en fontWeight 400
        for (elt of subTitles) {
            elt.classList.remove('gras');
            elt.classList.remove('paddBottom20');
            elt.classList.add('paddBottom20');
        }
        // Rotation de la fleche active de -180deg
        fleches[i].classList.toggle('arrowUp');
        // Afficchage de la réponse
        textContents[i].classList.toggle('displayNone');
        textContents[i].classList.toggle('paddBottom20');
        textContents[i].style.opacity = 1;
        // Passage de la question en fontWeight 700
        subTitles[i].classList.toggle('gras');
        subTitles[i].classList.toggle('paddBottom20');
    });
}