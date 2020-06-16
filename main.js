var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        console.log(apiResult.name);
        console.log(apiResult.weather[0].description);

        function displayCity() {
            var headerText = document.getElementById("city")
            var cityNameHeading = document.createElement("h1");
            var cityName = document.createTextNode(apiResult.name);
        
            cityNameHeading.appendChild(cityName);
            headerText.appendChild(cityNameHeading);
        }
        
        displayCity();

        function displayWeather() {
            var mainText = document.getElementById("weather")
            var weatherDescriptionText = document.createElement("h2");
            var weatherDescription = document.createTextNode(apiResult.weather[0].description);
        
            weatherDescriptionText.appendChild(weatherDescription);
            mainText.appendChild(weatherDescriptionText);
        }
        
        displayWeather();

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33025,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();