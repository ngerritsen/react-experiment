var dnode = require('dnode');
var express = require('express');
var app = express();
var ejs = require('ejs');
var fs = require('fs');
var config = require('./etc/config');
var d = dnode.connect(config.dnodePort);

d.on('remote', function (remote) {
  startApp(remote)
});

function startApp(remote) {
  var template = getTemplate();

  app.use(express.static('public'));

  app.get('/', function (req, res) {
    remote.render(function(app) {
      console.log(app)
      var html = template(app);
      res.send(html);
    });
  });

  app.listen(3000, function () {
    console.log('Listening on port 3000!');
  });
}

function getTemplate() {
  var templateString = fs.readFileSync('./index.ejs', 'utf8');
  return ejs.compile(templateString);
}
