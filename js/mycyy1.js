$(function() {
    //编辑器控制
    $("h4,.nav b").css("color", "#fff");

    $(".fades").addClass("fadesin"); //加给section2之后的
    $(" h1.fade").addClass("fadesin1");
    $(" h3.fade").addClass("fadesin2");
    $(" span.fade").addClass("fadesin3");

    var _top;
    var top1 = $("#section2").offset().top - 30;
    var top2 = $("#section3").offset().top - 30;
    var top3 = $("#section4").offset().top - 30;
    var top4 = $("#section5").offset().top - 30;
    var tops = [top1, top2, top3, top4];
    $(window).resize();

    //回到顶部
    $("#top").click(function() {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 700);
    });
    showScroll();
    // 获取现在界面高度的一半
    var min_height = document.documentElement.clientHeight / 2;
    // 回到顶部按钮显示隐藏
    function showScroll() {
        $(window).scroll(function() {
            var s = $(window).scrollTop(); //获取窗口离顶部高度
            // 高夫高于一半时隐藏
            s > min_height ? $('#top').fadeIn() : $('#top').fadeOut();
        });
    }
    //导航高亮
    $(".nav-ul li").bind("click", function() {
        var index = $(this).index(); //获取序号
        console.log(index)
        $(".nav-ul li").eq(index).addClass("active").siblings().removeClass("active");
        $(".nav-xs-ul li").eq(index).addClass("active").siblings().removeClass("active");
    });
    // section1的两个按钮
    //关于我
    $("#abMe").bind("click", function() {
        $(".nav-ul li:nth-child(1)").click();
    });
    //我的作品
    $("#mypro").bind("click", function() {
        $(".nav-ul li:nth-child(3)").click();
    });
    //导航点击
    $(".nav-ul li").bind("click", function() {
        var index = $(this).index(); //获取序号
        _top = $(".section").eq(index + 1).offset().top; //获取对应div距顶高度
        moveTo();
    });
    //导航slideToggle
    $(".more-nav").bind("click", function() {
        $(".nav-ul.nav-xs-ul").stop().slideToggle(300);
    });

    function moveTo() {
        $('html,body').animate({
            scrollTop: _top
        }, 500);
    }
    $(".nav-xs-ul li").click(function() {
        $(".nav-xs-ul").slideUp(300)
    });

    //页面滚动
    $(window).scroll(function(e) {

        //导航fixed
        var s = $(window).scrollTop();
        s > top1 ? $('#nav-bar').addClass("fixed") : $('#nav-bar').removeClass("fixed");
        //导航跟随滚动响应
        if ((s > top1) && (s < top2)) {
            $(".nav-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $("#section2").addClass("active");
        } else if ((s > top2) && (s < top3)) {
            $(".nav-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $("#section3").addClass("active");
        } else if ((s > top3) && (s < top4)) {
            $(".nav-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $("#section4").addClass("active");
        } else if (s > top4) {
            $(".nav-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $("#section5").addClass("active");
        }
    });


    // 鼠标点击爱心开始====================
    //获取16进制随机颜色
    var getRandomColor = function() {
        return '#' + (function(color) {
            return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
                (color.length == 6) ? color : arguments.callee(color);
        })('');
    };
    $('body').click(function(event) {
        const div = document.createElement("div");
        //添加爱心
        $(div).css({
            "position": "absolute",
            "left": event.pageX + "px",
            "top": event.pageY + "px",
            "color": getRandomColor()
        });
        div.innerText = "❤";
        $(div).addClass('heart')
            //定时器
        $(div).oneTime('3s', function() {
            $(div).remove();
        });
        //body下添加div
        document.body.appendChild(div);
    });
    // // 鼠标点击爱心结束====================
});

$(window).resize(function() {
    var wid = $(window).width();
    if (wid > 768) {
        $(".nav-xs-ul").hide();
    }
});