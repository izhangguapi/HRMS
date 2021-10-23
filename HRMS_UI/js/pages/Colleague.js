//--------------------创建方法--------------------//
//--------------------功能：加载数据--------------------//
function SelectUserInfo() {
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectUserInfoColleague",//你要执行的方法名
            UserID: getCookie("UserID")
        }, success: function (data) {

            //each循环 类似后台的foreach循环  第一个参数：你要循环的值  第二个参数：回调函数 （a.循环下标，从0开始   b.每一行的值）
            var str;//用来拼接数据行
            $.each(data, function (index, i) {

                var sex = i.UserSex > 0 ? "男" : "女";
                var myclass = i.UserSex > 0 ? "table-info" : "table-danger";
                str += "<tr class='" + myclass + "'>";
                if (i.ImgUrl == "") {
                    str += "<td class='py-1'><img src='/amazeui/img/hu.jpg' alt='" + i.UserName + "'/></td>";
                } else {
                    $.ajax({
                        type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
                        async: false ,
                        url: "../../Handler/PersonalData.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
                        dataType: "text",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
                        data: {
                            Method: "ImgToBase64String",//你要执行的方法名
                            UserID: i.UserID
                        }, success: function (data) {
                            var imgurl = "data:image/jgp;base64," + data
                            str += "<td class='py-1'><img src='" + imgurl + "' alt='" + i.UserName + "'/></td>";

                        }
                    });
                }
                str += "<td>" + i.UserNumber + "</td>";
                str += "<td>" + i.UserName + "</td>";
                str += "<td>" + i.UserAge + "</td>";
                str += "<td>" + sex + "</td>";
                str += "<td>" + i.UserIphone + "</td>";
                str += "<td>" + i.UserAddress + "</td>";
                str += "<td>" + i.DimissionTime.substring(0, 10) + "</td>";
                str += "</tr>";
            })
            $("#Colleague tr:gt(0)").remove();
            $("#Colleague").append(str);//将拼接好的行追加到表格中

        }
    });
}


$(function () {
    SelectUserInfo();
})