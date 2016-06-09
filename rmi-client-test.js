var dnode = require('dnode');

/*
  This test connects to the RMI server and outputs the returned html.
  End goal is to run this from the dnode-php client to integrate into the webshop.
*/

var d = dnode.connect(9001);
d.on('remote', function (remote) {
  remote.render(function(html) {
    console.log(html);
    d.end();
  });
});
