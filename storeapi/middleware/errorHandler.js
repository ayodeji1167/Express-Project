const errorHandler = (err, req, res, next) => {
  res.status(500).json({ mssg: "Something went wrong, please try again" });
};

module.exports = errorHandler;