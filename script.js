let ultimoRastro = 0; // Marca o tempo do último rastro gerado
const intervaloRastro = 40; // Define o intervalo de tempo entre as estrelas (em milissegundos)

document.body.addEventListener('mousemove', function(e) {
    // Verifica se o intervalo necessário passou
    let agora = Date.now();
    if (agora - ultimoRastro > intervaloRastro) {
        // Cria o rastro de estrela
        let rastro = document.createElement('div');
        rastro.classList.add('rastro-brilho');

        // Define a posição do rastro baseado na posição do cursor
        rastro.style.left = `${e.pageX - 10}px`; // Ajuste para o centro da estrela
        rastro.style.top = `${e.pageY - 10}px`;  // Ajuste para o centro da estrela

        // Adiciona o rastro na página
        document.body.appendChild(rastro);

        // Remove o rastro após a animação (1 segundo)
        setTimeout(function() {
            rastro.remove();
        }, 1000); // O tempo da animação é 1 segundo
        
        // Atualiza o tempo do último rastro
        ultimoRastro = agora;
    }
});
