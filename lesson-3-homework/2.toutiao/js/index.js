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
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 400) {
            $('.news-list').append('<div class="more-news"></div>');

            $.ajax({
                url: 'http://127.0.0.1:8080/server',
                type: 'get',
                dataType: 'json',
                success: function(data) { //result结果
                    var html = template('tpl', { data });
                    // $('.news-list').append('<div class="more-news"></div>');
                    $('.more-news').html(html);
                }

            })



        }
    });

    $(".channel").on("mouseenter mouseleave", function() {
        $(this).toggleClass("current");
    });

    function DateDiff(startTime) {
        var date = (new Date()).valueOf() / 1000;
        var timeDiff = date - startTime
        if (Math.floor(timeDiff / 86400 / 365) >= 1) {
            return Math.floor(timeDiff / 86400 / 365) + "年前";
        } else if (Math.floor(timeDiff / 86400 / 30) >= 1) {
            return Math.floor(timeDiff / 86400 / 30) + "月前";
        } else if (Math.floor(timeDiff / 86400) >= 1) {
            return Math.floor(timeDiff / 86400) + "天前";
        } else if (Math.floor(timeDiff / 3600) >= 1) {
            return Math.floor(timeDiff / 3600) + "小时前";
        } else if (Math.floor(timeDiff / 60) >= 1) {
            return Math.floor(timeDiff / 60) + "分钟前";
        } else {
            return "刚刚";
        }

    }

    template.defaults.imports.DateDiff = DateDiff;
})