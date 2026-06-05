const frm = document.querySelector("form") // Obtém os elementos da página a serem manipulados
const resp1 = document.querySelector("span")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio do form

    const servico = frm.inServico.value // Obtém o valor do form

    
    if (localStorage.getItem("descrServico")) {
        localStorage.setItem("descrServico", localStorage.getItem("descrServico") + " - " + servico)
    } else { 
        localStorage.setItem("descrServico", servico)
    }

    quantServico() // Chama a function que mostra quantidade de serviços
    frm.reset()     // ou frm.inServico.value = ""     
    frm.inServico.focus() // Joga o foco (cursor) no campo inServico
})


const quantServico = () => {
    let numServicos


    if (localStorage.getItem("descrServico")) {
        numServicos = localStorage.getItem("descrServico").split(" - ").length
    } else {
        numServicos = 0
    }

    resp1.innerText = numServicos
}
    // Chama a function quando a página é carregada, para mostrar a lista
window.addEventListener("load", quantServico)

frm.btExecutar.addEventListener("click", () => {

    if (!localStorage.getItem("descrServico")){
        alert("Não há serviços pendentes para executar")
        return
    }

 
    const servicos = localStorage.getItem("descrServico").split(" - ")

    const emExecucao = servicos.shift() // remove o primeiro 
     
    resp2.innerText = emExecucao // Mostra o removido

    localStorage.setItem("descrServico", servicos.join(" - ")) // salva a nova lista (sem o removido)

    mostrarPendentes()
})

