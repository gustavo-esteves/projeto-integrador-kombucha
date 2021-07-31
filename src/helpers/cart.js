

const calculateTotal = (cart) => {
    const items = Object.values(cart.items)
    const total = items.reduce((tot, product) =>
      tot + (product.price * product.quantidade)
    , 0)

    return total
}

const calculateQuantidadeTotal = (cart) => {
    const items = Object.values(cart.items)
    const total = items.reduce((tot, product) => tot + product.quantidade, 0)

    return total
  }

module.exports = {
  calculateTotal,
  calculateQuantidadeTotal
}