const request = require("request")
const forecast = (latitude , longtitude , callback )=>{
    const url="https://api.weatherapi.com/v1/current.json?key=b2cd04f1ea7848059f7103647232311&q=" + latitude + "," + longtitude
    request({url , json:true}, (error , response) =>{
        if(error){
            callback("Unable to connect weather service" , undefined)
        }else if(response.body.error){
            callback(response.body.error.message , undefined)
        }else{
            callback(undefined , response.body.location.name +'It Is '+  response.body.current.condition.text
            +' And Temp '+ response.body.current.temp_c)
        }
    })
}
module.exports = forecast;