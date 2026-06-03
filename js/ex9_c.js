const frm = document.querySelector("form") // Obtém os elementos da página a serem manipulados
const respLista = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio do form

    const servico = frm.inServico.value // Obtém o valor do form


    // Chama a função que verifica se já foi postado
    if  (verListaExiste(servico)) {
        alert("Serviço já existente, informe outro")
        frm.inServico.focus()
        return
    }
    // Se houver dados no localStorage  f
    if (localStorage.getItem("descrServico")) {

        //Obtém o conteúdo digitado e acrescenta "-"
        const descrServico = localStorage.getItem("descrServico") + "-" + servico

        // Salva os dados no localStorage do cliente
        localStorage.setItem("descrServico", descrServico)

    } else { // Senão, é o primeiro item // salva os daos 
        localStorage.setItem("descrServico", servico)
    }

    // Chamada das funções

    mostrarLista() // Chama a function que mostra as listas já salvas
    frm.reset()     // Limpa o formulário       
    frm.inServico.focus() // Joga o foco (cursor) no campo inServico

})


const verListaExiste = (servico) => {
    if(localStorage.getItem("descrServico")) { // Se existir dados no localStorage

        // Obtém o conteúdo 
        const descrServico = localStorage.getItem("descrServico")

        // Verifica se o serviço já está na lista   
        return descrServico.includes(servico.toString())
    } else {
        return false
    }
}


const mostrarLista = () => {

    // Se não há itens armazenados em localStorage
    if (!localStorage.getItem("descServico")) {
        // Limpa o espaço de exibição da lista quando "limpa"
        respLista.innerText = ""
        return
    }

    // Obtém o conteúdo das variáveis salvas no localStorage
    // separando os elementos
    const descrServico = localStorage.getItem("descrServico")

    const quantidade = [] // Vetor global - Cria a lista para incluir os serviços

    // Repetição do laço para percorrer todos os elementos do vetor

    for (let i = 0; i < descrServico.length; i++) {
        descrServico.push({
            descrServico: descrServico[i] 
        })
    }

    respLista.innerText = `${quantidade}`
}            

// Chama a function quando a página é carregada, para mostrar a lista
window.addEventListener("load", mostrarLista)

frm.btLista.addEventListener("click", () => {
    // Se não houver itens na lista em localStorage
    if(!localStorage.getItem("descServico")) {
        alert("não há serviços na lista")
        return
    }

    mostrarLista()
})

frm.btLimpar.addEventListener("click", () => {
    // Solicita a confirmação para excluir itens
    if(confirm("Confirma a exclusão do serviço?")) {
        localStorage.removeItem("descServico") // Remove as variáveis salvas         
        mostrarLista()
    }
})