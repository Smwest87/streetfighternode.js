var http = require('http');
var url = require ('url');
var fs = require('fs');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var character = ["Ryu", "Guile", "Bison"];
  var notation = q.notation;
  if (q.notation== "qcf-p") {
    var specialmove= "fireball";
  }
  else if (q.notation== "hb-f-p") {
    var specialmove= "sonicboom";
  }
  else if (q.notation== "hb-f-k") {
    var specialmove= "psycho crusher";
  }
  else {
    specialmove="Invalid Command Input";
  }


 if (specialmove== "fireball") {
        fs.readFile('ryu.html', function(err, data) {
          res.write(data);
        });
      }
else if (specialmove== "sonicboom") {
          fs.readFile('guile.html', function(err, data) {
            res.write(data);
          });
        }
else if (specialmove== "psycho crusher") {
        fs.readFile('bison.html', function(err,data) {
            res.write(data);
        });
      }
else {
    res.write("Invalid Notation - Please try a different notation for character results.");
}
    }).listen(8080);
