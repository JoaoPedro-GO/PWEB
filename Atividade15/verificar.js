function validar() {
  const form = document.nomeform.elements;

  const nome = form["nome"].value.trim();
  if (nome.length < 10) {
    alert("O nome deve ter no mínimo 10 caracteres.");
    return false;
  }


  const comentario = form["comentario"].value.trim();
  if (comentario.length < 20) {
    alert("O comentário deve ter no mínimo 20 caracteres.");
    return false;
  }


  const pesquisaRadios = form["pesquisa"];
  let resposta = null;

  for (let i = 0; i < pesquisaRadios.length; i++) {
    if (pesquisaRadios[i].checked) {
      resposta = pesquisaRadios[i].value;
      break;
    }
  }

  if (!resposta) {
    alert("Selecione uma opção na pesquisa.");
    return false;
  } else if (resposta === "nao") {
    alert("Que bom que você voltou a visitar esta página!");
  } else {
    alert("Volte sempre à esta página!");
  }

  return true;
}
