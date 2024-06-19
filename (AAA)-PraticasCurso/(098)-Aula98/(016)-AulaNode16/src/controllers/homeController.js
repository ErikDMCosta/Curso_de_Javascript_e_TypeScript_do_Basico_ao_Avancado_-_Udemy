exports.paginaInicial = (req, res) => {
  req.session.usuario = { nome: "Erik", logado: true };
  res.render("index");
};

exports.tratarPost = (req, res) => {
  res.send("Ei, sou sua nova rota de POST.");
};
