$(document).ready(function() {
    $(window).on("load", function() {
        imglocation();
        var dataimg = {
            "data": [{
                "src": "1.jpg"
            }, {
                "src": "2.jpg"
            }, {
                "src": "3.png"
            }, {
                "src": "4.jpg"
            }, {
                "src": "5.jpg"
            }, {
                "src": "6.jpg"
            }, {
                "src": "7.jpg"
            }, {
                "src": "8.png"
            }, {
                "src": "9.png"
            }, {
                "src": "10.jpg"
            }, {
                "src": "11.jpg"
            }]
        }
        window.onscroll = function() {
            if (getheight()) {
                $.each(dataimg.data, function(index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    // console.log("img/" + $(value).attr("src"));
                    $("<img>").attr("src", "img/" + $(value).attr("src")).appendTo(content);

                });
                imglocation();
            }
        };
    });
});

function getheight() {
    var box = $(".box");
    var totalhtight = box.last().get(0).offsetTop + Math.floor(box.last().height()) / 2;
    var documentheight = $(document).width();
    var scrollheight = $(window).scrollTop();
    return (totalhtight < documentheight + scrollheight) ? true : false;
}


function imglocation() {
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
            boxarr[minboxindex] += $(".box").eq(index).height();
        }

    });
}
