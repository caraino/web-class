$(function() {
    // 页面滚动事件
    var boxTop = $(".left-content").offset().top;
    $(window).scroll(function() {
        if ($(document).scrollTop() >= boxTop - 10) {
            $(".left-content").addClass("left-fixed");
        } else {
            $(".left-content").removeClass("left-fixed");
        }
    });

    $(".channel").on("mouseenter mouseleave", function() {
        $(this).toggleClass("current");
    });

})