// Aggiungi l'evento di click all'immagine
document.getElementById('clickableImage').addEventListener('click', function() {
    // Reindirizza alla pagina home.html
    window.location.href = 'page2/home.html';
});

window.onload = function () {
    // Aggiungi un ritardo (in millisecondi) se necessario prima di mostrare la seconda immagine
    setTimeout(function () {
        // Creazione di un nuovo elemento immagine
        var secondImage = document.createElement("img");
        // Impostazione dell'ID e del percorso dell'immagine
        secondImage.id = "secondImage";
        secondImage.src = "images/cliccami.png";
        secondImage.alt = "Seconda Immagine";

        secondImage.classList.add("styledImage");

        // Aggiunta dell'immagine al corpo del documento
        document.body.appendChild(secondImage);
    }, 2000); // Esempio di ritardo di 2 secondi (2000 millisecondi)
};


