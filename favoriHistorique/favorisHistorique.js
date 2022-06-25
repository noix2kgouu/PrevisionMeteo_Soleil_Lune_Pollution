//*CRÉER LES ETIQUETTES FAVORIS
let userFav = localStorage.getItem("villeFav");//*recuperation local storage

if ((userFav == null) || (userFav == "")) {
    console.log("Pas de ville favorites enregistrés");
    let container = document.querySelector('#favoriteCityListing');
    container.style.display = "none";

}
else {//*création des étiquettes fav
    userFav = userFav.split(',');//local storage devient un tableau
    creationEtiquetteFav:
    for (let i = 0; i < userFav.length; i = i + 3) {

        let container = document.querySelector('#favoriteCityListing .contenu')

        if (userFav[i] == "") {
            break creationEtiquetteFav;
        }
        else {
            let favCity = document.createElement('p');
            favCity.textContent = userFav[i]
            container.appendChild(favCity);
        }
    }
}

//*CRÉER LES ETIQUETTES HISTORIQUE
let userHist = localStorage.getItem("villeHist");//*recuperation local storage
if (userHist == null) {
    console.log("Aucun historique")
    let container = document.querySelector('#historicListing')
    container.style.display = "none";

}
else {//*création des étiquettes hist
    userHist = userHist.split(',');//local storage devient un tableau

    for (let i = 0; i < userHist.length; i = i + 3) {
        let container = document.querySelector('#historicListing .contenu')

        let histCity = document.createElement('p');
        histCity.textContent = userHist[i]
        container.appendChild(histCity);
    }
}