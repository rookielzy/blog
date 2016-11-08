$(document).ready(function() {
    var lat;
    var lon;
    navigator.geolocation.getCurrentPosition(function(position) {
            lat = parseInt(position.coords.latitude).toString();
            lon = parseInt(position.coords.longitude).toString();
            var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b4f61b39aa0b1eb010f81ab07005cbe4";
            console.log(api);
            $.getJSON(api, function(json){
                console.log(JSON.stringify(json));
                // var data = JSON.stringify(json);
                var cel = (json.main.temp / 10).toFixed(1)
                $("#position").html(json.name + '<br>' + json.sys.country + '<br>' + cel + ' °C');
                $("#weather").html(json.weather[0].main + '<br>' +
                            '<img src=' + 'http://openweathermap.org/img/w/' + json.weather[0].icon + '.png></img>')
                // console.log(json.name);
            });
        });
});