exports.paginaInicial = (req, res) => {
  res.render('index');
}

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua novas rota de POST.');
}
