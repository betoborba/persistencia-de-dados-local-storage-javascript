const frm = document.querySelector("form") //Obtém os elementos da página
const respLista = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    e.preventDefault()  // Evita o evnio do form

    const nome = frm.inNome.value // Conteúdo do campo nome
    const peso = Number(frm.inPeso.value) // Conteúdo do campo peso (em número)

    // Chama function que verifica se o peso já foi postado 

    if (verApostaExiste(peso)) {
        alert("alguém já apostou este peso, informe outro")
        frm.inPeso.focus()
        return
    }

    if (localStorage.getItem("melanciaNome")) { // Se houver dados em localStorage
        // obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso

        localStorage.setItem("melanciaNome", melanciaNome) // Salva os dados
        localStorage.setItem("melanciaPeso", melanciaPeso)


    } else {   // Senão, é a primeira aposta 
        localStorage.setItem("melanciaNome", nome) // Salva os dados sem ";"
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas() // Chama function que mostra as apostas já salvas
    frm.reset() // Limpa o form
    frm.inNome.focus() // Joga o foco (cursor) no campo inNome
})


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

    let linhas = "" // Irá acumular as linhas a serem exibidas 

    // Repetição para percorrer todos os elementos do vetor

    for (let i = 0; i < nomes.length; i++) {
        // Concatena em linhas os nomes dos apostadores e suas apostas
        linhas += nomes[i] + " - " + pesos[i] + "gr \n"
    }

    // Exibe as linhas (altera o conteúdo do elemento respLista)
    respLista.innerText = linhas
}


    // Chama a function quando a página é carregada, para mostrar apostas salvas
window.addEventListener("load", mostrarApostas)

frm.btVencedor.addEventListener("click", () => {
    // Se não houver apostas armazenadas em localStorage
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas")
        return // retorna (não executa os comandos abaixo)
    }

    // Solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual é o peso correto da melancia?"))

    // Se não informou o peso, retorna
    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return
    }
        
    // Obtém os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    // Valor inicial para vencedor é o da primeira aposta
    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])

    // Percorre as apostas
    for (let i = 1; i < nomes.length; i++) {

        // Calcula a diferença de peso do "vencedor" e da aposta atual
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)

        // Se a diferença da aposta atual (no for) for menor que a do "vencedor"
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i] // Troca o "vencedor"
            vencedorPeso = Number(pesos[i]) // Para este elemento
        }
    }

    // Monta mensagem com dados do vencendor
    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr"
    mensagem += "\n-----------------------------------------------"
    mensagem += "\nVencedor: " + vencedorNome
    mensagem += "\nAposta: " + vencedorPeso + "gr"
    alert(mensagem)
})

frm.btLimpar.addEventListener("click", () => {
    // Solicita confirmação para excluir apostas
    if (confirm("Confirma a exclusão de todas as apostas?")) {
        localStorage.removeItem("melanciaNome") // Remove as variáveis salvas
        localStorage.removeItem("melanciaPeso") // em local storage
        mostrarApostas()                       // Exibe a listagem vazia 
    }
})


