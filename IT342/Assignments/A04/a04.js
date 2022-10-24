
function drawGrid(rows, cols){
    $("#container").html("");

    for (var r=0; r<rows; r++){
        $("#container").append("<div class=\"row\">");
        for(var c=0; c<cols; c++){
            $("#container").append("<div class=\"pixel\"></div>");
        }
        $("#container").append("</div>");
    }
}

$(document).ready(function(){
    
    let currentColor = "white";
    drawGrid(10,10);
    
    $(".swatch").on('click', function(){
        currentColor = $(this).css("background-color");
        $("#current").css("background-color", currentColor);
    });

    $("#container").on("click", ".pixel", function(){
        $(this).css("background-color", currentColor);
    });

    $("#update").on('click', function(){
        drawGrid($("#rows").val(), $("#columns").val());  
    });

});


