import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Altere se necessário
  password: '', // Altere se necessário
  database: 'web_03ta'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
  } else {
    console.log('Conectado ao banco de dados!');
  }
});

// Rota para mostrar produtos
app.get('/produtos', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

// Rota para cadastrar produto
app.post('/produtos', (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || !preco) return res.status(400).json({ erro: 'Nome e preço obrigatórios' });
  db.query('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [nome, preco], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.json({ id: result.insertId, nome, preco });
  });
});

app.listen(3001, () => {
  console.log('Backend rodando na porta 3001');
});
