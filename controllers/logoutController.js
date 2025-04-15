const path = require("path");

const getProcessLog = () => {
    console.log("Process log...");
};

const getLogoutView = (_req, res) => {
    res.render("logout");
};

const killAplication = (_req, res) => {
    getProcessLog();
    process.exit();
};

module.exports = {
    getLogoutView,
    killAplication,
};