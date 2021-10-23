$(function () {
    $("#btnLogin").click(function () {
        //ajax访问后台
        $.ajax({
            type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
            url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
            dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
            data: {
                Method: "Login",//你要执行的方法名
                //传参数
                uid: $("#uid").val(),//获取登录名 通过id选择器找到登录文本框  val获取文本框value值
                pwd: $("#pwd").val()//获取密码 通过id选择器找到登录文本框  val获取文本框value值
            }, success: function (data) {
                if (data != "1") {
                    //登录成功
                    setCookie("UserNumber", data[0].UserNumber);
                    setCookie("UserID", data[0].UserID);//把UserID存在cookies
                    setCookie("UserName", data[0].UserName);//把UserID存在cookies
                    window.location.href = "Home.aspx";
                }
                else {
                    alert("用户名或密码错误！！！");
                }
               
            }
        });
    });
});