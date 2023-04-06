const APIKEY = '3215414c948b66e7633fdd873312bc11';

// Appel à l'API OpewWeather avec ville en paramère de fonction
let apiCall = function (city) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3215414c948b66e7633fdd873312bc11&units=metric';
    

    fetch(url)
        .then((response) =>
            response.json().then((data) => {
                console.log(data);
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

// Ecouteur d'évènement sur la soumission du formulaire 
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
});

// Appel par défaut au chargement de la page
apiCall('padirac');
