const frm = document.querySelector("form")
const inClube = document.querySelector("#imgClube") // Seleção da imagem no html 
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
    let clube // Variável que irá receber o nome do clube

    if (frm.rbBrasil.checked) { // Se o botão radio estiver em "checado"
        clube = "Brasil"
    } else if (frm.rbBarcelona.checked) {
        clube = "Barcelona"
    } else {
        clube = "Santos"
    }

    // Define as clases de divTitulo: row e cores do clube
    dvTitulo.className = `row cores -${clube}`

    // Modifica a imagem de acordo com a seleção do cliente
    imClube.src = `img/${clube.toLocaleLowerCase()}.png`
    imClube.className = "img-fluid" // Muda o estilo para exibir a imagem
    imClube.alt = `Símbolo do ${clube}` // Modifica o atributo alt 

    localStorage.setItem("clube, clube") // Salva no navegador a escolha do cliente
}

// Associa ao evento change de cada botão do form a função trocarClube através do "escuta"
frm.rbBrasil.addEventListenner("change", trocarClube)
frm.rbBarcelona.addEventListenner("change", trocarClube)
frm.rbSantos.addEventListenner("change", trocarClube)

const verificarClube = () => {
    if (localStorage.getItem ("clube")) { // Se já estiver salvo algum clube

        const clube = localStorage.getItem("clube") // Obtém o nome do clube 

    }

    if (clube == "Brasil") { // Conforme o clube, marca checked
        frm.rbBrasil.checked = true
    } else if (clube == "Barcelona") {
        frm.rbBarcelona.checked = true 
    } else {
        frm.rbSantos.checked = true
    }
    trocarClube() // Chama a function que troca imagem e cores 
}

// Ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)