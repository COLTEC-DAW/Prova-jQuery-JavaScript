$('#RegraModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

var oitavas = $('.oitavas');
for (var i = 0; i < oitavas.length; i++) {
    console.log(oitavas[i]);
    oitavas[i].addEventListener('click', function () {

    });
}