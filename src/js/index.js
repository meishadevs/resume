
$(document).ready(function() {

    var leader = 0;
    var target = 0;
    var timer = null;

    //监听浏览器滑动
    $(window).scroll(function () {

        //如果滑动了浏览器的滑块，显示回到顶部按钮
        $(document).scrollTop() > 400 ? $("#goTop").show() : $("#goTop").hide();

        //把滑块滑动的距离给起始位置
        leader = $(document).scrollTop();
    });

    //个回到顶部按钮添加一个点击事件
    $("#goTop").on("click", function () {

        clearInterval(timer);

        target = 0;

        timer = setInterval(function()
        {
            leader = leader + (target - leader ) / 10;

            //去往页面的某个位置
            window.scrollTo(0,leader);

            if(leader == target)
            {
                clearInterval(timer);
            }
        }, 10);
    });
});