$(function(){
    let cd = 1;
    $("h1.title").click(function(){
        $("ul.music-list").slideToggle('slow');
    });
        $("#cd").click(function () {
            if (cd == 1) {
                $(this).animate({ "width": "0px" }, 500, function () {
                    $(this).css("background-position", "right center");
                    $(this).animate({ "width": "300px" }, 500);
                    cd++;
                    $("h1.title").html("A Higher Place");
                });
            } else if (cd == 2) {
                $(this).animate({ "width": "0px" }, 500, function () {
                    $(this).css("background-position", "right bottom");
                    $(this).animate({ "width": "300px" }, 500);
                    cd++;
                    $("h1.title").html("Like A Fool");
                });
            } else if(cd == 3) {
                $(this).animate({ "width": "0px" }, 500, function () {
                    $(this).css("background-position", "right top");
                    $(this).animate({ "width": "300px" }, 500);
                    cd = 1;
                    $("h1.title").html("Lost Stars");
                });
            }
        });
        $("ul.music-list li").click(function () {
            let musicname = $(this).text();
            $("h1.title").html(musicname);
            $("#cd").animate({ "width": "0px" }, 500, function () {
                if(musicname == "Lost Stars"){
                    $(this).css("background-position", "right top");
                    $(this).animate({ "width": "300px" }, 500);
                    cd = 1;
                }else if(musicname == "A Higher Place"){
                    $(this).css("background-position", "right center");
                    $(this).animate({ "width": "300px" }, 500);
                    cd = 2;
                }else if(musicname == "Like A Fool"){
                    $(this).css("background-position", "right bottom");
                    $(this).animate({ "width": "300px" }, 500);
                    cd = 3;
                }
            });
            $(this).parent().slideUp('slow');
        });
});