const {getAllProducts, getDynamicProducts} = require("../controller/productController");
const router = require("express").Router();

router.route("/").get(getAllProducts);
router.route("/search").get(getDynamicProducts);

module.exports = router;