let panier = [];

function ajouterAuPanier(nom, prix) {
    panier.push({
        nom: nom,
        prix: prix
    });

    document.getElementById("compteur").textContent = panier.length;

    afficherPanier();
}

function afficherPanier() {

    const liste = document.getElementById("panier");
    const total = document.getElementById("total");

    if (!liste) return;

    liste.innerHTML = "";

    let somme = 0;

    panier.forEach((produit, index) => {

        somme += produit.prix;

        liste.innerHTML += `
        <li>
            ${produit.nom} - ${produit.prix.toFixed(2)} €
            <button onclick="supprimerProduit(${index})">❌</button>
        </li>
        `;
    });

    total.textContent = somme.toFixed(2) + " €";
}

function supprimerProduit(index) {

    panier.splice(index,1);

    document.getElementById("compteur").textContent = panier.length;

    afficherPanier();
}

function viderPanier() {

    panier = [];

    document.getElementById("compteur").textContent = 0;

    afficherPanier();
}

Ensuite, dans chacune de tes pages HTML, ajoute cette ligne juste avant la fermeture de la balise </body> :

<script src="js/panier.js"></script>
