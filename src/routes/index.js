var express = require('express');
var router = express.Router();
const controller = require('../controllers/pages')

/* GET home page. */
router.get('/', controller.home);

/* GET login page. */
router.get('/login.ejs', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET products page. */
router.get('/produtos', controller.paginaDeProdutos)

module.exports = router;
