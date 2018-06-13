function share(){
    let obj = {}
    $(".eliminatorias").each(function(){
        obj[$(this).attr('id')] = $(this).html().replace(/\s/g, '');
    })
    $("#link").val(`${$(location).attr('href')}?bracket=${JSON.stringify(obj)}`)
    $('#share').modal('show');    
}

function copyToClipboard() {
    var text = $("#link").val();
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

$.urlParam = function(name){
	let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results ? results[1] || 0 : 0;
}
if($.urlParam('bracket') != 0){
    console.log(JSON.parse(decodeURIComponent($.urlParam('bracket'))))
    $(".item").each(function(){
        $(this).css('visibility', 'visible');
    })
    const obj = JSON.parse(decodeURIComponent($.urlParam('bracket')))
    for(key in obj){
        const btn =  $(`#${key}`)
        $(btn[0]).html(obj[key]);
    }
}
