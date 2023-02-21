$(document).ready(function() {
  $('.nombre').each(function() {
    $(this).click(function() {
      var guess = $(this).text();
      $('#essaiInput').val(guess);
    });
  });
});
// Génère un nombre aléatoire entre 1 et 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialise les compteurs pour les tentatives et les devinettes précédentes
let count = 0;
let previousGuesses = [];

// Définit une fonction pour vérifier si une devinette est correcte
function checkGuess() {
  // Obtient la devinette de l'utilisateur à partir de l'input
  let userGuess = Number(document.getElementById("essaiInput").value);
  
  // Vérifie que l'utilisateur a entré un nombre valide entre 1 et 100
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert("Veuillez entrer un nombre entre 1 et 100.");
    return;
  }
  
  // Incrémente le compteur de tentatives
  count++;
  
  // Ajoute la devinette de l'utilisateur à la liste des devinettes précédentes
  previousGuesses.push(userGuess + " " );
  
  // Met à jour la liste des devinettes précédentes dans le HTML
  let list = document.getElementById("previousGuesses");
  let item = document.createElement("li");
  item.appendChild(document.createTextNode(userGuess));
  list.appendChild(item);
  
  // Vérifie si l'utilisateur a deviné le nombre
  if (userGuess === randomNumber) {
    let message = "Bravo! Vous avez deviné le nombre mystère en " + count + " essais.";
    document.getElementById("message").textContent = message;
    disableInput();
  } else if (count === 10) {
    let message = "Désolé, vous avez épuisé toutes vos tentatives. Le nombre mystère était " + randomNumber + ".";
    document.getElementById("message").textContent = message;
    disableInput();
  } else {
    let message = userGuess < randomNumber ? "Le nombre mystère est plus grand." : "Le nombre mystère est plus petit.";
    document.getElementById("message").textContent = message;
  }
  
  // Réinitialise l'input pour la prochaine devinette
  document.getElementById("essaiInput").value = "";

  // Récupérer le bouton "Recommencer"
// Ajouter un gestionnaire d'événements pour le clic sur le bouton
resetButton.addEventListener("click", function() {
  // Réinitialiser tous les nombres de la grille
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach(cell => {
    cell.textContent = "";
  });
});
}





// Désactive l'input et le bouton une fois que le jeu est terminé
function disableInput() {
  document.getElementById("essaiInput").disabled = true;
  document.getElementById("guessButton").disabled = true;
}

// Ajoute des événements click pour chaque nombre de la grille
let nombres = document.getElementsByClassName("nombre");
for (let i = 0; i < nombres.length; i++) {
  nombres[i].addEventListener("click", function() {
    // Met à jour l'input avec la valeur du nombre cliqué
    document.getElementById("essaiInput").value = this.textContent;
    // Soumet la devinette
    checkGuess();
  });
}



// Récupérer le bouton "Recommencer"
const resetButton = document.getElementById("resetButton");

// Ajouter un gestionnaire d'événements pour le clic sur le bouton
resetButton.addEventListener("click", function() {
  // Réinitialiser tous les nombres de la grille
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach(cell => {
    cell.textContent = "";
  });
});