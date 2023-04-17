
// **************************** Evenement click ************************
const goodAnswer = document.querySelector('.bonne-reponse');
const badAnswer = document.querySelector('.mauvaise-reponse');
const btn0 = document.getElementById('btn-0');
const btn1 = document.getElementById('btn-1');


btn0.addEventListener('click', () => {
    badAnswer.style.display = "none";
    goodAnswer.classList.add('bReponse');
});
btn1.addEventListener('click', () => {
    goodAnswer.style.display = 'none';
    badAnswer.classList.add('bReponse');
});

// ******************** Evenement mouse-move (mouvement souris) ********************
const mouseMove = document.querySelector('.mouse-move');

window.addEventListener('mousemove', (e) => {
    // console.log(e); // Me permet d'affiche tous les evenements qui sont stockés dans e
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
});
window.addEventListener('mousedown', () => { //mousedown(lorsque l'utilisateur appuie sur une touche de la souris sans relever le doigt)
    mouseMove.style.transform = "scale(1.5) translate(-25%, -25%)"; //le mvt de la souris s'aggrandit de 2 (scale(2)) ensuite on le centre 
});
window.addEventListener('mouseup', () => { //mouseup(lorsque l'utilisateur relève le doigt apres avoir appuyé sur une touche de la souris)
    mouseMove.style.transform = "scale(1) translate(-50%, -50%)"; //le mvt de la souris s'aggrandit de 2 (scale(2)) ensuite on le centre 
});

const boxContainer = document.querySelector('.box');
boxContainer.addEventListener('mouseenter', (e) => { // lorsque la souris est sur un élt (c'est different du hover)
    boxContainer.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    console.log(e.target);


});
boxContainer.addEventListener('mouseout', () => { // lorsque la souris sort d'un élt (c'est different du hover) apres qu'il soit rentré
    boxContainer.style.backgroundColor = "black";
});
goodAnswer.addEventListener('mouseover', () => {
    goodAnswer.style.transform = 'rotate(2deg)';
});