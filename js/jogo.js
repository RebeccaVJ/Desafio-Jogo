const numeroAleatorio = Math.round(Math.random()*100);
const campoInput = $(".campo-input");
const botaoChutar = $("#botao-chute");

$(function() {
    verificaNumero();
    $("#botao-reset").click(jogarNovamente);
});

function verificaNumero() {
    botaoChutar.on("click", function () {
        let valCampo = campoInput.val();
        let caixaNumeroCorreto = $(".caixa-numero");
        const caixaNumero = $("#caixa-number");
        if (valCampo == numeroAleatorio) {
            caixaNumeroCorreto = caixaNumeroCorreto.text(valCampo);
            caixaNumero.addClass("acertou");
            $(".caixa-acerto").show();
            $(".caixa-erro").hide();
        }
        else {
            caixaNumero.removeClass("acertou");
            $(".caixa-erro").show();
            $(".caixa-acerto").hide();
        }
    });
} 

function jogarNovamente() {
    campo.attr("disabled", false);
    campo.val("");
    $("caixa-erro").toggleClass();
    $("caixa-acerto").toggleClass();
}