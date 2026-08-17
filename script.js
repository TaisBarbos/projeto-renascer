// Dados para as respostas do diagnóstico
const diagnoses = {
    exaustao: {
        title: "Você está no Ciclo do Incêndio",
        text: "Sua energia está sendo drenada pela urgência do agora. O primeiro passo aqui não é produzir mais, é aprender a pausar para sobreviver e depois prosperar."
    },
    recomeco: {
        title: "Você busca o seu Gatilho de Recomeço",
        text: "O desejo de crescer é a semente. Vamos trabalhar para traduzir o que você vive hoje em competências profissionais valorizadas pelo mercado."
    },
    culpa: {
        title: "Você está enfrentando o Tribunal da Culpa",
        text: "A culpa é o sinal de que você se importa. Vamos ressignificar isso, separando a mulher profissional da 'mãe perfeita' que não existe."
    }
};

// Função para mostrar o diagnóstico
function showDiagnosis(type) {
    const resultBox = document.getElementById('diagnosis-result');
    const title = document.getElementById('result-title');
    const text = document.getElementById('result-text');
    
    // Atualiza o texto com base no tipo escolhido
    title.innerText = diagnoses[type].title;
    text.innerText = diagnoses[type].text;
    
    // Remove a classe 'hidden' para mostrar a caixa
    resultBox.classList.remove('hidden');
    
    // Opcional: faz a página rolar suavemente até o resultado
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

// Função para capturar o formulário
function handleLeadSubmit(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const successMsg = document.getElementById('form-success');
    successMsg.classList.remove('hidden');
    
    // Esconde o formulário após sucesso
    event.target.style.display = 'none';
    
    console.log("Lead capturado!");
}