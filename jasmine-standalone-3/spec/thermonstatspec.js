'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature', function() {
    thermostat.up(1);
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases temperature', function(){
    thermostat.down(1);
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has min temp 10 degrees', function(){
    thermostat.down(20);
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('power is on by default', function(){
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

});