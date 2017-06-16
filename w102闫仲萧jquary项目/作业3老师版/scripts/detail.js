$(function(){
    /*选项卡*/
    $(".tab_menu ul li").click(function(){
    $(this).addClass("selected").siblings("li").removeClass("selected");
        var i=$(this).index();
        $(".tab_box div").eq(i).show().siblings("div").hide();
    })
    /*选项卡*/
    /*尺寸*/
    $(".pro_size ul li").click(function(){
        $(this).addClass("cur").siblings("li").removeClass("cur");
        var t=$(this).text();
        $(".pro_size strong").text(t);
    })
    /*尺寸*/
    /*价格*/
    $("#num_sort").change(function(){
        var v=$(this).val();
        $(".pro_price strong").text(v*200);
    })
    /*价格*/

    /*五星好评*/
    $(".rating li a").click(function(){
        /*parent 上一层*/
        var n=$(this).parent().attr("class");
        /*attr替换属性*/
        $(".rating").attr("class","rating "+n+"star");
    })
    /*五星好评*/
    /*换肤*/
    $("#skin li").click(function(){
        var f=$(this).index();
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $("#cssfile").attr("href","styles/skin/skin_"+f+".css");
    })
    //$("#skin li").click(function(){
    //    var f=(this).index();
    //    $(this).addClass("selected").siblings("li").removeClass("selected");
    //    $("#cssfile").attr("href","styles/skin/skin_"+f+".css");
    //})
    /*换肤*/
    /*下拉列表*/
    $(".nav li").hover(function(){
        $(this).find(".jnNav").slideDown(500);
    },function(){
        $(this).find(".jnNav").slideUp(500);
    })
    /*点击换图片*/
    $(".color_change ul li img").click(function(){
        $(this).addClass("hover").parent().siblings().find("img").removeClass("hover");
        var imgSrc=$(this).attr("src");//完整路径
        var i=imgSrc.lastIndexOf(".");
        var jpg=imgSrc.substring(i);//路径的截取
        imgSrc=imgSrc.substring(0,i);
    $("#bigImg").attr("src",imgSrc+"_one_small" +jpg);
        var color=imgSrc.replace("images/pro_img/","");
        $(".imgList li").hide();
        $(".imgList").find(".imgList_"+color).show();
        $(".imgList").find(".imgList_"+color).eq(0).find("a").click();
        var t=$(this).attr("alt");
        $(".color_change strong").text(t);
    })
})