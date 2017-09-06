
$(function(){
    /*滚动导航*/
    $("li span").mouseenter(function(){
        $(this).stop().animate({"margin-top":"-40px"},500)
    }).mouseleave(function(){
        $(this).stop().animate({"margin-top":0},500)
    })
    /*滚动导航*/

/*滑动出图片*/
    $(".chutu").hover(function(){
        $(this).find(".shuangtu").show();
    },function(){
        $(this).find(".shuangtu").hide();
    })
/*滑动出图片*/
/*淡入淡出轮播*/
    var n=0;
    function run(){

        n=(n==3)?0:n;//三元表达式淡入淡出轮播
        //       if(n==2){
        //           n=0;
        //       }
        $(".top img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
        n++;
    }
    //var timer=setInterval(run,1000);
    //$("#container ul li").mouseenter(function(){
    //    clearInterval(timer);
    //    n=$(this).index();
    //    $("#container img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
    //    $(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
    //}).mouseleave(function(){
    //    timer=
            setInterval(run,2000);
    //})

    /*淡入淡出轮播*/

    /*从下从来模板*/
    $(".tupian1 li").hover(function(){
        $(this).find("a").stop().animate({"margin-top":"-20px"},1000);
    },function(){
        $(this).find("a").stop().animate({"margin-top":"322px"},1000);
    })
    /*淡入模板*/

    /*淡入模板*/
    $(".tupian2 li").hover(function(){
        $(this).find("a").stop().animate({"opacity":0.8},1000);
    },function(){
        $(this).find("a").stop().animate({"opacity":0},1000);
    })
    /*淡入模板*/
})