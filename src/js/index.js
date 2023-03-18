/*OBJETIVO - quando clicarmos nos botão temos que mostrar a imagem de fundo
- passo 1- pegar o elementos no html dos boto~es
- passo 2 - identificar o clique do usuário no botão
- passo 3 - desmarcar o botão selecionado anterior
- passo 4 - marcar o botão clicando como se estivesse selecionado
- passo 5 - esocnder a imagem anterior
- passo 6 - fazer aparecer a imagem correspondente ao botão selecionado/clicado
*/

const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagens')
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        
        imagens[indice].classList.add('ativa');
    })
})