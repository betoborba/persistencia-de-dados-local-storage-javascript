const frm = document.querySelector("form")
const imclube = document.querySelector("#imgClube")
const resp = document.querySelector("h6")



// Declara a contagem para localstorage
const visita = Number(localStorage.getItem("visita", 0))
const soma = visita + 1

localStorage.setItem("visita", soma) // Envia os dados para armazenar



// Exibe na tela a visita do usuário 

if (soma % 2 == 0) {                            // Se a sessão da visita do usuário for "par" 
    resp.innerText = "---Quem bom ver você de novo! Sua visita a nossa loja de n° " + ` ${soma}` +  " Aproveite - cupom :: FRETE GRÁTIS---"
} else {
    resp.innerText = "--- Legal ter você por a aqui! Sua visita a nossa loja de n°  " + ` ${soma}` +  " Ganha - cupom :: 5% DESCONTO---"   // Se a sessão da visita do usuário for "impar" 
}


// Outra maneira de fazer 

//if (visita == 0) {
    //alert("Esta é a sua primeira visita ao nosso site! Toma esse 10% de desconto!")
//} else {
    //alert("Que bom que você voltou! esta é a sua visita de número " + ` ${soma} ao nosso site! `)
//}






 


