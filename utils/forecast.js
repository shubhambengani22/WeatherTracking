const request = require('request');

const forecast = (lat, long, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=3356a4147fc0f1894f6c7dd2e5e2ac69&query=' + lat + ',' + long;

    request({ url, json: true }, (err, { body }) => {
        if(err){
            callback("Unable to connect to weather service", undefined);
        }
        else if(body.error){
            callback("Unable to find the location", undefined);
        }
        else{
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out there, it feels like ' + body.current.feelslike + ' degrees out.');
        }
    });
}

module.exports = forecast;