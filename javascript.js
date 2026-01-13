// script.js
console.log("script.js carregado");
/document.body.classList.add("escuro")/ Garantir que o código só rode após a página carregar
window.onload = function() {
    const botao = document.getElementById('botao-tema'); // botão de alternância
    const body = document.body; // referência ao <body>

    // Função para aplicar o tema
    function trocarTema(tema) {
        if (tema === 'escuro') {
            body.classList.add('escuro'); // ativa modo escuro
            botao.innerHTML = '<i class="fa-solid fa-sun"></i>'; // ícone de sol
        } else {
            body.classList.remove('escuro'); // volta para modo claro
            botao.innerHTML = '<i class="fa-solid fa-moon"></i>'; // ícone de lua
        }
        // salvar preferência no navegador
        localStorage.setItem('tema', tema);
    }

    // Carregar o tema salvo ou padrão escuro
    let temaSalvo = localStorage.getItem('tema') || 'escuro';
    trocarTema(temaSalvo);

    // Alternar tema ao clicar no botão
    botao.onclick = function() {
        let temaAtual = body.classList.contains('escuro') ? 'claro' : 'escuro';
        trocarTema(temaAtual);
    };
};