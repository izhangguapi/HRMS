/// <reference path="../jquery.min.js" />

//时间控件
lay('#version').html('-v' + laydate.v);
laydate.render({
    elem: '#DimissionTime' //指定元素
});
laydate.render({
    elem: '#DimissionTimeM' //指定元素
});

//--------------------创建方法--------------------//
//--------------------功能：加载数据--------------------//
function SelectUserInfo() {
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectUserInfo",//你要执行的方法名
        }, success: function (data) {

            //each循环 类似后台的foreach循环  第一个参数：你要循环的值  第二个参数：回调函数 （a.循环下标，从0开始   b.每一行的值）
            var str;//用来拼接数据行
            $.each(data, function (index, i) {

                var sex = i.UserSex > 0 ? "男" : "女"
                var statr = i.UserStatr > 0 ? "是" : "否"

                str += "<tr>";
                str += "<td><input type='checkbox'  name='chkAll' id='" + i.UserID + "' /></td>";
                str += "<td>" + i.DepartmentName + "</td>";
                str += "<td>" + i.RoleName + "</td>";
                str += "<td>" + i.UserNumber + "</td>";
                str += "<td>" + i.LoginName + "</td>";
                str += "<td>" + i.LoginPwd + "</td>";
                str += "<td>" + i.UserName + "</td>";
                str += "<td>" + i.UserAge + "</td>";
                str += "<td>" + sex + "</td>";
                str += "<td>" + i.UserIphone + "</td>";
                str += "<td>" + i.UserAddress + "</td>";
                str += "<td>" + statr + "</td>";
                str += "<td>" + i.EntryTime.replace("T", " ") + "</td>";
                str += "<td>" + i.DimissionTime.substring(0, 10) + "</td>";
                str += "<td>" + i.BasePay + "</td>";
                str += "<td><button type='button' class='btn btn-gradient-success btn-rounded btn-fw' data-toggle='modal' data-target='#gridSystemModalM' onclick='UpdateUserInfo(" + i.UserID + ")' >修改</button ><button type='button' class='btn btn-gradient-danger btn-rounded btn-fw' onclick='DeleteUserInfo(" + i.UserID + ")'>删除</button></td >";
                str += "</tr>";
            })
            $("#UserInfoTable tr:gt(0)").remove();
            $("#UserInfoTable").append(str);//将拼接好的行追加到表格中

        }
    });
}

//--------------------创建方法--------------------//
//--------------------功能：加载下拉框--------------------//
function DropdownBox() {
    //加载部门下拉框
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/DepartmentHandler.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectDepartment",//你要执行的方法名
            str: ""
        }, success: function (data) {

            //each循环 类似后台的foreach循环  第一个参数：你要循环的值  第二个参数：回调函数 （a.循环下标，从0开始   b.每一行的值）
            var str;//用来拼接数据行
            $.each(data, function (index, i) {
                str += "<option value='" + i.DepartmentID + "'>" + i.DepartmentName + "</option>";
            })
            $("#DepartmentID tr:gt(0)").remove();
            $("#DepartmentID").append(str);//将拼接好的行追加到表格中
            $("#DepartmentIDM tr:gt(0)").remove();
            $("#DepartmentIDM").append(str);
        }
    });

    //加载职位下拉框
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/RolesHandler.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "LoadRoles",//你要执行的方法名
        }, success: function (data) {

            //each循环 类似后台的foreach循环  第一个参数：你要循环的值  第二个参数：回调函数 （a.循环下标，从0开始   b.每一行的值）
            var str;//用来拼接数据行
            $.each(data, function (index, i) {
                str += "<option value='" + i.RoleID + "'>" + i.RoleName + "</option>";
            })
            $("#RoleID tr:gt(0)").remove();
            $("#RoleID").append(str);//将拼接好的行追加到表格中
            $("#RoleIDM tr:gt(0)").remove();
            $("#RoleIDM").append(str);

        }
    });
}


//--------------------创建方法--------------------//
//--------------------功能：删除--------------------//
function DeleteUserInfo(id) {

    if (confirm("您确定要删除序号为【" + id + "】的公司成员吗？")) {

        $.ajax({
            type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
            url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径
            dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
            data: {
                Method: "DeleteUserInfo",//你要执行的方法名
                id: id
            }, success: function (data) {
                if (data) {
                    alert("删除成功！！");
                    SelectUserInfo();//刷新表格
                }
                else {
                    alert("删除失败！！");
                    SelectUserInfo();
                }


            }
        });
    }

}

//--------------------创建方法--------------------//
//--------------------功能：删除多行--------------------//
function DeleteAllUserInfo() {
    var str = "";//拼接选中复选框ID
    //通过类选择器找到表格中复选框中的选中复选框
    $("input[name='chkAll']:checked").each(function (index, i) {
        str += i.id + ",";
    })
    str = str.substring(0, str.length - 1);//去掉最后的逗号
    if (confirm("您确定要删除部门编号为【" + str + "】的部门吗？此操作会删除该部门下的所有员工！！！")) {

        $.ajax({
            type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
            url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径
            dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
            data: {
                Method: "DeleteAllUserInfo",//你要执行的方法名
                str: str
            }, success: function (data) {
                if (data) {
                    alert("删除成功！！");
                    SelectUserInfo();//刷新表格
                }
                else {
                    alert("删除失败！！");
                    SelectUserInfo();
                }
            }
        });
    }
}

//--------------------创建方法--------------------//
//--------------------功能：修改--------------------//
function UpdateUserInfo(id) {
    //加载数据
    $('#UpdateUserSex1').removeAttr("checked");
    $('#UpdateUserSex2').removeAttr("checked");
    $('#UpdateUserStatr1').removeAttr("checked");
    $('#UpdateUserStatr2').removeAttr("checked");
    $.ajax({
        type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectUserInfoID",//你要执行的方法名
            UserID: id
        }, success: function (data) {
            $("#DepartmentIDM").val(data[0].DepartmentID);
            $("#RoleIDM").val(data[0].RoleID);
            $("#UserNumberM").val(data[0].UserNumber);
            $("#LoginNameM").val(data[0].LoginName);
            $("#LoginPwdM").val(data[0].LoginPwd);
            $("#UserNameM").val(data[0].UserName);
            $("#UserAgeM").val(data[0].UserAge);
            $("input[name='UserSexM']:checked").val(data[0].UserSex);
            if (data[0].UserSex == 1) {
                $("#UpdateUserSex1").attr("checked", "checked")
            } else {
                $("#UpdateUserSex2").attr("checked", "checked");
            };
            $("#UserIphoneM").val(data[0].UserIphone);
            $("#UserAddressM").val(data[0].UserAddress);
            $("input[name='UserStatrM']:checked").val(data[0].UserStatr);
            if (data[0].UserStatr == 1) {
                $("#UpdateUserStatr1").attr("checked", "checked")
            } else {
                $("#UpdateUserStatr2").attr("checked", "checked");
            };
            $("#DimissionTimeM").val(data[0].DimissionTime.substring(0, 10));
            $("#BasePayM").val(data[0].BasePay);
            
        }
    });

    $("#modify").click(function () {
        //修改
        $.ajax({
            type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
            url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径
            dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
            data: {
                Method: "UpdateUserInfo",//你要执行的方法名
                str1: id,
                str2: $("#DepartmentIDM").val(),
                str3: $("#RoleIDM").val(),
                str4: $("#UserNumberM").val(),
                str5: $("#LoginNameM").val(),
                str6: $("#LoginPwdM").val(),
                str7: $("#UserNameM").val(),
                str8: $("#UserAgeM").val(),
                str9: $("input[name='UserSexM']:checked").val(),
                str10: $("#UserIphoneM").val(),
                str11: $("#UserAddressM").val(),
                str12: $("input[name='UserStatrM']:checked").val(),
                str13: $("#DimissionTimeM").val(),
                str14: $("#BasePayM").val()

            }, success: function (data) {
                if (data) {
                    alert("修改成功！！");
                    SelectUserInfo();//刷新表格

                }
                else {
                    alert("修改失败！！");
                    SelectUserInfo();

                }
            }
        });
        $("$UpdateUserSex1").attr("checked", "");
        $("$UpdateUserSex2").attr("checked", "");
        $("UpdateUserStat1").attr("checked", "")
        $("UpdateUserStat2").attr("checked", "")
    });

}

//--------------------创建方法--------------------//
//--------------------功能：添加--------------------//
function InsertUserInfo() {
    //自动获取用户编号
    AutomaticUserNum();
    var DepartmentID = $("#DepartmentID").val();
    var RoleID = $("#RoleID").val();
    var UserNumber = $("#UserNumber").val();
    var LoginName = $("#LoginName").val();
    var LoginPwd = $("#LoginPwd").val();
    var UserName = $("#UserName").val();
    var UserAge = $("#UserAge").val();
    var UserSex = $("input[name='UserSex']:checked").val();
    var UserIphone = $("#UserIphone").val();
    var UserAddress = $("#UserAddress").val();
    var UserStatr = $("input[name='UserStatr']:checked").val();
    var DimissionTime = $("#DimissionTime").val();
    var BasePay = $("#BasePay").val();

    //判断输入的是否有空值
    var add = new Array(UserNumber, LoginName, LoginPwd, UserName, UserAge, UserIphone, UserAddress, DimissionTime, BasePay)//定义数组
    var num = 0;//定义数组记录几个是空值
    for (var i = 0; i < add.length; i++) {
        if (add[i] == "") {
            num += 1;//如果有空值num就+1
        }
    }

    if (num != 0) {
        alert("请输入完整的信息");//如果num不为0 就弹窗提示
    } else {
        alert(5);
        $.ajax({
            type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
            url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径
            dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
            data: {
                Method: "InsertUserInfo",//你要执行的方法名
                str1: DepartmentID,
                str2: RoleID,
                str3: UserNumber,
                str4: LoginName,
                str5: LoginPwd,
                str6: UserName,
                str7: UserAge,
                str8: UserSex,
                str9: UserIphone,
                str10: UserAddress,
                str11: UserStatr,
                str12: DimissionTime,
                str13: BasePay
            }, success: function (data) {
                if (data) {
                    alert("添加成功！！");
                    SelectUserInfo();//刷新表格
                }
                else {
                    alert("添加失败！！");
                    SelectUserInfo();
                }
            }
        });
    }
}


//--------------------创建方法--------------------//
//--------------------功能：自动获取用户编号--------------------//
function AutomaticUserNum() {
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectUserInfoCount",//你要执行的方法名
        }, success: function (data) {
            var num = data[0].num + 1;
            if (num < 10) {
                num = '00' +num;//小于10补上两个0
            } else if (data[0].num < 100) {
                num = '0' + num;//小于100补上一个0
            } else {
                num = data[0].num;
            }
            var str1 = $("#DimissionTime").val();
            var str2 = str1.replace(/-/g, "") + num;//清除日期文本框的值中的“-”
            $("#UserNumber").val(str2);//赋值给用户编号
        }
    });
}


//--------------------全选--------------------//
$("#titleCHK").change(function () {
    $("input[name='chkAll']").prop("checked", this.checked);
});
//--------------------自动获取--------------------//
$("#AutomaticUserNum").click(function () {
    AutomaticUserNum();
});
//--------------------点击添加--------------------//
$("#save").click(function () {
    InsertUserInfo();
});
//--------------------点击搜索--------------------//
$("#SelectUserInfo").click(function () {
    SelectUserInfo();
}); 
//--------------------删除选中--------------------//
$("#DeleteAllUserInfo").click(function () {
    DeleteAllUserInfo();
});
//--------------------开始：判断输入的是否符合要求--------------------//
//姓名
$("#UserName").blur(function () {
    var str1 = /^[\u4E00-\u9FA5]{2,4}$/;
    var str2 = $("#UserName").val();
    if ($("#UserName").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“姓名”");
        $("#UserName").val("");
    }
});
$("#UserNameM").blur(function () {
    var str1 = /^[\u4E00-\u9FA5]{2,4}$/;
    var str2 = $("#UserNameM").val();
    if ($("#UserNameM").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“姓名”");
        $("#UserNameM").val("");
    }
});
//登录名
$("#LoginName").blur(function () {
    var str1 = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
    var str2 = $("#LoginName").val();
    if ($("#LoginName").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“登录名”");
        $("#LoginName").val("");
    }
});
$("#LoginNameM").blur(function () {
    var str1 = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
    var str2 = $("#LoginNameM").val();
    if ($("#LoginNameM").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“登录名”");
        $("#LoginNameM").val("");
    }
});
//密码
$("#LoginPwd").focus(function () {
    $("#LoginPwd").attr("type", "text");//得到焦点显示密码
});
$("#LoginPwd").blur(function () {
    $("#LoginPwd").attr("type", "password");//失去焦点隐藏密码
    var str1 = /^[\w\x21-\x7e]{5,20}$/;
    var str2 = $("#LoginPwd").val();
    if ($("#LoginPwd").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“密码”");
        $("#LoginPwd").val("");
    }
});
$("#LoginPwdM").focus(function () {
    $("#LoginPwdM").attr("type", "text");//得到焦点显示密码
});
$("#LoginPwdM").blur(function () {
    $("#LoginPwdM").attr("type", "password");//失去焦点隐藏密码
    var str1 = /^[\w\x21-\x7e]{5,20}$/;
    var str2 = $("#LoginPwdM").val();
    if ($("#LoginPwdM").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“密码”");
        $("#LoginPwdM").val("");
    }
});
//年龄
$("#UserAge").blur(function () {
    var str1 = /^(1[89]|[2-5]\d|60)$/;
    var str2 = $("#UserAge").val();
    if ($("#UserAge").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("输入的年龄不在法定范围之内");
        $("#UserAge").val("");
    }
});
$("#UserAgeM").blur(function () {
    var str1 = /^(1[89]|[2-5]\d|60)$/;
    var str2 = $("#UserAgeM").val();
    if ($("#UserAgeM").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("输入的年龄不在法定范围之内");
        $("#UserAgeM").val("");
    }
});
//工资
$("#BasePay").blur(function () {
    var str1 = /^\+?[1-9]\d{3,8}?$/;
    var str2 = $("#BasePay").val();
    if ($("#BasePay").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“薪资”");
        $("#BasePay").val("");
    }
});
$("#BasePayM").blur(function () {
    var str1 = /^\+?[1-9]\d{3,8}?$/;
    var str2 = $("#BasePayM").val();
    if ($("#BasePayM").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“薪资”");
        $("#BasePayM").val("");
    }
});
//手机号码
$("#UserIphone").blur(function () {
    var str1 = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    var str2 = $("#UserIphone").val();
    if ($("#UserIphone").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“手机号码”");
        $("#UserIphone").val("");
    }
});
$("#UserIphoneM").blur(function () {
    var str1 = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    var str2 = $("#UserIphoneM").val();
    if ($("#UserIphoneM").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“手机号码”");
        $("#UserIphoneM").val("");
    }
});
    //地址
    //--------------------结束：判断输入的是否符合要求--------------------//

//--------------------页面加载完成后立马执行--------------------//
//--------------------页面加载完成后立马执行--------------------//
//--------------------页面加载完成后立马执行--------------------//
$(function () {

    //加载数据
    SelectUserInfo();

    //加载部门、职位下拉框
    DropdownBox();

});
