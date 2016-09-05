$.getJSON('http://ip-api.com/json', function(ipAddress) {

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + ipAddress.lat + '&lon=' + ipAddress.lon + '&APPID=3bb886f2046f1408ee6a00514f6a0e03', function(forecast) {
    var celsius = forecast.main.temp - 273.15;
    var fahrenheit = celsius * 1.8 + 32;
    var backgroundPic = forecast.weather[0].icon.substring(0, 2);

    $(document).ready(function() {
      if (backgroundPic === '01' || backgroundPic === '02' || backgroundPic === '03') {
        $('body').css('background-image', 'url("images/clear-sky.jpg")');
      } else if (backgroundPic === '04') {
        $('body').css('background-image', 'url("images/cloudy-day.jpg")');
      } else if (backgroundPic === '09') {
        $('body').css('background-image', 'url("images/little-rain.jpg")');
      } else if (backgroundPic === '10') {
        $('body').css('background-image', 'url("images/rain.jpg")');
      } else if (backgroundPic === '11') {
        $('body').css('background-image', 'url("images/lightning.jpg")');
      } else if (backgroundPic === '13') {
        $('body').css('background-image', 'url("images/snow.jpg")');
      } else if (backgroundPic === '50') {
        $('body').css('background-image', 'url("images/fog.jpg")');
      } else {
        $('body').css('background-image', 'url("images/def.jpg")');
      }
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