// Busca e exibe os produtos na tabela
fetch('http://localhost:3001/produtos')
  .then(res => res.json())
  .then(produtos => {
    const tbody = document.querySelector('#tabela-produtos tbody');
    tbody.innerHTML = '';
    produtos.forEach(prod => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${prod.id}</td><td>${prod.nome}</td><td>R$ ${Number(prod.preco).toFixed(2)}</td>`;
      tbody.appendChild(tr);
    });
  })
  .catch(() => {
    document.querySelector('#tabela-produtos tbody').innerHTML = '<tr><td colspan="3">Erro ao carregar produtos</td></tr>';
  });