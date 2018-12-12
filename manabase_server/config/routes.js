var collectionController = require("../controllers/collectionController");

module.exports = function(app) {
  app.get("/collection", collectionController.index);
};
