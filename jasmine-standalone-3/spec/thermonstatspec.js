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

  it('max temperature is 25 if PSM is on', function(){
    thermostat.up(20);
    expect(thermostat.temperature).toEqual(25);
  });

  it('max temperature is 32 if PSM is off', function(){
    thermostat.switchPowerSavingModeOff();
    thermostat.up(20);
    expect(thermostat.temperature).toEqual(32);
  });

  it('resets temperature to 20', function(){
    thermostat.up(4);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('returns low-usage if temp < 18', function(){
    thermostat.down(3);
    expect(thermostat.usage()).toEqual('low-usage');
  });

  it('returns medium-usage if temp < 25', function(){
    thermostat.up(3);
    expect(thermostat.usage()).toEqual('medium-usage');
  });

  it('returns high-usage if temp > 24', function(){
    thermostat.up(10);
    expect(thermostat.usage()).toEqual('high-usage');
  });

});