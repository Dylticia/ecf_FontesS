//la clef APIKEY unique en cas de besoin : '3215414c948b66e7633fdd873312bc11';

// Appel à l'API OpewWeather avec ville en paramère de fonction grâce à l'url
let apiCall = function (city) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3215414c948b66e7633fdd873312bc11&units=metric';
    
// la methode fetch permet d'obtenir les données du site. 
// On souhaite récupérer les données du fichier JSON pour pouvoir les afficher ensuite sur le DOM.
    fetch(url)
        .then((response) =>
            response.json().then((data) => {
                console.log(data);
// On récupère les différentes ID pour pouvoir y placer ensuite les différentes données 
                document.querySelector('#city').innerHTML = data.name;
                document.querySelector('#temp').innerHTML =
                    "<i class='fas fa-thermometer-half'</i>" + ' ' + data.main.temp + ' °';
                document.querySelector('#humidity').innerHTML =
                    "<i class='fas fa-tint'</i>" + ' ' + data.main.humidity + ' %';
                document.querySelector("#wind").innerHTML =
                    "<i class='fas fa-wind'</i>" + ' ' + data.wind.speed + ' km/h';
            })
        )
        .catch((err) => console.log('Erreur : ' + err));
};

// Ecouteur d'évènement sur la soumission du formulaire (il faut casser l'évènement par défaut consistant
//  à raffraichir la page lorsqu"on clique sur "rechercher" avec la function e.preventDefault ) 
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
});

// Appel à une ville par défaut au chargement de la page
apiCall('padirac');
