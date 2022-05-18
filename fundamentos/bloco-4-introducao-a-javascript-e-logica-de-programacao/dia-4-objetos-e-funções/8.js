let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };
console.log(leitor.nome + ' ' + leitor.sobrenome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos : ' + leitor.livrosFavoritos[0]['titulo'] + ' e ' + leitor.livrosFavoritos[1]['titulo']);


