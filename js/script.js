//efeito do botão voltar ao Topo
let buttontop = document.querySelector("#voltar-topo")
let buttonlogin = document.querySelector("#bt-login")
let buttoncadastrar = document.querySelector("#bt-cadastrar")

buttontop.addEventListener('click', () => {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: "smooth"
        }
    )
})

//Validação de Login

buttonlogin.addEventListener('click', () => {
    let usuario = document.querySelector('#usuario').value
    let senha = document.querySelector('#senha').value
    if(usuario === "admin" && senha === "123456"){
        alert('Logado com sucesso!')
        location = "index.html"
    } else{
        alert('Dados incorretos, tente novamente!')
    }
})


//Ativar alert no botão cadastrar

buttoncadastrar.addEventListener('click', () => {
    alert("Dados cadastrados com sucesso!")
    location = "index.html"
})