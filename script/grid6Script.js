/// Array que contém os dados de todas as suas fotos
// Apenas altere este Array para adicionar ou remover fotos.
// VARIÁVEIS DE CAMINHO DEFINIDAS AQUI! 📸
// ****************************************
const CAMINHO_BASE_FOTOS = "Grid6/";
const CAMINHO_MINIATURAS = CAMINHO_BASE_FOTOS + "miniaturas/";
const CAMINHO_GRANDES = CAMINHO_BASE_FOTOS + "grandes/";
// ****************************************


const dadosDasFotos = [
    { id: 'foto1', alt: 'Paisagem Urbana',nomeArquivo: 'foto1' },
    { id: 'foto2', alt: 'Detalhe da Natureza', nomeArquivo: 'foto2' },
    { id: 'foto3', alt: 'Retrato Antigo', nomeArquivo: 'foto3' },
    { id: 'foto4', alt: 'Arquitetura Moderna', nomeArquivo: 'foto4' },
    { id: 'foto5', alt: 'Pôr do Sol', nomeArquivo: 'foto5' },
    { id: 'foto6', alt: 'Paisagem Urbana',nomeArquivo: 'foto6' },
    { id: 'foto7', alt: 'Detalhe da Natureza', nomeArquivo: 'foto7' },
    { id: 'foto8', alt: 'Retrato Antigo', nomeArquivo: 'foto8' },
    { id: 'foto9', alt: 'Arquitetura Moderna', nomeArquivo: 'foto9' },
    { id: 'foto10', alt: 'Pôr do Sol', nomeArquivo: 'foto10' },
    { id: 'foto11', alt: 'Paisagem Urbana',nomeArquivo: 'foto11' },
    { id: 'foto12', alt: 'Detalhe da Natureza', nomeArquivo: 'foto12' },
    { id: 'foto13', alt: 'Retrato Antigo', nomeArquivo: 'foto13' },
    { id: 'foto14', alt: 'Arquitetura Moderna', nomeArquivo: 'foto14' },
    { id: 'foto15', alt: 'Pôr do Sol', nomeArquivo: 'foto15' },
    { id: 'foto16', alt: 'Paisagem Urbana',nomeArquivo: 'foto16' },
    { id: 'foto17', alt: 'Detalhe da Natureza', nomeArquivo: 'foto17' },
    { id: 'foto18', alt: 'Retrato Antigo', nomeArquivo: 'foto18' },
    { id: 'foto19', alt: 'Arquitetura Moderna', nomeArquivo: 'foto19' },
    { id: 'foto20', alt: 'Pôr do Sol', nomeArquivo: 'foto20' },
    { id: 'foto21', alt: 'Paisagem Urbana',nomeArquivo: 'foto21' },
    { id: 'foto22', alt: 'Detalhe da Natureza', nomeArquivo: 'foto22' },
    { id: 'foto23', alt: 'Retrato Antigo', nomeArquivo: 'foto23' },
    { id: 'foto24', alt: 'Arquitetura Moderna', nomeArquivo: 'foto24' },
    { id: 'foto25', alt: 'Pôr do Sol', nomeArquivo: 'foto25' },
    { id: 'foto26', alt: 'Paisagem Urbana',nomeArquivo: 'foto26' },
    { id: 'foto27', alt: 'Detalhe da Natureza', nomeArquivo: 'foto27' },
    { id: 'foto28', alt: 'Paisagem Urbana',nomeArquivo: 'foto1' },
    { id: 'foto29', alt: 'Detalhe da Natureza', nomeArquivo: 'foto2' },
    { id: 'foto30', alt: 'Retrato Antigo', nomeArquivo: 'foto3' },
    { id: 'foto31', alt: 'Arquitetura Moderna', nomeArquivo: 'foto4' },
    { id: 'foto32', alt: 'Pôr do Sol', nomeArquivo: 'foto5' },
    { id: 'foto33', alt: 'Paisagem Urbana',nomeArquivo: 'foto6' },
    { id: 'foto34', alt: 'Detalhe da Natureza', nomeArquivo: 'foto7' },
    { id: 'foto35', alt: 'Retrato Antigo', nomeArquivo: 'foto8' },
    { id: 'foto36', alt: 'Arquitetura Moderna', nomeArquivo: 'foto9' },
    { id: 'foto37', alt: 'Pôr do Sol', nomeArquivo: 'foto10' },
    { id: 'foto38', alt: 'Paisagem Urbana',nomeArquivo: 'foto11' },
    { id: 'foto39', alt: 'Detalhe da Natureza', nomeArquivo: 'foto12' },
    { id: 'foto40', alt: 'Retrato Antigo', nomeArquivo: 'foto13' },
    { id: 'foto41', alt: 'Arquitetura Moderna', nomeArquivo: 'foto14' },
    { id: 'foto42', alt: 'Pôr do Sol', nomeArquivo: 'foto15' },
    { id: 'foto43', alt: 'Paisagem Urbana',nomeArquivo: 'foto16' },
    { id: 'foto44', alt: 'Detalhe da Natureza', nomeArquivo: 'foto17' },
    { id: 'foto45', alt: 'Retrato Antigo', nomeArquivo: 'foto18' },
    { id: 'foto46', alt: 'Arquitetura Moderna', nomeArquivo: 'foto19' },
    { id: 'foto47', alt: 'Pôr do Sol', nomeArquivo: 'foto20' },
    { id: 'foto48', alt: 'Paisagem Urbana',nomeArquivo: 'foto21' },
    { id: 'foto49', alt: 'Detalhe da Natureza', nomeArquivo: 'foto22' },
    { id: 'foto50', alt: 'Retrato Antigo', nomeArquivo: 'foto23' },
    { id: 'foto51', alt: 'Arquitetura Moderna', nomeArquivo: 'foto24' },
    { id: 'foto52', alt: 'Pôr do Sol', nomeArquivo: 'foto25' },
    { id: 'foto53', alt: 'Paisagem Urbana',nomeArquivo: 'foto26' },
    { id: 'foto54', alt: 'Detalhe da Natureza', nomeArquivo: 'foto27' },
    { id: 'foto55', alt: 'Paisagem Urbana',nomeArquivo: 'foto1' },
    { id: 'foto56', alt: 'Detalhe da Natureza', nomeArquivo: 'foto2' },
    { id: 'foto57', alt: 'Retrato Antigo', nomeArquivo: 'foto3' },
    { id: 'foto58', alt: 'Arquitetura Moderna', nomeArquivo: 'foto4' },
    { id: 'foto59', alt: 'Pôr do Sol', nomeArquivo: 'foto5' },
    { id: 'foto60', alt: 'Paisagem Urbana',nomeArquivo: 'foto6' },
    { id: 'foto61', alt: 'Detalhe da Natureza', nomeArquivo: 'foto7' },
    { id: 'foto62', alt: 'Retrato Antigo', nomeArquivo: 'foto8' },
    { id: 'foto63', alt: 'Arquitetura Moderna', nomeArquivo: 'foto9' },
    { id: 'foto64', alt: 'Pôr do Sol', nomeArquivo: 'foto10' },
    { id: 'foto65', alt: 'Paisagem Urbana',nomeArquivo: 'foto11' },
    { id: 'foto66', alt: 'Detalhe da Natureza', nomeArquivo: 'foto12' },
    { id: 'foto67', alt: 'Retrato Antigo', nomeArquivo: 'foto13' },
    { id: 'foto68', alt: 'Arquitetura Moderna', nomeArquivo: 'foto14' },
    { id: 'foto69', alt: 'Pôr do Sol', nomeArquivo: 'foto15' },
    { id: 'foto70', alt: 'Paisagem Urbana',nomeArquivo: 'foto16' },
    { id: 'foto71', alt: 'Detalhe da Natureza', nomeArquivo: 'foto17' },
    { id: 'foto72', alt: 'Retrato Antigo', nomeArquivo: 'foto18' },
    { id: 'foto73', alt: 'Arquitetura Moderna', nomeArquivo: 'foto19' },
    // Adicione mais fotos aqui...
];

// Referências aos contêineres HTML
const galeriaContainer = document.getElementById('galeria-miniaturas');
const modaisContainer = document.getElementById('modais-container');

// Variáveis para armazenar o HTML gerado
let htmlMiniaturas = '';
let htmlModais = '';

// Loop sobre cada item no Array para construir o HTML
dadosDasFotos.forEach(foto => {
    // 1. Gerando o HTML da Miniatura
    htmlMiniaturas += `
        <a href="#${foto.id}" class="miniatura">
            <img src="${CAMINHO_MINIATURAS}${foto.nomeArquivo}_mini.jpeg" alt="${foto.alt}">
        </a>
    `;

    // 2. Gerando o HTML do Modal/Lightbox
    htmlModais += `
        <div id="${foto.id}" class="modal-lightbox">
            <a href="#" class="fechar-lightbox" aria-label="Fechar">&times;</a>
            <img src="${CAMINHO_GRANDES}${foto.nomeArquivo}_grande.jpeg" alt="${foto.alt}">
        </div>
    `;
});

// 3. Injetando o HTML nos contêineres após o loop
galeriaContainer.innerHTML = htmlMiniaturas;
modaisContainer.innerHTML = htmlModais;

console.log(`Galeria gerada com sucesso! Total de ${dadosDasFotos.length} fotos.`);