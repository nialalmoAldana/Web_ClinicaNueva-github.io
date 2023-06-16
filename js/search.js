var buscador = $("#table").DataTable();
var contentSearch = $(".content-search");

$("#input-search").on("keyup", function(){
    buscador.search($(this).val()).draw();
    if ($("#input-search").val() == ""){
        contentSearch.fadeOut(300);
    } else {
        contentSearch.fadeIn(300);
    }
});

$(document).on("click", function(event){
    if (!$(event.target).closest("#input-search").length && !$(event.target).is("#input-search")) {
        contentSearch.fadeOut(300);
    }
});