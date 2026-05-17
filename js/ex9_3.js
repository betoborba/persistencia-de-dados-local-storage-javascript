const frm = document.querySelector("form") //Obtém os elementos da página
const respLista = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    e.preventDefault()  // Evita o evnio do form

    const nome = frm.inNome.value // Conteúdo do campo nome
    const peso = Number(frm.inPeso.value) // Conteúdo do campo peso (em número)

    // Chama function que verifica se o peso já foi postado 

    if (verApostaExiste(peso)) {
        alert("alguém já apostou este peso, informe outro")
        frm.inPeso.focus
        return
    }

    if (localStorage.getItem("melanciaNome")) { // Se houver dados em localStorage
        // obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + nome

        localStorage.setItem("melanciaNome", melanciaNome) // Salva os dados
        localStorage.setItem("melanciaPeso", melanciaPeso)


    } else {   // Senão, é a primeira aposta 
        localStorage.setItem("melanciaNome", nome) // Salva os dados sem ";"
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas() // Chama function que mostra as appostas já salvas
    frm.reset() // Limpa o form
    frm.inNome.focus() // Joga o foco (cursor) no campo inNome

    const verApostaExiste = (peso) => {
        if (localStorage.getItem("melanciaPeso")) { // se existir dados em localStorage

            // Obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
            const pesos = localStorage.getItem("melanciaPeso").split(";")

            // O peso deve ser convertido em string, pois o vetor contém strings
            return pesos.includes(peso.toString())
        } else {
            return false
        }
    }

    const mostrarApostas = () => {
            // Se não há apostas armazenadas em localStorage
        if(!localStorage.getItem("melanciaNome")) {
            // Limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
        respLista.innerText = ""
        return
        } 

        // Obtém o conteúdo das variáveis salvas no localStorage, separando-as
        // em elementos de vetor a cada ocorrência do ";"

        const nomes = localStorage.getItem("melanciaNome").split(";")
        const pesos = localStorage.getItem("melanciaPeso").split(";")

        let linhas = " " // Irá acumular as linhas a serem exibidas 

        // Repetição para percorrer todos os elementos do vetor

        for (let i = 0; i < nome.length; i++) {
            // Concatena em linhas os nomes dos apostadores e suas apostas
            linha += nomes[i] + " - " + pesos[i] + "gr \n"
        }

        // Exibe as linhas (altera o conteúdo do elemento respLista)
        respLista.innerText = linhas

    }

    // Chama a function quando a página é carregada, para mostrar apostas salvas
    window.addEventListener("load", mostrarApostas)

})


