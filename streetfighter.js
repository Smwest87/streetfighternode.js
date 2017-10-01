var http = require('http');
var url = require ('url');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).query;
  var character = ["Ryu", "Guile", "Bison"];
  var notation = q.notation;
  if (q.notation== "qcf-p") {
    var specialmove= "fireball";
  }
  else if (q.notation== "hb-f-p") {
    var specialmove= "sonicboom";
  }
  else if (q.notation=="hb-f-k") {
    var specialmove="psycho crusher";
  }
  else {
    specialmove="Invalid Command Input";
  }


 if (specialmove== "fireball") {
        res.write(character[0] + " uses this move." + '\n');
  }
  else if (specialmove== "sonicboom") {
    res.write(character[1] + " uses this move." + '\n');
  }
  else if (specialmove== "psycho crusher") {
    res.write(character[2] + " uses this move." + '\n');
  }
  else {
    res.write("You have entered an " + specialmove + "! No move will come out and your opponent can punish you!" + '\n');
  }
  txt = "The notation for a " + specialmove + " is " + notation + ".";

 if (specialmove!="Invalid Command Input") {
    res.end(txt);
  }
  else {
  res.end();
  }
}).listen(8080);
