
$(function(){
    /*��������*/
    $("li span").mouseenter(function(){
        $(this).stop().animate({"margin-top":"-40px"},500)
    }).mouseleave(function(){
        $(this).stop().animate({"margin-top":0},500)
    })
    /*��������*/

/*������ͼƬ*/
    $(".chutu").hover(function(){
        $(this).find(".shuangtu").show();
    },function(){
        $(this).find(".shuangtu").hide();
    })
/*������ͼƬ*/
/*���뵭���ֲ�*/
    var n=0;
    function run(){

        n=(n==3)?0:n;//��Ԫ���ʽ���뵭���ֲ�
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

    /*���뵭���ֲ�*/

    /*���´���ģ��*/
    $(".tupian1 li").hover(function(){
        $(this).find("a").stop().animate({"margin-top":"-20px"},1000);
    },function(){
        $(this).find("a").stop().animate({"margin-top":"322px"},1000);
    })
    /*����ģ��*/

    /*����ģ��*/
    $(".tupian2 li").hover(function(){
        $(this).find("a").stop().animate({"opacity":0.8},1000);
    },function(){
        $(this).find("a").stop().animate({"opacity":0},1000);
    })
    /*����ģ��*/
})