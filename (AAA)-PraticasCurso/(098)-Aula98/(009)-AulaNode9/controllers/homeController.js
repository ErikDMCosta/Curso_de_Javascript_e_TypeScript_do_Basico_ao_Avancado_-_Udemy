exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
    Nome do cliente: <input type="text" id="nome" name="qualquercoisa">
    Outrocampo: <input type="text" id="nome" name="aquioutrocampo">
    <button>Olá Mundo!</button>
  </form>
  `);
}

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua novas rota de POST.');
}
