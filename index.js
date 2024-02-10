const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      respostas: [
        "Manipular elementos HTML",
        "Estilizar páginas web",
        "Programar microcontroladores"
      ],
      correta: 0
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "variable",
        "var",
        "let"
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Um tipo de dado que armazena múltiplos valores",
        "Um objeto"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Um framework popular",
        "Uma linguagem de programação",
        "Uma representação estruturada de documentos HTML"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "log()",
        "print.console()"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Um operador lógico"
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura condicional em JavaScript?",
      respostas: [
        "if-else",
        "switch-case",
        "conditional-if"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é utilizado para verificar a igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "O que é o escopo em JavaScript?",
      respostas: [
        "A área de trabalho do programador",
        "A área do código onde uma variável pode ser acessada",
        "O tamanho da fonte no código"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de dados que representa objetos",
        "Um tipo de variável"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
  
        corretas.delete(item) 
        if(estaCorreta) {
          corretas.add(item) 
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        
        /*document.querySelector('dl dt').item.respostas.checked = true.disabled = true;*/
      }
  
      quizItem.querySelector('dl').appendChild(dt)
      
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }
  
  const refreshButton = document.querySelector('.refresh-button');
  const refreshPage = () => {
    location.reload();
  }
  refreshButton.addEventListener('click', refreshPage)