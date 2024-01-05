const express = require('express');
const app = express();

app.use(
  express.urlencoded(
    {
      extended: true
    }
  )
);

app.get('/', (req, res) => {
  // res.send('Hello <b>World</b>!');
  res.send(`
  <form action="/" method="POST">
    Nome do cliente: <input type="text" id="nome" name="qualquercoisa">
    <button>Olá Mundo!</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.facebookprofile);
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
