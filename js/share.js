$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

if($.urlParam('bracket')!=0){
    console.log(JSON.parse(decodeURIComponent($.urlParam('bracket'))))
    const obj = JSON.parse(decodeURIComponent($.urlParam('bracket')))
    for(key in obj){
        const btn =  $(`#${key}`)
        $(btn[0]).html(obj[key]);
    }
}