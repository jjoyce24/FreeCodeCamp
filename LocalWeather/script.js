$.getJSON('http://ip-api.com/json', function(ipAddress) {

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + ipAddress.lat + '&lon=' + ipAddress.lon + '&APPID=3bb886f2046f1408ee6a00514f6a0e03', function(forecast) {
    var celsius = forecast.main.temp - 273.15;
    var fahrenheit = celsius * 1.8 + 32;
    var backgroundPic = forecast.weather[0].icon.substring(0, 2);

    $(document).ready(function() {
      $('.information').text('Hello ' + ipAddress.city + '!');
      $('.btn-check').on('click', function() {
        $('.btn-check').hide();
        $('.btn-celsius').show();
        $('.information').text('The current temperature in ' + ipAddress.city + ' is ' + fahrenheit.toFixed(0) + ' degrees Fahrenheit.');
      });
      $('.btn-celsius').on('click', function() {
        $('.btn-celsius').hide();
        $('.btn-fahrenheit').show();
        $('.information').text('The current temperature in ' + ipAddress.city + ' is ' + celsius.toFixed(0) + ' degrees Celsius.');
      });
      $('.btn-fahrenheit').on('click', function() {
        $('.btn-fahrenheit').hide();
        $('.btn-celsius').show();
        $('.information').text('The current temperature in ' + ipAddress.city + ' is ' + fahrenheit.toFixed(0) + ' degrees Fahrenheit.');
      });
    });
  
  });
});