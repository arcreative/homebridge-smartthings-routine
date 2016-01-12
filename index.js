var request = require('request');
var Service, Characteristic;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory('homebridge-smartthings-routine', 'SmartThingsRoutine', SmartThingsRoutineAccessory);
}

function SmartThingsRoutineAccessory(log, config) {
  var accessory = this;

  this.log = log;
  this.name = config['name'];
  this.appId = config['appId']
  this.accessToken = config['accessToken'];

  this.service = new Service.Switch(this.name);

  this.service
      .getCharacteristic(Characteristic.On)
      .on('set', function(state, callback) {
        var url = "https://graph.api.smartthings.com/api/smartapps/installations/" + accessory.appId + "/action/execute?access_token=" + accessory.accessToken;

        accessory.log('Activating `' + accessory.name + '`: ' + url);

        request.get({
          url: url,
        }, function(err, response) {
          if (!err && response.statusCode == 200) {
            accessory.log("Triggered successfully")
            callback(null);
          } else {
            accessory.log("Error '" + err + "': " + body)
            callback(err);
          }
        });
      });
}

SmartThingsRoutineAccessory.prototype.getServices = function() {
  return [this.service];
};
