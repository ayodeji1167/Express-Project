const { CustomError } = require("../error/CustomError");

const errorHanlder = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ error: err.message });
  }
  return res.status(500).json({error: "Something went wrong, please try again"});
};

module.exports = errorHanlder;
