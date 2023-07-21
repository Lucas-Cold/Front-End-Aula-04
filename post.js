
const posts = [
    {
      titulo: 'Aline Nogueira',
      conteudo: 'Se tudo for acabar em pizza, me avise para eu escolher o sabor!',
      data: '11 de Julho de 2023'
    },
    {
        titulo: 'César Moraes',
        conteudo: 'A vida é muita curta para comer pizza só no final de semana!',
        data: '10 de Julho de 2023'
      },
      {
      titulo: 'Davi Lucca Franco',
      conteudo: 'Dinheiro bem gasto é aquele usado para comprar pizza!',
      data: '09 de Julho de 2023'
    },
    {
      titulo: 'Liz Pereira',
      conteudo: 'Melhor que pedir pizza a noite, é sobrar e ter pizza para o café da manhã!',
      data: '09 de Julho de 2023'
    }
  ];
  
  function exibirPosts() {
    const postsSection = document.getElementById('posts');
  
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
  
      const titulo = document.createElement('h2');
      titulo.textContent = post.titulo;
  
      const conteudo = document.createElement('p');
      conteudo.textContent = post.conteudo;
  
      const data = document.createElement('small');
      data.textContent = post.data;
  
      postDiv.appendChild(titulo);
      postDiv.appendChild(conteudo);
      postDiv.appendChild(data);
  
      postsSection.appendChild(postDiv);
    });
  }
  
  window.onload = exibirPosts;