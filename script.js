function handleLeadSubmit(event) {
    event.preventDefault(); // Evita o recarregamento da página
    
    // Pega os valores digitados nos inputs
    const inputs = document.querySelectorAll('.lead-form input');
    const nome = inputs[0].value;
    const whatsapp = inputs[1].value;
    
    // Pega o título do diagnóstico que ela selecionou
    const focoAtual = document.getElementById('result-title').textContent;

    // Número do seu WhatsApp (coloque o seu DDD e número aqui, ex: 5575999999999)
    const meuNumeroWhatsApp = "5575999999999"; 

    // Cria a mensagem personalizada
    const mensagem = `Olá! Meu nome é ${nome}, meu WhatsApp é ${whatsapp}. Fiz o teste no Projeto Renascer e ${focoAtual}. Quero dar esse passo com apoio!`;
    
    // Codifica a mensagem para o formato de link do WhatsApp
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${meuNumeroWhatsApp}&text=${mensagemCodificada}`;

    // Mostra a mensagem de sucesso na tela e abre o WhatsApp em seguida
    const form = document.querySelector('.lead-form');
    const successMsg = document.getElementById('form-success');

    form.classList.add('hidden');
    successMsg.classList.remove('hidden');

    // Abre o WhatsApp após 1.5 segundos para dar tempo de ver a tela de sucesso
    setTimeout(() => {
        window.open(urlWhatsApp, '_blank');
    }, 1500);
}