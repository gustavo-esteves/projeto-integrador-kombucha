const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET login page. */
router.get("/login", function (req, res, next) {
  res.render("login", {
    title: "Login",
    isLoginPage: true,
  });
});

/* GET cadastro page. */
router.get("/cadastro", function (req, res, next) {
  res.render("cadastro", {
    title: "Cadastro",
  });
});

module.exports = router;
