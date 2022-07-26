module.exports.paginate = (req, res, next) => {
  const {
    query: { page = 1, results = 3 },
  } = req;

  req.pagination = {
    limit: results,
    offset: (page - 1) * results,
  };
  next();
};
