"use strict";

const log = require("npmlog");

module.exports = logPackageError;

function logPackageError(err) {
  log.error(err.cmd, `exited ${err.code} in '${err.pkg.name}'`);

  if (err.stdout) {
    log.error(err.cmd, "stdout:");
    log.error(err.stdout);
  }

  if (err.stderr) {
    log.error(err.cmd, "stderr:");
    log.error(err.stderr);
  }

  // Below is just to ensure something sensible is printed after the long stream of logs
  log.error(err.cmd, `exited ${err.code} in '${err.pkg.name}'`);
}
