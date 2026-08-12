/**
 * Lógica do Quiz Interativo - Projeto Renascer
 * Exibe dinamicamente a mensagem de acolhimento baseada na opção escolhida.
 */
function mostrarResultado(opcao) {
    const resultadoDiv = document.getElementById('quiz-result');
    const textoP = document.getElementById('result-text');
    
    // Mapeamento das mensagens por opção do quiz
    const mensagens = {
        1: "A sobrecarga consome nossa energia, mas você não precisa carregar o mundo inteiro sozinha. Existe um jeito de organizar a rotina abrindo espaço para você.",
        2: "O recomeço profissional pode parecer distante, mas suas habilidades anteriores e a força que você ganhou sendo mãe são uma combinação poderosa. Vamos estruturar isso juntas!",
        3: "A culpa materna é um peso injusto que colocaram sobre nós. O primeiro passo aqui é resgatar a sua identidade sem culpa."
    };

    // Atualiza o texto apenas se a opção existir
    if (mensagens[opcao]) {
        textoP.innerText = mensagens[opcao];
        
        // Exibe o card de resultado
        resultadoDiv.style.display = 'block';
        
        // Rola suavemente até o resultado para focar a atenção do usuário
        resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}