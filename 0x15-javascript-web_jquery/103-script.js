function sayHello() {
    $.ajax({url: "https://hellosalut.stefanbohacek.dev/?lang=" + $('INPUT#language_code').val(), success: function(data){
        $('DIV#hello').text(data.hello);
    }});
}

$('document').ready(function () {
    $('INPUT#btn_translate').on('click', function () {
        sayHello();
    });
    $('INPUT#language_code').on('keypress', function (event) {
        if (event.key === 'Enter') {
            sayHello();
        }
    });
});
