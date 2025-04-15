const path = require("path");

const getHomeView = (_req, res) => {
  res.render("home");
};

module.exports = { getHomeView };