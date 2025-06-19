const perguntas = [
  {
    pergunta: "Que nome de pokemon NUNCA saiu da sua boca?",
    respostas: [
      { id: 1, texto: "Togedemaru", correto: false },
      { id: 2, texto: "Clodsire", correto: false },
      { id: 3, texto: "Sawsbuck", correto: true },
      { id: 4, texto: "Stakataka", correto: false },
    ],
  },
  {
    pergunta: "O que que VOCÊ é?",
    respostas: [
      { id: 1, texto: "Um baiacu", correto: true },
      { id: 2, texto: "Um tipo de fecho-éclair", correto: false },
      { id: 3, texto: "Um macaco do Bloons TD6", correto: false },
      { id: 4, texto: "Um porta-moedas", correto: false },
    ],
  },
  {
    pergunta: "Quando é o MEU aniversário? Seja sincero",
    respostas: [
      { id: 1, texto: "27 de Outubro", correto: false },
      { id: 2, texto: "29 de Novembro", correto: false },
      { id: 3, texto: "26 de Novembro", correto: false },
      { id: 4, texto: "Eu nunca lembro", correto: true },
    ],
  },
  {
    pergunta: "Quantos pseudônimos VOCÊ tem?",
    respostas: [
      { id: 1, texto: "2", correto: false },
      { id: 2, texto: "Infinitos", correto: true },
      { id: 3, texto: "20 e 10", correto: false },
      { id: 4, texto: "Nenhum", correto: false },
    ],
  },
  {
    pergunta: "A crase nunca ocorre do The Jeanus and Beunbus é uma parodia de que música?",
    respostas: [
      { id: 1, texto: "Fico Assim Sem Você", correto: false },
      { id: 2, texto: "Beautiful Girls", correto: true },
      { id: 3, texto: "Die Hard", correto: false },
      { id: 4, texto: "The Only Thing I Know For Real", correto: false },
    ],
  },
  {
    pergunta: "Quem VOCÊ era na série de Amor Doce do Dancing Peras?",
    respostas: [
        { id: 1, texto: "Armin", correto: false },
        { id: 2, texto: "Castiel", correto: false },
        { id: 3, texto: "Jade", correto: true },
        { id: 4, texto: "Lysandre", correto: false },
      ],
  },
  {
    pergunta: 'O vídeo "Video tutorial para CAIO MENEZES" é um tutorial ensinando como...',
    respostas: [
        { id: 1, texto: "Baixar Deltarune chapter 3", correto: false },
        { id: 2, texto: "Baixar Minecraft", correto: false },
        { id: 3, texto: "Baixar o TLauncher", correto: false },
        { id: 4, texto: "Baixar Undertale 100% gratuito real sem vírus 2023 e com salve", correto: true },
      ],
  },
  {
    pergunta: "Quem você era no Recife Revengers?",
    respostas: [
        { id: 1, texto: "Taiju Shiba", correto: false },
        { id: 2, texto: "Takemichi Hanagaki", correto: false },
        { id: 3, texto: "South Terano", correto: false },
        { id: 4, texto: "Draken", correto: true },
      ],
  },
  {
    pergunta: "Como Heitorzinho voltou ao passado pela primeira vez?",
    respostas: [
        { id: 1, texto: "Ele fez um desejo", correto: false },
        { id: 2, texto: "Ele caiu nos trilhos do metrô", correto: false },
        { id: 3, texto: "Ele comeu um cuscuz paulista", correto: true },
        { id: 4, texto: "Ele apertou a mão de Jotave 🥚", correto: false },
      ],
  },
  {
    pergunta: "Qual o final do nome do Gachachu?",
    respostas: [
        { id: 1, texto: "Minino", correto: true },
        { id: 2, texto: "Pipinhos", correto: false },
        { id: 3, texto: "Minhoquios", correto: false },
        { id: 4, texto: "Bucodinho", correto: false },
      ],
  }
];

const pergunta = document.getElementById("pergunta");
const titulo = document.getElementById("titulo");
const botoesResposta = document.getElementById("btnRespostas");
const botaoConfirma = document.getElementById("confirma");
const trap = document.getElementById("trap");
const weezer = document.getElementById("weezer");
const divImg = document.getElementById("divImg");
let indexQuestaoAtual = 0;
let pontos = 0;
let imagem = document.getElementById("img");

function tiraImg() {
  divImg.removeChild(imagem);
  weezer.pause();
}

function comeco() {
  titulo.innerHTML = "Quiz para saber se você é realmente <span id = 'bebo'>BEBO</span>"
  tiraImg();
  trap.pause();
  indexQuestaoAtual = 0;
  pontos = 0;
  questao();
}

function btnReset() {
  botaoConfirma.style.display = "none";
  while (botoesResposta.firstChild) {
    botoesResposta.removeChild(botoesResposta.firstChild);
  }
}

function clicou(btn) {
  respostas = perguntas[indexQuestaoAtual].respostas;
  const btnCorreto = respostas.filter((resposta) => resposta.correto == true)[0];

  const btnClicado = btn.target;
  const valorCorreto = btnClicado.dataset.id == btnCorreto.id;
   
  if (valorCorreto == true) {
    btnClicado.classList.add("acertou");
    pontos++;
    if (indexQuestaoAtual == 2) {
      alert("Eu sei");
    }
  } else {
    btnClicado.classList.add("errou");
    if (indexQuestaoAtual == 2) {
      alert("ASSUMA A RESPONSABILIDADE E DIGA LOGO QUE VOCÊ NÃO LEMBRA");
    }
  }
  Array.from(btnRespostas.children).forEach((button) => {
    button.disabled = true;
  })
  botaoConfirma.innerHTML = "Confirmar";
  botaoConfirma.style.display = "flex";
}

function questao() {
  btnReset();
  let questaoAtual = perguntas[indexQuestaoAtual];
  let num = indexQuestaoAtual + 1;
  pergunta.innerHTML = num + ". " + questaoAtual.pergunta;

  questaoAtual.respostas.forEach((resposta) => {
    const botao = document.createElement("button");
    botao.innerHTML = resposta.texto;
    botao.dataset.id = resposta.id;
    botao.classList.add("btn");
    botao.addEventListener("click", clicou);
    botoesResposta.appendChild(botao);
  })
}

function proxima() {
  indexQuestaoAtual++;
  if (indexQuestaoAtual < perguntas.length) {
    questao();
  } else {
    pontuacao();
  }
}

function pontuacao() {
  btnReset();
  if(pontos == perguntas.length) {
    titulo.innerHTML = "PARABÉNS!!!<br>PELO VISTO VOCÊ É REALMENTE <span id = 'bebo'>BEBO</span>";
    pergunta.innerHTML = "Feliz aniversário!!!"
    trap.play();
    imagem.src = "Might.jpg";
    imagem.alt = "All Might";
    divImg.appendChild(imagem);
    botaoConfirma.innerHTML = "Receber sua recompensa";
    botaoConfirma.style.display = "flex";
  } else {
    pergunta.innerHTML = `Você acertou ${pontos} de ${perguntas.length} perguntas<br>
    Pelo visto você não é Bebo...`;
    botaoConfirma.innerHTML = "Jogar novamente?";
    botaoConfirma.style.display = "flex";
    weezer.play();
    imagem.src = "Weezer.jpg";
    imagem.alt = "Weezer";
    divImg.appendChild(imagem);
  }
}

function recompensa() {
  tiraImg();
  pontos = 0;
  titulo.innerHTML = "Aqui está seu prêmio!";
  pergunta.innerHTML = "Você receberá o jogo: Rift of the NecroDancer na steam 😎";
  botaoConfirma.innerHTML = "Jogar novamente?";
  botaoConfirma.style.display = "flex";
  imagem.src = "Rift.webp";
  imagem.alt = "Rift";
  divImg.appendChild(imagem);
}

botaoConfirma.addEventListener("click", () => {
  if (indexQuestaoAtual < perguntas.length) {
    proxima();
  } else if (indexQuestaoAtual == perguntas.length && pontos == perguntas.length) {
    recompensa();
  } else {
    comeco();
  }
})

comeco();
