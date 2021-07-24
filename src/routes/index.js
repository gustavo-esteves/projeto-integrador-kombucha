const express = require('express')
const SiteController = require('../controllers/SiteController')
const router = express.Router()

/* GET home page. */
router.get('/', SiteController.homePage)

/* GET login page. */
router.get('/login', SiteController.loginPage)

/* GET cadastro page. */
router.get('/cadastro', SiteController.cadastroPage)

/* GET carrinho page. */
router.get('/carrinho', SiteController.carrinhoPage)

module.exports = router
