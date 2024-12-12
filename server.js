const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Configura a pasta public como raiz para arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rota para o index.html (Login)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rota para o BeloJardim.html (Dashboard)
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard", "BeloJardim.html"));
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
