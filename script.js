/**
 * Lógica do Seletor de Jornada - Projeto Renascer
 * Exibe dinamicamente as orientações personalizadas no quiz.
 */
function selecionarJornada(tipo) {
    const resultadoDiv = document.getElementById('quiz-result');
    const tituloH3 = document.getElementById('jornada-titulo');
    const textoP = document.getElementById('result-text');

    const conteudos = {
        'rotina': {
            titulo: "🌱 Seu foco agora: Organização & Autocuidado",
            texto: "A sobrecarga consome sua energia. Nosso primeiro passo será mapear sua rotina para criar pequenos respiros diários, permitindo que você cuide de si sem carregar o peso do mundo sozinha."
        },
        'recomeco': {
            titulo: "🚀 Seu foco agora: Posicionamento & Oportunidades",
            texto: "O mercado mudou, mas você também mudou e ganhou novas habilidades valiosas. Vamos estruturar seu currículo, portfólio e rede de contatos para você voltar com confiança."
        },
        'autonomia': {
            titulo: "✨ Seu foco agora: Resgate de Identidade & Metas",
            texto: "A maternidade transforma, não apaga quem você é. Vamos identificar seus talentos, alinhar seus objetivos pessoais e traçar um plano de ação prático no seu próprio ritmo."
        }
    };

    if (conteudos[tipo]) {
        tituloH3.innerText = conteudos[tipo].titulo;
        textoP.innerText = conteudos[tipo].texto;
        
        resultadoDiv.style.display = 'block';
        resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}