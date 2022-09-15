const jwt = require("jsonwebtoken");
exports.authRequired = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(402).json({ error: "Please login" });
  }

  //   const token = authorization.split("Bearer ")[0]
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(402).json({ error: "Please login" });
  }

  const user = jwt.verify(
    token,
    "8d1c20af859dcebf401e383d03277bccc0d18466dbbea5216ab843ea4859c816"
  );

  req.user = user;
  next();
};
