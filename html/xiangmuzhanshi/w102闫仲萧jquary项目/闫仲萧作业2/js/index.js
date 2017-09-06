

$(function(){
    /*����*/
    $(".header-top ul li").click(function(){
        var n=  $(this).index();
        $(this).addClass("selected").siblings("li").removeClass();
        $("#cssFile").attr("href","../css/skin/skin_"+n+".css");
    })
    /*����*/
    /*�����˵�*/
        $(".header-bottom li").hover(function(){
            $(this).find("ul").stop().slideDown(1000);
        },function(){
            $(this).find("ul").stop().slideUp(1000);
        })
    /*�����˵�*/
    /*���뵭���ֲ�*/
    var n=0;
    function run(){
        n++;
        n=(n==5)?0:n;//��Ԫ���ʽ���뵭���ֲ�
//               if(n==5){
//                   n=0;
//               }
        $(".banner img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
              $(".banner ul li").eq(n).css({"background":"deepskyblue"}).siblings("li").css({"background":"#444444"});
    }
    var timer=setInterval(run,2000);
    $(".banner ul li").hover(function(){
        clearInterval(timer);
        n=$(this).index();
        $(".banner img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
        $(this).css({"background":"deepskyblue"}).siblings("li").css({"background":"#444444"});
    }).hover(function(){
        timer=setInterval(run,2000);
    })
    /*���뵭���ֲ�*/
    /*无缝轮播*/
    $(".anniu li").click(function() {
        var i=0;
        var i=$(this).index();
        if(i==0){
            $(".wufeng").animate({"margin-left":"0px"},1000);
        }else if(i==1) {
            $(".wufeng").animate({"margin-left": "-787px"}, 1000);
        }else if(i==2) {
            $(".wufeng").animate({"margin-left": "-1574px"}, 1000);
        }else if(i==3) {
            $(".wufeng").animate({"margin-left": "-2361px"}, 1000);
        }
        $(".anniu li").eq(i).css({"background":"red"}).siblings("li").css({"background":"#bbbbbb"});
        })

    //var n=0;
    //function run(){
    //    if(n==3){
    //        $(".wufeng").animate({"margin-left":0},1000);
    //        n=0;
    //    }else{
    //        $(".wufeng").animate({"margin-left":"-="+787+"px"},1000);
    //        n++;
    //    }
    //    //$(".anniu li").eq(n).css({"background":"red"}).siblings("li").css({"background":"#bbbbbb"});
    //}
    ////var timer=setInterval(run,2000);
    //$(".anniu li").click(function(){
    //    //clearInterval(timer);
    //    var i=$(this).index();
    //    if(i>n){
    //        $(".wufeng").animate({"margin-left":"-="+((i-n)*787)+"px"},1000);
    //        n=i;
    //    }else{
    //        $(".wufeng").animate({"marginleft":"+="+((n-i)*787)+"px"},1000);
    //        n=i;
    //    }
    //    $(".anniu li").eq(n).css({"background":"red"}).siblings("li").css({"background":"#bbbbbb"});
    //})
    /*无缝轮播*/
})