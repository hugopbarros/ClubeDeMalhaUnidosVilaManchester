/*
const inputP2 = document.getElementById('p2');
const placeholderOriginal = "Click aqui";

// 1. Lógica de Focus/Blur (faz o placeholder sumir ao clicar)
inputP2.addEventListener('focus', function () {
    inputP2.placeholder = '';
});

inputP2.addEventListener('blur', function () {
    if (inputP2.value.trim() === '') {
        inputP2.placeholder = placeholderOriginal;
    }
});

// 2. LÓGICA DE REDIRECIONAMENTO AO CLICAR
inputP2.addEventListener('click', function () {
    // Redireciona para o álbum de fotos
    // Se o seu álbum for uma seção na mesma página (o Lightbox), use o ID:
    window.location.href = '/index/federação.html';
       // Se for uma página separada (ex: album.html), use o caminho do arquivo:
    // window.location.href = 'album.html'; 

    // Opcional: Se quiser que o clique também abra o primeiro modal:
    // window.location.href = '#foto1'; 
});
function atualizarDataHora() {
    // 1. Cria um novo objeto Date, que contém a data e hora atual do sistema
    const agora = new Date();

    // 2. Formata a data e hora desejada
    // Exemplo de formato: "23/11/2025 22:41:16"

    // Obter componentes (adiciona '0' se for menor que 10)
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Mês é base 0
    const ano = agora.getFullYear();

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

    // Verifique se o elemento foi encontrado antes de tentar mudar o texto
    // 3. Insere a data formatada no elemento HTML
    document.getElementById('data-atual').textContent = dataFormatada;
}

// Chama a função imediatamente para exibir a data logo que a página carrega
atualizarDataHora();

// Chama a função a cada 1000 milissegundos (1 segundo) para atualizar a hora
setInterval(atualizarDataHora, 1000);

*/

// =================================================================
// CÓDIGO GERAL: Lógica de P2 e Relógio
// =================================================================

const inputP2 = document.getElementById('p2');
const placeholderOriginal = "Click aqui";

// Lógica de Focus/Blur e Redirecionamento para #p2
if (inputP2) {
    // 1. Lógica de Focus/Blur (faz o placeholder sumir ao clicar)
    inputP2.addEventListener('focus', function () {
        inputP2.placeholder = '';
    });

    inputP2.addEventListener('blur', function () {
        if (inputP2.value.trim() === '') {
            inputP2.placeholder = placeholderOriginal;
        }
    });

    // 2. LÓGICA DE REDIRECIONAMENTO AO CLICAR
    inputP2.addEventListener('click', function () {
        window.location.href = '/index/federação.html';
    });
}


// Lógica do Relógio (Data e Hora)
function atualizarDataHora() {
    const agora = new Date();

    // Formatação da Data e Hora (dd/mm/aaaa hh:mm:ss)
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Mês é base 0
    const ano = agora.getFullYear();

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

    // Insere a data formatada no elemento HTML com ID 'data-atual'
    const elementoData = document.getElementById('data-atual');
    if (elementoData) {
        elementoData.textContent = dataFormatada;
    }
}

// Inicializa o relógio e define a atualização a cada segundo
atualizarDataHora();
setInterval(atualizarDataHora, 1000);


// =================================================================
// NOVA LÓGICA: Envio do Formulário de Contato (AJAX/FETCH)
// =================================================================

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');
    
    // Verifica se o formulário de contato existe
    if (contactForm) {
        // Intercepta o evento de submissão do formulário
        contactForm.addEventListener('submit', function (event) {
            // 1. Impede o envio padrão do formulário (que recarregaria a página)
            event.preventDefault(); 

            // 2. Coleta os dados do formulário
            const formData = new FormData(contactForm);
            
            // 3. DEFINE O ENDPOINT
            // SUBSTITUA ESTA URL PELA SUA URL REAL DO FORMSPREE OU SERVIÇO DE BACKEND!
            const endpoint = 'https://formspree.io/f/xrbnogbn'; 

            // 4. Envia os dados usando Fetch API
            fetch(endpoint, {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                // Se a resposta for OK (sucesso)
                if (response.ok) {
                    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
                    contactForm.reset(); // Limpa os campos após o envio
                } else {
                    // Se houver erro no lado do servidor ou serviço
                    alert('Houve um problema ao enviar a mensagem. Por favor, tente novamente.');
                    // Opcional: Logar o status do erro no console
                    console.error('Erro no servidor:', response.status);
                }
            })
            .catch(error => {
                // Se houver erro de rede (conexão)
                alert('Erro de conexão. Verifique sua rede e tente novamente.');
                console.error('Erro de Fetch:', error);
            });
        });
    }
});