const errorHandler = (err, req, res, next) => {
  return res
    .status(err.statusCode || 500)
    .json({ status: false, error: err.message || "Server error" });
};

module.exports = errorHandler;
