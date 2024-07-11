$(document).ready(function(){

    $("p").dblclick(function(){
    $(this).hide("slow");
    });

    $("p").click(function(){
        $(this).css({
        "color": "red"
        });
    });
});
