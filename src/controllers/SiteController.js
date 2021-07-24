const ProdutoService = require('../services/ProdutoService')

class SiteController {
  static homePage (req, res) {
    const products = ProdutoService.getAll()

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
