const inRadios = document.querySelectorAll("input") // Captura tags input da página
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
    const clubes = ["Brasil", "Barcelona", "Santos", "Corinthians"] // Vetor com a lista de clubes

    let selecao

    // Percorre os inRadios para verificar qual está selecionado 
    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i // se selecionado, armazena índice do radio selecionado
            break // e sai da repetição
        }
    }

    if (selecao <= 3) { // Se seleção for <= 3, então torce para algum clube
        dvTitulo.className = `row cores-${clubes[selecao]}` // Modifica a cor 

        // Muda a propriedade src com a imagem do clube selecionado
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imClube.className = "img-fluid" // Muda o estilo para exibir a imagem 
        imClube.alt = `Símbolo do ${clubes[selecao]}` // Texto alternativo

        localStorage.setItem("clube", clubes[selecao]) // Salva nome do clube

    } else { // else (selecionou "Nenhum")
        dvTitulo.className = "row" // Tira a classe de cor de divTitulo
        imClube.className = "d-none" // Oculta a imagem
        imClube.alt = "" // Limpa o texto alternativo de alt

        localStorage.removeItem("clube") // Remove a variável do local storage. 
    }
}

const verificarClube = () => {
    const clube = localStorage.getItem("clube") // Obtém o nome do clube

    if (clube == "Brasil") {
        inRadios[0].checked = true
    } else if (clube == "Barcelona") {
        inRadios[1].checked = true
    } else if (clube == "Santos") {
        inRadios[2].checked = true
    } else if (clube == "Corinthians") {
        inRadios[3].checked = true
    } else {
        inRadios[4].checked = true
    }

    trocarClube() // Chama a function que troca a imagem e cores
}

// Percorre os elementos para associar function ao evento change
for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube)
}

// Ao carregar a página, verifica se o cliente já selecionou o clube anteriormente
window.addEventListener("load", verificarClube)