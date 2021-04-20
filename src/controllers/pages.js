function home (req, res) {
    res.render ('index', {title: 'OHMBUCHA - home'})
}

const produtos = [
    {nome: 'bancha', cor: '#F78E89'},
]

function paginaDeProdutos (req, res) {
    res.render ('produtos', {produtos, title: 'OHMBUCHA - produtos'})
}



module.exports = {home, paginaDeProdutos}