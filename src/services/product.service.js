const { produtos } = require('../database/models')

class ProductService {
  static getAll () {
    return produtos.findAll()
  }
}

module.exports = ProductService
