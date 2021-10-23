function reinitIframe() {
    var iframe = document.getElementById("iframe");
    try {
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.max(bHeight, dHeight);
        iframe.height = height;
        console.log(height);
    } catch (ex) { }
}
window.setInterval("reinitIframe()", 200);

//清除所有选择样式
function mycolor() {
    $("#glym").attr("class", "nav-item");
    $("#yggl").attr("class", "nav-link");
    $("#bmgl").attr("class", "nav-link");
    $("#qjgl").attr("class", "nav-link");
    $("#grzl").attr("class", "nav-item");
    $("#ckts").attr("class", "nav-item");
    $("#sqqj").attr("class", "nav-item");
    $("#testtt").attr("class", "nav-item");
}

//跳转部门管理
$("#bmgl").click(function () {
    mycolor();
    $("#glym").attr("class", "nav-item active");
    $("#bmgl").attr("class", "nav-link active");
    $("#iframe").attr("src", "Department.aspx");
});
//跳转员工管理
$("#yggl").click(function () {
    mycolor();
    $("#glym").attr("class", "nav-item active");
    $("#yggl").attr("class", "nav-link active");
    $("#iframe").attr("src", "User.aspx");
});
//跳转请假管理
$("#qjgl").click(function () {
    mycolor();
    $("#glym").attr("class", "nav-item active");
    $("#qjgl").attr("class", "nav-link active");
    $("#iframe").attr("src", "ApprovalLeave.aspx");
});
//跳转个人资料
$("#grzl").click(function () {
    mycolor();
    $("#grzl").attr("class", "nav-item active");
    $("#iframe").attr("src", "PersonalData.aspx");
});
//跳转申请请假
$("#sqqj").click(function () {
    mycolor();
    $("#sqqj").attr("class", "nav-item active");
    $("#iframe").attr("src", "Leave.aspx");
});
//测试页面
$("#ckts").click(function () {
    mycolor();
    $("#ckts").attr("class", "nav-item active");
    $("#iframe").attr("src", "Colleague.aspx");
});

//获得焦点显示，失去焦点隐藏
$("#Password").focus(function () {
    $("#Password").attr("type", "text");//得到焦点显示密码
});
$("#Password").blur(function () {
    $("#Password").attr("type", "password");//失去焦点隐藏密码
});
$("#NewPassword1").focus(function () {
    $("#NewPassword1").attr("type", "text");//得到焦点显示密码
});
$("#NewPassword1").blur(function () {
    $("#NewPassword1").attr("type", "password");//失去焦点隐藏密码
    var str1 = /^[\w\x21-\x7e]{5,20}$/;
    var str2 = $("#NewPassword1").val();
    if ($("#NewPassword1").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“密码”");
        $("#NewPassword1").val("");
    }
});
$("#NewPassword2").focus(function () {
    $("#NewPassword2").attr("type", "text");//得到焦点显示密码
});
$("#NewPassword2").blur(function () {
    $("#NewPassword2").attr("type", "password");//失去焦点隐藏密码
    var str1 = /^[\w\x21-\x7e]{5,20}$/;
    var str2 = $("#NewPassword2").val();
    if ($("#NewPassword2").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“密码”");
        $("#NewPassword2").val("");
    }
});

//退出按钮
$("#SignOut").click(function () {
    delCookie("UserID");
    window.location.href = "Login.aspx";
});

//确认修改密码
$("#ChangePassword").click(function () {
    if ($("#NewPassword1").val() == "" || $("#NewPassword2").val() == ""){
        alert("请输入完整");
        return;
    }
    if ($("#NewPassword2").val() != $("#NewPassword1").val()) {
        alert("两次输入密码不正确。");
        return;
    }
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "ChangePasswordSelect",//你要执行的方法名
            UserID: getCookie("UserID"),
            LoginPwd: $("#Password").val()
        }, success: function (data) {
            if ($("#Password").val() == data[0].LoginPwd) {
                alert(getCookie("UserID"));
                alert(data[0].LoginName)
            }
            else {
                alert("原密码不正确，请重试。");
            }
        }
    });
});

$(function () {
    //判断登录人的职级
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectUserInfoID",//你要执行的方法名
            UserID: getCookie("UserID")
        }, success: function (data) {
            
            $("#Name").text(data[0].UserName);
            $("#Role").text(data[0].RoleName);
            $("#Department").text(data[0].DepartmentName);
            if (data[0].RoleName == "员工") {
                $("#glym").hide();//隐藏管理页面
            } else if (data[0].RoleName == "人事助理") {
                $("#glym").hide();//隐藏管理页面
            } else if (data[0].RoleName == "人事经理") {
                $("#glym").hide();//隐藏管理页面
            }

        }
    });

    //查找头像文件是否存在,且替换
    $.ajax({
        url: "/Handler/PersonalData.ashx",
        dataType: "text",
        type: "post",
        data: {
            Method: "ImgToBase64String",
            UserID: getCookie("UserID")
        }, success: function (data) {
            if (data != "") {
                $("#tx1").attr("src", "data:image/jgp;base64," + data);
                $("#tx2").attr("src", "data:image/jgp;base64," + data);
            } else {
                return;
            }
            
        }
    });

});