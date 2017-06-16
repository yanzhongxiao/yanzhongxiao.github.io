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
    /*放大镜*/
    $(".jqzoom").jqueryzoom();
    /*放大镜*/
    $(" #fenkuang ul li").click(function () {
        var a=$(this).index();
        $("#fenkuang div").eq(a).show().siblings().not("ul").hide();
        $(this).attr("class","li"+a);
        $(this).siblings().removeAttr("class");
    })




    $(".xinghao li").click(function(){
        var a=0;
        var a=$(this).index();
        if(a==0){
            $(".jqzoom img").attr("src","../images/pro_img/blue_one_small.jpg");
            $(".jqzoom img").attr("jqimg","../images/pro_img/blue_one_big.jpg");
        }else if(a==1){
            $(".jqzoom img").attr("src","../images/pro_img/blue_two_small.jpg");
            $(".jqzoom img").attr("jqimg","../images/pro_img/blue_two_big.jpg");
        }else if(a==2){
            $(".jqzoom img").attr("src","../images/pro_img/blue_three_small.jpg");
            $(".jqzoom img").attr("jqimg","../images/pro_img/blue_three_big.jpg");
        }

        $(this).css({"width":"85px","height":"85px","border":"1px solid #000"}).siblings("li").css({"border":"0"})
    })





        $(".yanse li").click(function(){
            var e=0;
            var e=$(this).index();
            if(e==0){

                $(".lan").css({"display":"inline"});
                $(".huang").css({"display":"none"});
                $(".lv").css({"display":"none"});
                $(".jqzoom img").attr("src","../images/pro_img/blue_one_small.jpg");
                $(".jqzoom img").attr("jqimg","../images/pro_img/blue_one_big.jpg");
                $(".tu1 img").attr("src","../images/pro_img/blue_one.jpg");
                $(".tu2 img").attr("src","../images/pro_img/blue_two.jpg");
                $(".tu3 img").attr("src","../images/pro_img/blue_three.jpg");

                $(".xinghao li").click(function(){
                    var a=0;
                    var a=$(this).index();
                    if(a==0){
                        $(".jqzoom img").attr("src","../images/pro_img/blue_one_small.jpg");
                        $(".jqzoom img").attr("jqimg","../images/pro_img/blue_one_big.jpg");
                    }else if(a==1){
                        $(".jqzoom img").attr("src","../images/pro_img/blue_two_small.jpg");
                        $(".jqzoom img").attr("jqimg","../images/pro_img/blue_two_big.jpg");
                    }else if(a==2){
                        $(".jqzoom img").attr("src","../images/pro_img/blue_three_small.jpg");
                        $(".jqzoom img").attr("jqimg","../images/pro_img/blue_three_big.jpg");
                    }
                    $(this).css({"width":"85px","height":"85px"}).siblings("li").css({"border":"0"})
                })

            }else if(e==1){
                $(".lan").css({"display":"none"});
                $(".huang").css({"display":"inline"});
                $(".lv").css({"display":"none"});
                $(".jqzoom img").attr("src","../images/pro_img/yellow_one_small.jpg");
                $(".jqzoom img").attr("jqimg","../images/pro_img/yellow_one_big.jpg");
                $(".tu1 img").attr("src","../images/pro_img/yellow_one.jpg");
                $(".tu2 img").attr("src","../images/pro_img/yellow_two.jpg");
                $(".tu3 img").attr("src","../images/pro_img/yellow_three.jpg");
                $(".xinghao li").click(function(){
                    var a=0;
                    var a=$(this).index();
                    if(a==0){
                        $(".jqzoom img").attr("src","../images/pro_img/yellow_one_small.jpg");
                        $(".jqzoom img").attr("jqimg","../images/pro_img/yellow_one_big.jpg");
                    }else if(a==1){
                        $(".jqzoom img").attr("src","../images/pro_img/yellow_two_small.jpg");
                        $(".jqzoom img").attr("jqimg","../images/pro_img/yellow_two_big.jpg");
                    }else if(a==2){
                        $(".jqzoom img").attr("src","../images/pro_img/yellow_three_small.jpg");
                        $(".jqzoom img").attr("jqimg","../images/pro_img/yellow_three_big.jpg");
                    }
                    $(this).css({"width":"85px","height":"85px"}).siblings("li").css({"border":"0"})
                })

            }else if(e==2){
                $(".lan").css({"display":"none"});
                $(".huang").css({"display":"none"});
                $(".lv").css({"display":"inline"});
                $(".jqzoom img").attr("src","../images/pro_img/green_one_small.jpg");
                $(".jqzoom img").attr("jqimg","../images/pro_img/green_one_big.jpg");
                $(".tu1 img").attr("src","../images/pro_img/green_one.jpg");
                $(".tu2 img").attr("src","../images/pro_img/green_two.jpg");
                $(".tu3 img").attr("src","../images/pao.gif");
                $(".tu3 img").css({"width":"85px","height":"85px"});
                $(".xinghao li").click(function(){
                    var a=0;
                    var a=$(this).index();
                    if(a==0){
                        $(".jqzoom img").attr("src","../images/pro_img/green_one_small.jpg");
                        $(".jqzoom img").attr("jqimg","../images/pro_img/green_one_big.jpg");
                    }else if(a==1){
                        $(".jqzoom img").attr("src","../images/pro_img/green_two_small.jpg");
                        $(".jqzoom img").attr("jqimg","../images/pro_img/green_two_big.jpg");
                    }else if(a==2){
                        $(".jqzoom img").attr("src","../images/pao.gif");
                        $(".jqzoom img").css({"width":"312px","height":"312px"});
                        $(".jqzoom img").attr("jqimg","../images/pao.gif");
                    }
                    $(this).css({"width":"85px","height":"85px"}).siblings("li").css({"border":"0"})
                })
            }
        })












    var f=0;
    var f=$(this).index();
    $(".chicun li").click(function(){
        var f=0;
        var f=$(this).index();
        if(f==0){
            $(".chicun1").css({"display":"none"});
            $(".chicun2").css({"display":"inline"});
            $(".chicun3").css({"display":"none"});
            $(".chicun4").css({"display":"none"});
            $(".chicun5").css({"display":"none"});
            $(".chicun6").css({"display":"none"});
            $(".chicun7").css({"display":"none"});
        }else if(f==1){
            $(".chicun1").css({"display":"none"});
            $(".chicun2").css({"display":"none"});
            $(".chicun3").css({"display":"inline"});
            $(".chicun4").css({"display":"none"});
            $(".chicun5").css({"display":"none"});
            $(".chicun6").css({"display":"none"});
            $(".chicun7").css({"display":"none"});
        }else if(f==2){
            $(".chicun1").css({"display":"none"});
            $(".chicun2").css({"display":"none"});
            $(".chicun3").css({"display":"none"});
            $(".chicun4").css({"display":"inline"});
            $(".chicun5").css({"display":"none"});
            $(".chicun6").css({"display":"none"});
            $(".chicun7").css({"display":"none"});
        }else if(f==3){
            $(".chicun1").css({"display":"none"});
            $(".chicun2").css({"display":"none"});
            $(".chicun3").css({"display":"none"});
            $(".chicun4").css({"display":"none"});
            $(".chicun5").css({"display":"inline"});
            $(".chicun6").css({"display":"none"});
            $(".chicun7").css({"display":"none"});
        }else if(f==4){
            $(".chicun1").css({"display":"none"});
            $(".chicun2").css({"display":"none"});
            $(".chicun3").css({"display":"none"});
            $(".chicun4").css({"display":"none"});
            $(".chicun5").css({"display":"none"});
            $(".chicun6").css({"display":"inline"});
            $(".chicun7").css({"display":"none"});
        }else if(f==5){
            $(".chicun1").css({"display":"none"});
            $(".chicun2").css({"display":"none"});
            $(".chicun3").css({"display":"none"});
            $(".chicun4").css({"display":"none"});
            $(".chicun5").css({"display":"none"});
            $(".chicun6").css({"display":"none"});
            $(".chicun7").css({"display":"inline"});
        }else
        $(this).css({"background":"#bbbbbb"}).siblings("li").css({"background":"#fff"})
    })

       $("#number").change(function(){
           var m=$(this).val();
            var g=(m*200);
           $("#zongji").text(g);
       })



    //$(".pingfen li").hover(function(){
    //    var b=0;
    //    var b=$(this).index();
    //    if(b==0){
    //        $(".pingfen").css({"background-position":"0 -96px"});
    //    }else if(b==1){
    //        $(".pingfen").css({"background-position":"0 -112px"});
    //    }else if(b==2){
    //        $(".pingfen").css({"background-position":"0 -128px"});
    //    }else if(b==3){
    //        $(".pingfen").css({"background-position":"0 -144px"});
    //    }else if(b==4){
    //        $(".pingfen").css({"background-position":"0 -160px"});
    //    }
    //},function(){
    //    $(".pingfen").css({"background-position":"0 0"});
    //})

    $(".pingfen li").click(function(){
        var b=0;
        var b=$(this).index();
        if(b==0){
            $(".pingfen").css({"background-position":"0 -16px"});
        }else if(b==1){
            $(".pingfen").css({"background-position":"0 -32px"});
        }else if(b==2){
            $(".pingfen").css({"background-position":"0 -48px"});
        }else if(b==3){
            $(".pingfen").css({"background-position":"0 -64px"});
        }else if(b==4){
            $(".pingfen").css({"background-position":"0 -80px"});
        }
    })


})