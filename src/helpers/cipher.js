const crypto = require('crypto')

const SALT = 'salt-hash'

const hash = password => {
  const token = crypto.scryptSync(password, SALT, 32)
  return token.toString('hex')
}

const verify = (password, token) => hash(password) === token

module.exports = {
  hash,
  verify
}
