const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  // copy the request query
  let reqQuery = { ...req.query };

  // list the statements to be removed
  const removeFields = ["select", "sort", "page", "limit"];

  // remove the select word from the reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // convert req query to string
  let queryStr = JSON.stringify(reqQuery);

  // regular expression to replace  gt with $gt
  queryStr = queryStr.replace(
    /\b(gt|lt|gte|lte|in)\b/g,
    (match) => `$${match}`
  );

  //finding resource - populate courses is because of the virtuals that we added in bootcamp model
  // query = Bootcamp.find(JSON.parse(queryStr)).populate("courses");
  query = model.find(JSON.parse(queryStr));

  // Select fields
  if (req.query.select) {
    // split using ,
    // we get an array with values
    // join the array back into string using join operation with space
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    console.log(sortBy);
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // Pagination
  // here parseInt 2nd argument is radix that is 10 in decimal ,default page is 1
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const total = await model.countDocuments();

  query = query.skip(startIndex).limit(limit);

  // populate
  if (populate) {
    query.populate(populate);
  }

  // execution
  const results = await query;

  // pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit: limit,
    };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination: pagination,
    data: results,
  };
  next();
};

module.exports = advancedResults;
