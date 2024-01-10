$('document').ready(function () {
    $('INPUT#btn_translate').on('click', function () {
        $.ajax({url: "https://hellosalut.stefanbohacek.dev/?lang=" + $('INPUT#language_code').val(), success: function(data){
            $('DIV#hello').text(data.hello);
        }});
    });
});