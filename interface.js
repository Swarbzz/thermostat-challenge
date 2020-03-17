$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

  $('#up').on('click', function() { 
    thermostat.up(1);
    updateTemperature();
  })

  $('#down').on('click', function() {
    thermostat.down(1);
    updateTemperature();
  })

  $('#reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#psm-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text("on");
    updateTemperature();
  })

  $('#psm-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text("off");
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }
})