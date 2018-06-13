$(".oitavas").find(".item").each(function(){
    $(this).click(function(){
        let node = $(".quartas").find(".item").get($(this).parents(".oitavas").index())
        $(node).html($(this).html())
        $(node).css('visibility', 'visible');
    })
})

$(".quartas").find(".item").each(function(){
    $(this).click(function(){
        let node = $(".semi").find(".item").get($(this).parents(".quartas").index())
        $(node).html($(this).html())
        $(node).css('visibility', 'visible');
    })
})

$(".semi").find(".item").each(function(){
    $(this).click(function(){
        let node = $(".final").find(".item").get($(this).parents(".semi").index())
        $(node).html($(this).html())
        $(node).css('visibility', 'visible');
    })
})

$(".final").find(".item").each(function(){
    $(this).click(function(){
        let node = $(".resultado").find(".item").get($(this).parents(".final").index())
        $(node).html($(this).html())
        $(node).css('visibility', 'visible');
        share();
    })
})
