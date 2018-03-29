var http = require('http');

var options = {
  host: 'api.openweathermap.org',
  port: 80,
  path: '/data/2.5/weather?q=Lagos,Nigeria&APPID=a001d9a3c3d09b42c643fe39c5de7322',
  method: 'GET'
};

http.request(options, function(res){
  var body = '';
  res.on('data', function(chunk){
    body+= chunk;
  });

  res.on('end',function(){
    var json_obj = JSON.parse(body);
    var name = json_obj.name;
    var temp = json_obj.main.temp;
    temp = Math.round(temp - 273.15);
    var pressure = json_obj.main.pressure;
    var humidity = json_obj.main.humidity;
    var cloud = json_obj.clouds.all;

    var result = "\nToday's Weather Report For "+ name +" State:\n\n";
    result+= "Temperature:\t"+temp+"°C\n";
    result+= "Pressure:\t"+pressure+"hpa\n";
    result+= "Humidity:\t"+humidity+"%\n";
    result+= "Cloud:\t"+cloud+" %\n";

    console.log(result)
  });
}).end();
