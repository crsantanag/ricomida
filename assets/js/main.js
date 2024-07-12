
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
    });

    $(".card-body").click(function() {
        $(".card-text").toggle();
    });
});

$(document).ready(function(){
    $("#spoon1").dblclick(function(){
        $(this).css({"color": "red"});
    });
});

$(document).ready(function(){
    $("#spoon2").dblclick(function(){
        $(this).css({"color": "red"});
    });
});


