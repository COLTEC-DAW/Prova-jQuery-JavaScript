$(".oitavas").find(".item").each(function(){
    $(this).click(function(){
        let node = $(".quartas").find(".item").get($(this).parents(".oitavas").index())
        console.log(node)
        $(node).html($(this).html())
    })
})
