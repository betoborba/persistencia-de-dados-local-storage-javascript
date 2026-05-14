const inRadios = document.querySelectorAll("input")
const imSigno = document.querySelector("#imgSigno")
const dvTitulo = document.querySelector("#divTitulo")
const outNome = document.querySelector("#outNome")
const outElemento = document.querySelector("#outElemento")
const outCombina = document.querySelector("#outCombina")
const outCaracteristicas = document.querySelector("#outCaracteristicas")
const outPeriodo = document.querySelector("#outPeriodo")


const infoSignos = { // Declara as informaçãoes do signos para exibir no HTML 
    "Áries": {
        elemento: "Fogo",
        combina: "Leão, Sagitário e Libra",
        caracteristicas: "Corajoso, impulsivo, direto, competitivo e cheio de energia.",
        periodo: "21 de março a 19 de abril"
    },

    "Touro": {
        elemento: "Terra",
        combina: "Virgem, Capricórnio e Escorpião",
        caracteristicas: "Paciente, leal, determinado, estável e ligado ao conforto.",
        periodo: "20 de abril a 20 de maio"
    },

    "Gêmeos": {
        elemento: "Ar",
        combina: "Libra, Aquário e Sagitário",
        caracteristicas: "Comunicativo, curioso, versátil, inteligente e sociável.",
        periodo: "21 de maio a 20 de junho"
    },

    "Câncer": {
        elemento: "Água",
        combina: "Escorpião, Peixes e Capricórnio",
        caracteristicas: "Sensível, protetor, intuitivo, emocional e ligado à família.",
        periodo: "21 de junho a 22 de julho"
    },

    "Leão": {
        elemento: "Fogo",
        combina: "Áries, Sagitário e Aquário",
        caracteristicas: "Criativo, confiante, generoso, vaidoso e carismático.",
        periodo: "23 de julho a 22 de agosto"
    },

    "Virgem": {
        elemento: "Terra",
        combina: "Touro, Capricórnio e Peixes",
        caracteristicas: "Organizado, analítico, cuidadoso, prático e observador.",
        periodo: "23 de agosto a 22 de setembro"
    },

    "Libra": {
        elemento: "Ar",
        combina: "Gêmeos, Aquário e Áries",
        caracteristicas: "Diplomático, equilibrado, sociável, elegante e justo.",
        periodo: "23 de setembro a 22 de outubro"
    },

    "Escorpião": {
        elemento: "Água",
        combina: "Câncer, Peixes e Touro",
        caracteristicas: "Intenso, misterioso, determinado, profundo e observador.",
        periodo: "23 de outubro a 21 de novembro"
    },

    "Sagitário": {
        elemento: "Fogo",
        combina: "Áries, Leão e Gêmeos",
        caracteristicas: "Aventureiro, otimista, sincero, livre e expansivo.",
        periodo: "22 de novembro a 21 de dezembro"
    },

    "Capricórnio": {
        elemento: "Terra",
        combina: "Touro, Virgem e Câncer",
        caracteristicas: "Disciplinado, responsável, ambicioso, persistente e prático.",
        periodo: "22 de dezembro a 19 de janeiro"
    },

    "Aquário": {
        elemento: "Ar",
        combina: "Gêmeos, Libra e Leão",
        caracteristicas: "Original, independente, criativo, racional e inovador.",
        periodo: "20 de janeiro a 18 de fevereiro"
    },

    "Peixes": {
        elemento: "Água",
        combina: "Câncer, Escorpião e Virgem",
        caracteristicas: "Sensível, sonhador, intuitivo, empático e imaginativo.",
        periodo: "19 de fevereiro a 20 de março"
    }
}

// Função para chamar a escolha e vetor com as infos. 
const trocarSigno = () => { 
    const signos = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"]

    let selecao // Seleciona 

    // Percorre os inRadios para verificar qual está selecionado
    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i // se selecionado, armazena índice do rádio selecionado
            break // Sai da repetição 
        }
    }

    if (selecao <= 11 ) { // Se a seleção for <= 11, está dentro da lista de signos
        dvTitulo.className = `row cores-${signos[selecao]}` // Modifica a cor
   
        // Muda a propriedade src com a imagem do signo selecionado

        imSigno.src = `img/${signos[selecao].toLowerCase()}.png`
        imSigno.className = "img-fluid" // Muda o estilo para exibir a imagem
        imSigno.alt = `Símbolo do ${signos[selecao]}` // Texto alternativo 

        localStorage.setItem("signo", signos[selecao]) // Salva o signo
        
        // Busca as informações do signo selecionado
        const signoSelecionado = signos[selecao]
        const dados = infoSignos[signoSelecionado]


        //Exibe as informações no HTML 
        outNome.innerText = `Signo: ${signoSelecionado}`
        outElemento.innerText = `Elemento: ${dados.elemento}`
        outCombina.innerText = `Combina com: ${dados.combina}`
        outCaracteristicas.innerText = `Caracteristicas: ${dados.caracteristicas}`
        outPeriodo.innerText = `Nascidos entre: ${dados.periodo}`

    } else { // else (selecionou "Nenhum")
        dvTitulo.className = "row" // Tira a classe da cor do divTitulo
        imSigno.className = "d-none" // Oculta a imagem
        imSigno.alt = "" // Limpa o texto alternativo alt

        localStorage.removeItem("signo")
        
        

        // Limpa as informações do HTML
        outNome.innerText = ""
        outElemento.innerText = ""
        outCombina.innerText = ""
        outCaracteristicas.innerText = ""
        outPeriodo.innerText = ""

        
    }
}


for (const radio of inRadios) {
        radio.addEventListener("change", trocarSigno)
    }
        
    const signoSalvo = localStorage.getItem("signo")

    // Recupera o signo salvo quando a página abrir
    if (localStorage.getItem("signo")) {

        for (let i = 0; i < inRadios.length; i++) {
            if (inRadios[i].value === signoSalvo) {
                inRadios[i].checked = true
                trocarSigno()
                break
        }
    }

}
        


 