const ALL_PRODUCTS = [
  {
    id: '1',
    name: 'BANCHA',
    price: 'R$0,00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/img/bancha.png',
    classes: 'rosa'
  }
]

class ProdutoService {
  static getAll () {
    return ALL_PRODUCTS
  }
}

module.exports = ProdutoService
