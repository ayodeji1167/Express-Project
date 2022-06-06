const productSchema = require("../model/product");

//Get All Products
const getAllProducts = async (req, res) => {
  const product = await productSchema.find({ price: {$gt: 300} })
  .select("name price");

  res.status(200).json({ product, noOfProd: product.length });
};

//Filtering With Request Queries
const getDynamicProducts = async (req, res) => {
  const { company, name, featured, sort } = req.query;
  let queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (name) {
    queryObject.name = name;
  }
  if (company) {
    queryObject.company = company;
  }

  let product = productSchema.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    console.log(sortList);
    product = product.sort(sortList);
  } else {
    product = product.sort("createdAt");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 2;
  const skip = (page - 1) * limit;

  product = product.skip(skip).limit(limit);

  const finalProducts = await product;
  res.status(200).json({ finalProducts, noOfProd: finalProducts.length });
};

module.exports = { getAllProducts, getDynamicProducts };
