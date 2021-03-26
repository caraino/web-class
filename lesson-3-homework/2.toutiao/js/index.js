$(function() {
    // 页面滚动事件
    var boxTop = $(".left-content").offset().top;
    $(window).scroll(function() {
        // 侧边栏是否固定
        if ($(document).scrollTop() >= boxTop - 10) {
            $(".left-content").addClass("left-fixed");
        } else {
            $(".left-content").removeClass("left-fixed");
        }

        // 是否请求新的新闻
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200) {
            // $.ajax({
            //     url: 'https://127.0.0.1:8080/server',
            //     type: 'get',
            //     dataType: 'jsonp',
            //     success: function(res) { //result结果
            //         var html = template('tpl', res);
            //         $('.news-list').append('<div class="more-news"></div>');
            //         $('.more-news').html(html);
            //     }

            // })
            var html = template('tpl', { data });
            $('.news-list').append('<div class="more-news"></div>');
            $('.more-news').html(html);

        }
    });

    $(".channel").on("mouseenter mouseleave", function() {
        $(this).toggleClass("current");
    });
})