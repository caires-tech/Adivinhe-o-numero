let computerNumber          // Declara a variável que vai guardar o número secreto gerado pelo computador
let userNumbers = []        // Array que vai armazenar todos os palpites do usuário
let attempts = 0            // Contador de tentativas iniciando em 1 pois a primeira tentativa já deve ser contada.
let maxguesses = 10         // Número máximo de tentativas permitidas

function newGame() {        // Função chamada quando o usuário clica em "NEW GAME"
    window.location.reload()  // Recarrega a página inteira para reiniciar o jogo
}

function init() {           // Função chamada automaticamente quando a página carrega (body onload)
   computerNumber = Math.floor(Math.random() * 100 + 1)  
                            // Gera um número aleatório entre 1 e 100 e salva em computerNumber
   console.log(computerNumber)  // Mostra o número secreto no console (útil para testar)
   document.getElementById('maxAttemptsText').innerHTML = 'Máximo de tentativas: ' + maxguesses // Escreve na tela o número máximo de tentativas usando a variável
}

function compareNumbers() {  
    // Pega o número digitado pelo usuário no input e transforma em Number
    const userNumber = Number(document.getElementById('inputBox').value)

    // Adiciona o palpite do usuário ao array (com espaço para ficar visualmente separado)
    userNumbers.push(' ' + userNumber)

    // Atualiza a lista de palpites exibida na tela
    document.getElementById('guesses').innerHTML = userNumbers

    // --------------------------------------------------------------------
    // 1) PRIMEIRO: verifica se o usuário ACERTOU o número
    // --------------------------------------------------------------------
    if (userNumber === computerNumber) {
        attempts++  // incrementa tentativas
        document.getElementById('attempts').innerHTML = attempts // mostra na tela

        document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            // trava o campo de digitação porque o jogo acabou

        return  // encerra a função, não precisa checar mais nada
    }

    // --------------------------------------------------------------------
    // 2) Se NÃO acertou, incrementa o número de tentativas
    // --------------------------------------------------------------------
    attempts++
    document.getElementById('attempts').innerHTML = attempts

    // --------------------------------------------------------------------
    // 3) Depois de incrementar, verifica se o jogador EXCEDEU o limite
    // --------------------------------------------------------------------
    if (attempts >= maxguesses) {
        // Se o jogador usou todas as tentativas -> perdeu
        document.getElementById('textOutput').innerHTML =
            'You Lose! The computer number was ' + computerNumber
        
        // Trava o campo de entrada
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')

        return // encerra a função aqui
    }

    // --------------------------------------------------------------------
    // 4) Se ainda tem tentativas, dá uma dica (alto ou baixo)
    // --------------------------------------------------------------------
    if (userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is too high'
    } else {
        document.getElementById('textOutput').innerHTML = 'Your number is too low'
    }

    // Limpa o campo para digitar o próximo palpite
    document.getElementById('inputBox').value = ''
}

