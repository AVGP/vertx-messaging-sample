var vertx    = require('vertx'),
    logger   = require('vertx/container').logger,
    eventBus = require('vertx/event_bus');

var handleMsg = function(msg, respond) {
  logger.info('Oh, work!');
  logger.info(msg);
  vertx.setTimer(5000, function() {
    respond("Done");
  });
};

eventBus.registerHandler('test.jobs', handleMsg);
logger.info("Worker started");

function vertxStop() {
  eventBus.unregisterHandler('test.jobs', handleMsg);
  logger.fatal("Goodbye, cruel world!");
}
