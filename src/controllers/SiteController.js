const AuthService = require('../services/auth.service')
const ProductService = require('../services/product.service')
const UserService = require('../services/users.service')
const { calculateTotal, calculateQuantidadeTotal } = require('../helpers/cart')

class SiteController {
  static async homePage(req, res) {
    const products = await ProductService.getAll()

    res.render('index', {
      title: 'Kombucha',
      products: products
    })
  }

  static loginPage(req, res) {
    res.render('login', {
      title: 'Login',
      isLoginPage: true
    })
  }

  static cadastroPage(req, res) {
    res.render('cadastro', {
      title: 'Cadastro',
      isCadastroPage: true
    })
  }

  static async carrinhoPage(req, res) {
    const cart = req.session.cart || { items: {} }

    res.render('carrinho', {
      title: 'Carrinho',
      carrinho: {
        items: Object.values(cart.items),
        total: calculateTotal(cart),
        quantidadeTotal: calculateQuantidadeTotal(cart)
      }, 
      isCarrinhoPage: true
    })
  }

  
  static async addToCart(req, res) {
    const cart = req.session.cart || { items: {} }

    const product = await ProductService.getById(req.params.id)

    if (cart.items[product.id]) {
      cart.items[product.id].quantidade += 1
    } else {
      cart.items[product.id] = {
        id: product.id,
        quantidade: 1,
        name: product.name,
        price: product.price,
        image: product.image
      }
    }
    
    req.session.cart = cart

    res.redirect('/#sabores')
  }

  static async doRegister(req, res) {
    try {
      const newUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        cpf: req.body.cpf,
        password: req.body.password,
        address: req.body.address,
        number: req.body.number,
        district: req.body.district,
        city: req.body.city,
        state: req.body.state,
        cep: req.body.cep,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const user = await UserService.create(newUser)

      req.startSession(user)

      res.redirect('/')
    } catch (err) {
      console.log(err)

      res.render('register', {
        title: 'APP Cadastro',
        error: err.message
      })
    }
  }

  static async doLogin(req, res) {
    const { email, password } = req.body

    try {
      const user = await AuthService.authenticate(email, password)

      if (!user) {
        return res.render('login', {
          title: 'Login',
          error: 'Usuário ou senha inválidos'
        })
      }

      req.startSession(user)

      res.redirect('/#sabores')
    } catch (err) {
      console.log(err)

      res.render('login', {
        title: 'Login',
        error: 'Erro inesperado'
      })
    }
  }

  static doLogout(req, res) {
    req.session.destroy()
    res.redirect('/')
  }

}

module.exports = SiteController
