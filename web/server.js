var vertx    = require('vertx'),
    logger   = require('vertx/container').logger,
    console  = require('vertx/console'),
    eventBus = require('vertx/event_bus');

logger.info("Web Server started");

var pending = 0, done = 0, failed = 0;

vertx.createHttpServer().requestHandler(function(req) {
  if(req.path() == "/start") {
    req.response.end("Started");
    pending++;
    eventBus.sendWithTimeout("test.jobs", "DO STUFF", 10000, function(err, response) {
      if(!err) {
        logger.info("Worker responded:");
        logger.info(response);
        done++;
        pending--;
      } else {
        logger.error("Whoops, no worker available :(", err);
        failed++;
        pending--;
      }
    });
  } else {
    req.response.end("Pending: " + pending + " / Done: " + done + " / Failed: " + failed);
  }
}).listen(8080);
