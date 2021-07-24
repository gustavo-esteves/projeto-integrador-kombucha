const { hash } = require('../helpers/cipher')
const { users } = require('../database/models')

class UserService {
  static findAll () {
    return users.findAll()
  }

  static findWhere (query) {
    return users.findWhere(query)
  }

  static findByEmail (email) {
    return users.findOne({ where: { email } })
  }

  static create (userToSave) {
    userToSave.password = hash(userToSave.password)

    return users.create(userToSave)
  }

  static async update (userId, userData) {
    const user = await users.findByPk(userId)

    Object.assign(user, userData)
    await user.save()

    return user
  }

  static remove (userId) {
    return users.destroy({
      where: {
        id: userId
      }
    })
  }
}

module.exports = UserService
