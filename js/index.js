$('.disputa').find('.item').each(function () {
    let atual = $(this)
    atual.click(function(){
        atual.parent().find('.item').removeClass('.active')
        atual.addClass('.active')
        updateNext(atual)
    })
})

function updateNext(atual) {
    var grand = atual.parent().parent()
    grand.find('.divisor').css('border-left-color', '#32CD32')
    var id = atual.parent().attr('next')
    var proximo = $('#'+id)
    proximo.css('visibility', 'visible')
    proximo.html(atual.html())
    if(proximo.hasClass('.active')) {
        updateNext(proximo)
    }
}













