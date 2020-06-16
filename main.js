var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        function displayCity() {
            var headerText = document.getElementById("city")
            var cityNameHeading = document.createElement("h1");
            var cityName = document.createTextNode(apiResult[0]);
        
            cityNameHeading.appendChild(cityName);
            headerText.appendChild(cityNameHeading);
        }
        
        displayCity();

        

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33025,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();