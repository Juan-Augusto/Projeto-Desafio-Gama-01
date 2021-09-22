function calcp(){
    var qtd = document.getElementById('quantidade')
    var valorunit = document.getElementById('unit')
    var preco = document.querySelector('div#valor-total')
    

    if(qtd.value.length=='0'){
        window.alert('[ERRO] Informe a quantidade desejada, por favor.')
    }else{
        var q = Number(qtd.value)
        var v = Number(valorunit.value)
        preco.innerHTML= `<h2>Valor do pedido:R$ ${q*v},00</h2>`
    }
}
