module.exports = function (req, res, next) {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTIONS,PATCH"
  );
  res.header(
    "Acess-Control-Allow-Methods",
    "Origin, X-Requested-Width, Content-Type, Accept"
  );
  next();
};
