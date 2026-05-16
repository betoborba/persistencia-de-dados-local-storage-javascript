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
    }
})

