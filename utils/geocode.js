const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic2h1YmhhbWJlbmdhbmkyMiIsImEiOiJja2huMjVsZWEyYmdsMnlxcTlqNGs3dXh2In0.yn5mk9Kyq5a2awPuuuQwpw";

    request({ url, json: true }, (err, res) => {
        if(err)
            callback("Unable to connect to geocoding services", undefined);
        else if(res.body.features.length === 0){
            callback("Unable to find any matches.", undefined);
        }
        else{
            callback(undefined, {
                lat: res.body.features[0].center[1],
                long: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            });
        }
    })
};

module.exports = geocode;