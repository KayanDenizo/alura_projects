// main = principal (é normal os desenvolvedores utilizarem o main.js como arquivo principal JS)

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
    // não é necessario dizer ao IF que != null, pois o proprio javaScript ja identifica isso
    elemento.play();
    // "!=" significa não for igual
  } else {
    console.log('Elemento não encontrado ou seletor inválido');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para, ou for, pode ser declarado dentro da sintaxe
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;// template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {

    // code: Mostra que tecla está sendo pressionada

    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
      // a classe ativa está no css, que faz o botão ficar vermelho
      // evento.code faz com que apenas uma certa tecla vai fazer aquele evento
      // estou usando === porque faz a comparação lógica, se é exatamente igual por exemplo:
      // 1 == '1'
      // retornaria true, pq esta pegando o valor dentro da String, que é 1, mas se for
      // 1 === '1'
      // retornaria false, pq uma é number e outra String.
      // "||" é OU
    }

  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }

}

// const = valor constante

// tem que deixar o tocaSomPom sem parenteses, pq se deixar com parenteses vai executar a função no mesmo instante e vai dar erro, deixando sem parenteses vai fazer o carregamento certo da função tocaSomPom
