/**
 * Lógica do Quiz Interativo
 * Exibe dinamicamente a mensagem de acolhimento baseada na opção escolhida pela usuária.
 */
function mostrarResultado(opcao) {
    const resultadoDiv = document.getElementById('quiz-result');
    const textoP = document.getElementById('result-text');
    
    let mensagem = "";
    
    if (opcao === 1) {
        mensagem = "A sobrecarga consome nossa energia, mas você não precisa carregar o mundo inteiro sozinha. Existe um jeito de organizar a rotina abrindo espaço para você.";
    } else if (opcao === 2) {
        mensagem = "O recomeço profissional pode parecer distante, mas suas habilidades anteriores e a força que você ganhou sendo mãe são uma combinação poderosa. Vamos estruturar isso juntas!";
    } else if (opcao === 3) {
        mensagem = "A culpa materna é um peso injusto que colocaram sobre nós. O primeiro passo aqui é resgatar a sua identidade sem culpa.";
    }

    textoP.innerText = mensagem;
    resultadoDiv.style.display = 'block';
    
    // Efeito suave de rolagem até o resultado aparecer na tela do usuário
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}