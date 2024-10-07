const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os principais benefícios de uma dieta sem glúten?",
        alternativas: [
            {
                texto: "Melhora na saúde digestiva" ,
                afirmacao: "Para pessoas com doença celíaca ou sensibilidade ao glúten, eliminar o glúten da dieta pode levar a uma significativa melhora nos sintomas digestivosmação"
            },
            {
                texto: "Aumento da energia",
                afirmacao: "Algumas pessoas relatam sentir mais energia após adotarem uma dieta sem glúten."
            }
        ]
    },
    {
        enunciado: "A dieta sem glúten é adequada para todos?",
        alternativas: [
            {
                texto: "Não, é específica para quem tem intolerância",
                afirmacao: "A dieta sem glúten é especialmente benéfica para pessoas com doença celíaca ou sensibilidade ao glúten.",
            },
            {
                texto: "Pode ser benéfica para alguns, mas não é necessário",
                afirmacao: "Algumas pessoas podem optar por uma dieta sem glúten por questões de saúde ou preferências pessoais, como uma sensação de bem-estar geral.",
            }
        ]
    },
    {
        enunciado: "Quais são os desafios de seguir uma dieta sem glúten?",
        alternativas: [
            {
                texto: " Dificuldade em encontrar opções adequadas ",
                afirmacao: " Embora a oferta de alimentos sem glúten tenha aumentado, ainda pode ser desafiador encontrar opções em restaurantes ou supermercados. "
            },
            {
                texto: "Risco de uma dieta não equilibrada ",
                afirmacao: "Pessoas que seguem uma dieta sem glúten podem, inadvertidamente, acabar consumindo menos fibras e nutrientes"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
