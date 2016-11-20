$(document).ready(function() {
    // $("p").click(function() {
    //     alert($(this).html());
    // });

    // $('#tb tbody tr:even').css("backgroundColor", "#888");
    // $('.btn').click(function() {
    //     var length = $("input[name='age']:checked").length;
    //     alert(length);
    // })
    // var $category = $('ul li:gt(5):not(:last)');
    // $category.hide();
    // var $toggleBtn = $('div.showmore > a');
    // $toggleBtn.click(function() {
    //     $category.show();
    //     return false;
    // });
    // $('.showmore a span').text("short lab");

    // $("a.tooltip").mouseover(function() {
    //     var tooltip = "<div id='tooltip'>" + this.title+"</div>"
    //     $("body").append(tooltip);
    //     $("#tooltip").css({
    //         "top": e.pageY + "px",
    //         "left": e.pageX + "px"
    //     }).show("slow");
    // }).mouseout(function(){
    //     $("#tooltip").remove();
    // });
//    $("#panel").hover(function() {
//        $(this).stop(true).animate({height:"150"}, 200).animate({width: "300"}, 300);
//    }, function() {
//        $(this).stop(true).animate({height:"22"}, 200).animate({width:"60"}, 300);
//    });
    // $(function() {
    //     var page = 1;
    //     var i = 4;
    //     $("span.next").click(function() {
    //         var $parent = $(this).parents("div.v_show");
    //         var $v_show = $parent.find("div.v_content_list");
    //         var $v_content = $parent.find("div.v_content");

    //         var v_width = $v_content.width();
    //         var len = $v_show.find("li").length;
    //         var page_count = Math.ceil(len / i);

    //         if (!$v_show.is(":animated")) {
    //             if (page == 1){
    //                 $v_show.animate({left: '-='+ v_width*(page_count-1)}, "slow");
    //                 page = page_count;
    //             } else {
    //                 $v_show.animate({left: '+=' + v_width }, "slow");
    //                 page--;
    //             }
    //             // if (page == page_count) {
    //             //     $v_show.animate({left: '0px'}, "normal");
    //             //     page = 1;
    //             // } else {
    //             //     $v_show.animate({left: '-='+v_width}, "normal");
    //             //     page++;
    //             // }
    //         }
    //         $parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");            
    //     });
        
    // });

    $(function() {
        $("#send").click(function() {
            $("#resText").load("test.html");
        });
    });

});