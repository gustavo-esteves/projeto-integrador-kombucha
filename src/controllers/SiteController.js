const ProdutoService = require('../services/ProdutoService')

class SiteController {
  static homePage (req, res) {
    const products = ProdutoService.getAll()

    res.render('index', {
      title: 'Kombucha',
      products: products
    })
  }
}

module.exports = SiteController
