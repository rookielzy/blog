$(document).ready(function() {
    $.getJSON("http://open.douyucdn.cn/api/RoomApi/live/dota2 ", function(json){
        console.log(json);
    });
});
