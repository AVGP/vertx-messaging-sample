var container = require("vertx/container")
    eb        = require("vertx/event_bus");

var serverConf = {
  port: 8000,
  bridge: true,
  inbound_permitted: [{}],
  outbound_permitted: [{}]
}

container.deployModule("io.vertx~mod-web-server~2.0.0-final", serverConf);

eb.registerHandler("test.echo", function(msg, reply) {
  eb.send(reply, msg);
});
