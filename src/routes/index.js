const express = require('express')
const SiteController = require('../controllers/SiteController')
const router = express.Router()

/* GET home page. */
router.get('/', SiteController.homePage)

/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login', {
    title: 'Login',
    isLoginPage: true
  })
})

/* GET cadastro page. */
router.get('/cadastro', function (req, res, next) {
  res.render('cadastro', {
    title: 'Cadastro',
    isCadastroPage: true
  })
})

/* GET carrinho page. */
router.get('/carrinho', function (req, res, next) {
  res.render('carrinho', {
    title: 'Carrinho',
    isCarrinhoPage: true
  })
})

module.exports = router
