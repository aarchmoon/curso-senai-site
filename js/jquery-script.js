//efeito de esconder formulário de cadastro

$(document).ready(() => {
    $("#botao-cadastrar").click(() => {
        $("#botao-logar").show()
        $("#form-cadastrar").slideToggle("slow")
        $("#section-login").slideToggle("slow")
        $("#botao-cadastrar").hide()
        }
    )

    $("#botao-logar").click(() => {        
        $("#botao-cadastrar").show()
        $("#form-cadastrar").slideToggle("slow")
        $("#section-login").slideToggle("slow")
        $("#botao-logar").hide()
    })

})