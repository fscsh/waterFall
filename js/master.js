$(document).ready(function() {
    $(window).on("load", function() {
        imglocation();
    });
});

function imglocation() {
    // var box = $(".box");
    var boxwidth = $(".box").eq(0).width();
    var num = Math.floor($(window).width() / boxwidth)
    var boxarr = [];
    $(".box").each(function(index, value) {
        var boxheigth = $(".box").eq(index).height();
        if (index < num) {
            boxarr[index] = boxheigth;
        } else {
            var minboxheight = Math.min.apply(null, boxarr);
            var minboxindex = $.inArray(minboxheight, boxarr);
            $(value).css({
                "position": "absolute",
                "top": minboxheight,
                "left": $(".box").eq(minboxindex).position().left
            })
            boxarr[minboxindex]+=$(".box").eq(index).height();
        }

    });
}
