const router = require('express').Router();
const directoryControllers = require('../controller/directoryController.js');

/**
* @description < get route url>
* @author <ibtihal el maghraoui>
*/
router
  .route('/directory')
  .get(directoryControllers.getAllDirectories);

module.exports = router;
