'use strict'

const { hash } = require('../../helpers/cipher')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Manolo',
          lastname: 'Silva',
          email: 'manolo@email.com',
          cpf: '12345678900',
          password: hash('12345'),
          address: 'Rua das Couves',
          number: '256',
          district: 'Vila das Flores',
          city: 'Carapicuiba',
          state: 'SP',
          cep: '06328080',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
}
