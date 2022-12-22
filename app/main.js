let projetos = []

projetos.push(
    {link: 'https://github.com/claudio-germano/shoppingListApp', 
    imagem:'img/shop-list-app.png', 
    tag:'React',
    filtro: 'todos'
},
{
    link:'https://github.com/claudio-germano/Ghost', 
    imagem:'img/ghost-web.png', 
    tag: 'TailWind',
    filtro: 'todos'
}, 

{
    link:'https://github.com/claudio-germano/MoonMoonz-dev', 
    imagem:'img/moonz-dev.png', 
    tag: 'HTML',
    filtro: 'todos'
}, 

{
    link:'https://github.com/claudio-germano/send-txn-MM-script', 
    imagem:'img/send-txn-mm.png', 
    tag: 'JS',
    filtro: 'todos'
}, 
{
    link:'https://github.com/claudio-germano/connect-MM-script',
    imagem:'img/connect-mm.png',
    tag: 'JS',
    filtro: 'todos'
}, 
{
    link:'https://github.com/claudio-germano/JpegDealers', 
    imagem:'img/jpeg-dealers.png', 
    tag: 'JS',
    filtro: 'todos'
},
{
    link:'https://github.com/claudio-germano/teji_dev', 
    imagem:'img/teji-io.png', 
    tag: 'JS',
    filtro: 'todos'
},
{
    link:'https://github.com/claudio-germano/JinbeLinkSaverChromeExtension', 
    imagem:'img/jinbe-extensions.png', 
    tag: 'JS',
    filtro: 'todos'
},
{
    link:'https://github.com/claudio-germano/JinbeTnk-JBN', 
    imagem:'img/jinbe-tnk.png', 
    tag: 'JS',
    filtro: 'todos'
},

)

const divProjetos = document.getElementById('projetos')

exibirOsProjetos(projetos)

function exibirOsProjetos(projetos) {
    divProjetos.innerHTML = ''

    projetos.forEach(projetos => {
        divProjetos.innerHTML += `
            <a href="${projetos.link}" target="_blank"><img src="${projetos.imagem}" alt="Projeto"  class="projeto__imagem" value="${projetos.tag}"></a>
            `
    })
}

const botoes = document.querySelectorAll('.botao')

botoes.forEach(botoes => botoes.addEventListener('click', filtrarProjetos))

function filtrarProjetos() {
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value

    let projetosFiltrados = categoria == 'Todos' ? todos() : filtrarPorCategoria(categoria)

    exibirOsProjetos(projetosFiltrados)
}

function filtrarPorCategoria(categoria) {
return projetos.filter(projetos => projetos.tag == categoria)
}

function todos () {
    return projetos.filter(projetos => projetos.filtro == 'todos')
    }


