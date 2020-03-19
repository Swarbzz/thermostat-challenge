$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

    displayWeather();
    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      displayWeather(city);
     });

  $('#up').on('click', function() { 
    thermostat.up(1);
    updateTemperature();
  });

  $('#down').on('click', function() {
    thermostat.down(1);
    updateTemperature();
  });

  $('#reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text("on");
    updateTemperature();
  });

  $('#psm-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text("off");
    updateTemperature();
  });

  function updateTemperature() {
    $('#current-temperature').text(thermostat.temperature);
    $('#current-temperature').attr('class', thermostat.usage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }
})