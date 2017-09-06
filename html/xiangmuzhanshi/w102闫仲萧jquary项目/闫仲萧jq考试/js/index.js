$(function(){

    /*�����˵�*/
        $(".header-nav li").hover(function(){
            $(this).find("ul").stop().slideDown(1000);
        },function(){
            $(this).find("ul").stop().slideUp(1000);
        })
    /*�����˵�*/
    /*���뵭���ֲ�*/
    var n=0;
    function run(){
        n++;
        n=(n==3)?0:n;//��Ԫ���ʽ���뵭���ֲ�
//               if(n==5){
//                   n=0;
//               }
        $(".banner img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
    }
        setInterval(run,2000);


    /*���뵭���ֲ�*/
    $(function(){
        $(".xin").hover(function(){
            $(this).find(".tip").show().animate({"right":"35px","opacity":1},1000);
            $(this).addClass("selected");
        },function(){
            $(this).find(".tip").hide().animate({"right":"70px","opacity":0},1000);
            $(this).removeClass("selected");
        })
    })
    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()>100){
                $("#back-to-top").fadeIn(1000);
            }else{
                $("#back-to-top").fadeOut(1000);
            }
        })
        $("#back-to-top").click(function(){
            $("body").animate({"scrollTop":"0"},1000);
        })
    })

})