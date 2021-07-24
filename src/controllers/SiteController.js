const ProductService = require('../services/product.service')

class SiteController {
  static async homePage (req, res) {
    const products = await ProductService.getAll()

    res.render('index', {
      title: 'Kombucha',
      products: products
    })
  }

  static loginPage (req, res) {
    res.render('login', {
      title: 'Login',
      isLoginPage: true
    })
  }

  static cadastroPage (req, res) {
    res.render('cadastro', {
      title: 'Cadastro',
      isCadastroPage: true
    })
  }

  static carrinhoPage (req, res) {
    res.render('carrinho', {
      title: 'Carrinho',
      isCarrinhoPage: true
    })
  }
}

module.exports = SiteController
