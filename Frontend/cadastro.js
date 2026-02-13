document.getElementById('form-cadastro').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = this.nome.value;
  const preco = this.preco.value;
  fetch('http://localhost:3001/produtos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, preco })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('mensagem').textContent = 'Produto cadastrado com sucesso!';
      this.reset();
    })
    .catch(() => {
      document.getElementById('mensagem').textContent = 'Erro ao cadastrar produto.';
    });
});