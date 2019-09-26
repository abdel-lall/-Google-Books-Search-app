const router = require("express").Router();
const bookRoutes = require("./apiRoute");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;