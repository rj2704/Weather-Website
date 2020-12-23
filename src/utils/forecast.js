const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherapi.com/v1/current.json?key=659f7a181f4e4ffb97e112144202112&units=si&q=' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {

        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, 'It is currently '+ body.current.temp_f + ' Fahrenheit. There is a ' + body.current.precip_in + '% chance of rain.' )
        }
    })
}

module.exports = forecast