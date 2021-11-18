"use strict";
// alert("Oi");

const handleKeypress = ({ key, target }) => {
  // tres enter quer dizer o igual o valor e tambem o tipo de dados
  if (key === "Enter") {
    carregarGaleria(target.value);
  }
};
// recebendo o que tiver dentro da input para poder buscar
const carregarGaleria = async (pesquisa) => {
  // Testando se a palavra está sendo recebida
  //console.log(pesquisa);
  // Criado para receber a procura das imagens
  const { hits } = await procurarImagens(pesquisa);
  console.log(hits);
};

const procurarImagens = async (pesquisa) => {
  const key = "24046852-a032b367f81c95aa3f833c3d4";
  const url = `https://pixabay.com/api/?key=${key}&q=${pesquisa}`;

  // Faz a requisição ao servidor
  // Problema é que traz uma promessa - o que pode ou não acontecer
  // Programação assíncrona - async
  // Fico com poder de poder pedir para esperar - await - espera o servidor responder para enviar ao response
  const response = await fetch(url);
  //
  // console.log(await response.json);
  return response.json();
};

// keypress- é quando pressionar alguma tecla irá ocorrer uma ação
// handle - pegar
document
  .querySelector("#pesquisa_input")
  .addEventListener("keypress", handleKeypress);
