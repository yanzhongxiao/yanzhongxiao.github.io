function checkName(){
    var a=document.getElementById("name").value;
    if(a.length>=3){
        document.getElementById("nameSpan").innerHTML="姓名格式正确";
    }else{
        document.getElementById("nameSpan").innerHTML="姓名不能小于三位";
    }
}
function miMa(){
    var a=document.getElementById("pwd1").value;
    if(a==""){
        document.getElementById("pwd1Span").innerHTML="不能为空";
    }else if(a.length<6){
        document.getElementById("pwd1Span").innerHTML="密码不能小于6位";
    }else if(a.length>10){
        document.getElementById("pwd1Span").innerHTML="不能大于10位";
    }else if(!isNaN(a)){
        document.getElementById("pwd1Span").innerHTML="密码不能为纯数字";
    }else{
        document.getElementById("pwd1Span").innerHTML="ok";
    }
}
function xmiMa(){
    var a=document.getElementById("pwd1").value;
    var b=document.getElementById("pwd2").value;
    if(a!=b){
        document.getElementById("pwd1Span").innerHTML="两次输入不一致";
    }else{
        document.getElementById("pwd1Span").innerHTML="一致";
    }
}
function checkAge(){
    var a=document.getElementById("age").value;
    if(a==""){
        document.getElementById("ageSpan").innerHTML="请输入年龄";
    }else if(isNaN(a)){
        document.getElementById("ageSpan").innerHTML="请输入数字";
    }else if(a<18){
        document.getElementById("ageSpan").innerHTML="未成年";
    }else if(a>100){
        document.getElementById("ageSpan").innerHTML="tai lao";
    }else{
        document.getElementById("ageSpan").innerHTML="ok";
    }
}
function checkId(){
    var a=document.getElementById("idCard").value;
    var b=/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
    if(b.test(a)){
        document.getElementById("idCardSpan").innerHTML="ok";
    }else{
        document.getElementById("idCardSpan").innerHTML="no";
    }
}
function checkNum(){
    var a=document.getElementById("phoneNum").value;
    var b=/^1\d{10}$/;
    if(b.test(a)){
        document.getElementById("phoneNumSpan").innerHTML="手机格式正确";
    }else{
        document.getElementById("phoneNumSpan").innerHTML="手机格式错误";
    }
}
function checkEmail(){
    var a=document.getElementById("email").value;
    var b=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(b.test(a)){
        document.getElementById("emailSpan").innerHTML="邮箱格式正确";
    }else{
        document.getElementById("emailSpan").innerHTML="邮箱格式错误";
    }
}
function checkAll(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("name").value;
    var id=document.getElementById("name").value;
    var num=document.getElementById("name").value;
    var youxiang=document.getElementById("name").value;
    var mima=document.getElementById("name").v
    alue;
    var mima2=document.getElementById("name").value;
    if(name==""||id==""||num==""||youxiang==""||mima==""||mima2==""){
        alert("姓名，身份证号，邮箱，密码，确认密码必填")
    }
}