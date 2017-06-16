$(function(){
    $("#skin li").click(function(){
        var i=$(this).index();
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $("#cssfile").attr("href","css/skin/skin_"+i+".css")
    })
    $(".nav li").hover(function(){
        $(this).find(".jnNav").stop().slideDown(1000);
    },function(){
        $(this).find(".jnNav").stop().slideUp(1000);
    })
    var n=0;
    function run(){
        n++;
        if(n==5){
            n=0;
        }
        $("#JS_imgWrap img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
        $("#jnImageroll div a").eq(n).addClass("chos").siblings("a").removeClass("chos");
    }
    var timer=setInterval(run,2000);
    $("#jnImageroll div a").hover(function(){
        clearInterval(timer);
        n=$(this).index();
        $("#JS_imgWrap img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
        $("#jnImageroll div a").eq(n).addClass("chos").siblings("a").removeClass("chos");
    },function(){
        timer=setInterval(run,2000);
    })

    $("#jnBrandTab ul li").click(function(){
        var d=$(this).index();
        $("#jnBrandList").animate({"left":-780*d+"px"},1000);
    })
})