const jsonServer = require('json-server');
const bcrypt = require('bcryptjs');
const fs = require('fs');

// Criar um servidor json-server
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Usar middlewares padrão do json-server (logger, static, cors e no-cache)
server.use(middlewares);

// Middleware para criptografar a senha antes de salvar no db.json
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/users') {
    const { senha } = req.body;
    if (senha) {
      const hashedPassword = bcrypt.hashSync(senha, 10);
      req.body.senha = hashedPassword;
    }
  }
  next();
});

// Usar roteador json-server
server.use(router);

// Iniciar o servidor
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server está rodando em http://localhost:${PORT}`);
});
