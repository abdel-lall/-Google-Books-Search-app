const router = require("express").Router();
const controller = require("../../controller/controller");

// Matches with "/api/books"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(controller.remove);

module.exports = router;