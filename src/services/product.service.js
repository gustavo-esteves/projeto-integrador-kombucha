const { produtos } = require('../database/models')

class ProductService {
  static getAll () {
    return produtos.findAll()
  }

  static getById (id) {
    return produtos.findOne({ where: { id } })
  }
  
}

module.exports = ProductService
