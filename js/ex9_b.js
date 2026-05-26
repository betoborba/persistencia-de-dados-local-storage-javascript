const frm = document.querySelector("form") // Obtém os elementos do form
const respLista = document.querySelector("pre")


frm.addEventListener("submit", (e) => { // "Escuta" o evento submit do form
    e.preventDefault() // Evita o envio do form 

    const nome = frm.inNome.value // Declara o conteúdo do campo nome 
    const preco = Number(frm.inPreco.value) // Declara o conteúdo do imput preço 

    // Chama a funcao que verifica se já existe na lista 
    if (verListaExiste(nome)) {
        alert("Produto existente na lista, informe outro")
        frm.inNome.focus()
        return
    }
    // Se houver dados no localStorage
    if (localStorage.getItem("produtoNome")) {

        // Obtém o conteúdo digitiado e acrescenta "-" + valor do item
        const produtoNome  = localStorage.getItem("produtoNome") + "-" + nome
        const produtoPreco = localStorage.getItem("produtoPreco") + "-" + preco

        // Salva os dados no localStorage do cliente 
        localStorage.setItem("produtoNome", produtoNome)  
        localStorage.setItem("produtoPreco", produtoPreco)

    } else { // Senão, é a o primeiro item // Salva os dados sem "-"
        localStorage.setItem("produtoNome", nome)  
        localStorage.setItem("produtoPreco", preco)
    }
       // Chamada de funções 
    mostrarLista() // Chama a function que mostra as listas já salvas
    frm.reset()    // Limpa o formulário
    frm.inNome.focus() // Joga o foco (cursor) no campo inNome

})

const verListaExiste = (nome) => {
    if (localStorage.getItem("produtoNome")) { // Se existir dados no LocalStorage

        // Obtém o conteúdo é a string é dividida em item de vetor a cada "-"
        const nomes = localStorage.getItem("produtoNome").split("-")

        // Verifica se o nome informado já existe na lista
        return nomes.includes(nome)

    } else {
        return false
    }
}

const mostrarLista = () => {
    // Se não há itens armazenados em localStorage
    if (!localStorage.getItem("produtoNome")) {
        // Limpa o espaço de exibição da lista quando "limpar"
    respLista.innerText = ""
    return
    }

    // Obtém o conteúdo das variáveis salvas no localStorage, separando-as
    // em elementos de vetor a cada ocorrência do "-"
    const nomes = localStorage.getItem("produtoNome").split("-")
    const precos = localStorage.getItem("produtoPreco").split("-")

    // Cria um array de objetos para manter nome e preço juntos
    const produtos = []

    // Repetição laço para percorrer todos os elementos do vetor

    for (let i = 0; i < nomes.length; i++) {
        produtos.push({
            nome: nomes[i], preco: Number(precos[i])
        })
    }

    produtos.sort((a, b) => a.nome.localeCompare(b.nome))

    let linhas = "" // Irá acumular as linhas para serem exibidas 

    // Percorre todos os elementos do vetor já ordenado
    for (let i = 0; i < produtos.length; i++) {
        linhas += produtos[i].nome + " -- R$ " + produtos[i].preco.toFixed(2) + "\n"
    }
    // Exibe as linhas (altera o conteúdo do elemento respLista)
    respLista.innerText = linhas
}

// Chama a function quando a página é carregada, para mostrar a lista 
window.addEventListener("load", mostrarLista)

frm.btLista.addEventListener("click", () => {
    // Se não houver itens  na lista em localStorage
    if(!localStorage.getItem("produtoNome")) {
        alert("não há itens na lista")
        return 
    }

    mostrarLista()
})

frm.btLimpar.addEventListener("click", () => {
    // Solicita a confirmação para excluir os itens
    if(confirm("Confima a exclusão de todos os itens?")) {
        localStorage.removeItem("produtoNome") // Remove as variáveis salvas
        localStorage.removeItem("produtoPreco")
        mostrarLista()
    }
})