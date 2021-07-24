const ALL_PRODUCTS = [
  {
    id: '1',
    name: 'ORIGINAL',
    price: 'R$12,00',
    description:
      'Demos nosso toque extra a uma receita tradicional.',
    image: '/img/bancha.png',
    classes: 'rosa'
  },

  {
    id: '2',
    name: 'MORANGO COM GENGIBRE',
    price: 'R$12,00',
    description:'O aroma doce e levemente ácido do morango que combinado ao gengibre proporciona uma bebida deliciosamente refrescante.',
    image: '/img/morango.png',
    classes: 'azul2'
  },

  {
    id: '3',
    name: 'JASMIM',
    price: 'R$12,00',
    description:'O aroma do Jasmim em fusão com o ácido láctico carrega um sabor único e muito perfumado.',
    image: '/img/jasmim.png',
    classes: 'verde'
  },

  {
    id: '4',
    name: 'GENGIBRE COM AÇAFRÃO DA TERRA',
    price: 'R$12,00',
    description:
      'O gengibre oferece notas picantes que harmonizam muito bem com o açafrão, produzindo uma bebida extremamente saborosa.',
    image: '/img/gengibre-acafrao.png',
    classes: 'azul1'
  },

  {
    id: '5',
    name: 'FLORAL',
    price: 'R$12,00',
    description:
      'Com um mix de flores bem trabalhado, buscamos um aroma floral-amadeirado para nossa garrafa.',
    image: '/img/floral.png',
    classes: 'laranja'
  }
]

class ProdutoService {
  static getAll () {
    return ALL_PRODUCTS
  }
}

module.exports = ProdutoService
