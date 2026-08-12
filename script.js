function selecionarJornada(tipo) {
    const resultBox = document.getElementById('quiz-result');
    const titulo = document.getElementById('jornada-titulo');
    const texto = document.getElementById('result-text');

    if (!resultBox || !titulo || !texto) return;

    if (tipo === 'rotina') {
        titulo.innerText = "🌱 Jornada Respiro & Rotina";
        texto.innerText = "A sobrecarga constante não é um destino inevitável. O seu primeiro passo é reorganizar sua rotina sem culpa, estabelecendo limites saudáveis e criando pequenos momentos de alívio e autocuidado no seu dia a dia.";
    } else if (tipo === 'recomeco') {
        titulo.innerText = "🚀 Jornada Recomeço Profissional";
        texto.innerText = "Sua bagagem e experiências têm um valor enorme. O seu primeiro passo é resgatar suas competências, alinhar seus objetivos e estruturar uma estratégia clara para voltar ao mercado ou evoluir na sua carreira.";
    } else if (tipo === 'autonomia') {
        titulo.innerText = "✨ Jornada Autonomia & Propósito";
        texto.innerText = "A culpa e a dúvida sobre o equilíbrio entre maternidade e ambição pessoal são reais, mas você não precisa escolher entre uma coisa e outra. O seu primeiro passo é resgatar a sua identidade e construir projetos com leveza e clareza.";
    }

    // Exibe a caixa de resultado
    resultBox.style.display = 'block';

    // Rola suavemente até o resultado para que o usuário veja a resposta
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}