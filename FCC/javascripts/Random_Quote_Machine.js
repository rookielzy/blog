var bgcolor = ["#fb6964", "#2c3e50", "#9b59b6", "#73a857"];
var quoteTest = ["Look, if you have one shot one opportunity to size everything you ever wanted.",
        "I remeber you was confliced, miss using your influence.",
        "When the lights shut off And it's my turn to settle down My main concern Promise that you will sing about me.",
        "I am a sinner who's probably gonna sin again Lord forgive me,Lord forgive me Things I don't understand."
    ];

$("#change").on("click", function(){
    var tmp = parseInt(Math.random() * 3);
    $(".bgcolor").css("background-color", bgcolor[tmp]);
    $("#quote").text(quoteTest[tmp]);
    $("#quote").css("color", bgcolor[tmp]);
});