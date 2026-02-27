// Busca e exibe os produtos na tabela
async function carregarProdutos() {
  try {
    const response = await fetch('http://localhost:3001/produtos');
    const data = await response.json();
    const tbody = document.querySelector('#tabela-produtos tbody');
    tbody.innerHTML = '';
    data.forEach(prod => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${prod.id}</td><td>${prod.nome}</td><td>R$ ${Number(prod.preco).toFixed(2)}</td>`;
      tbody.appendChild(tr);
    });
  } catch (erro) {
    document.querySelector('#tabela-produtos tbody').innerHTML = '<tr><td colspan="3">Erro ao carregar produtos</td></tr>';
  }
}

// Deleta um produto
async function deletarProduto(id) {
  try {
    const response = await fetch(`http://localhost:3000/produtos/${id}`, {
      method: 'DELETE'
    });
    
    const data = await response.json();
    
    if (response.ok) {
      alert(data.mensagem);
      carregarProdutos(); // Recarrega a lista de produtos
    }
  } catch (erro) {
    alert('Erro ao deletar o produto: ' + erro.message);
  }
}

// Inicializa a função
carregarProdutos();