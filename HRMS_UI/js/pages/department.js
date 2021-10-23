/// <reference path="../jquery.min.js" />



//--------------------创建方法--------------------//
//--------------------功能：加载数据--------------------//
function SelectDepartment() {
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/DepartmentHandler.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectDepartment",//你要执行的方法名
            str: $("#textname").val()
        }, success: function (data) {
            //each循环 类似后台的foreach循环  第一个参数：你要循环的值  第二个参数：回调函数 （a.循环下标，从0开始   b.每一行的值）
            var str;//用来拼接数据行
            $.each(data, function (index, i) {
                str += "<tr>";
                str += "<td><input type='checkbox'  name='chkAll' id='" + i.DepartmentID + "' /></td>";
                str += "<td>" + i.DepartmentID + "</td>";
                str += "<td>" + i.DepartmentName + "</td>";
                str += "<td>" + i.DepartmentRemarks + "</td>";
                str += "<td><button type='button' class='btn btn-gradient-success btn-rounded btn-fw' data-toggle='modal' data-target='#gridSystemModalM' onclick='UpdateDeparment(" + i.DepartmentID + ")' >修改</button >&nbsp;&nbsp;&nbsp;<button type='button' class='btn btn-gradient-danger btn-rounded btn-fw' onclick='DeleteDeparment(" + i.DepartmentID + ")'>删除</button></td >";
                str += "</tr>";
            })
            $("#DepartmentTable tr:gt(0)").remove();
            $("#DepartmentTable").append(str);//将拼接好的行追加到表格中

        }
    });
}

//--------------------创建方法--------------------//
//--------------------功能：删除--------------------//
function DeleteDeparment(id) {

    if (confirm("您确定要删除部门编号为【" + id + "】的部门吗？此操作会删除该部门下的所有员工！！！")) {

        $.ajax({
            type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
            url: "../../Handler/DepartmentHandler.ashx",//json数据库路径  一般处理程序的路径
            dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
            data: {
                Method: "DeleteDepartment",//你要执行的方法名
                id: id
            }, success: function (data) {
                if (data) {
                    alert("删除成功！！");
                    SelectDepartment();//刷新表格
                }
                else {
                    alert("删除失败！！");
                    SelectDepartment();
                }
            }
        });
    };
}

//--------------------创建方法--------------------//
//--------------------功能：删除多行--------------------//
function DeleteAllDeparment() {
    var str = "";//拼接选中复选框ID
    //通过类选择器找到表格中复选框中的选中复选框
    $("input[name='chkAll']:checked").each(function (index, i) {
        str += i.id + ",";
    })
    str = str.substring(0, str.length - 1);//去掉最后的逗号
    if (confirm("您确定要删除部门编号为【" + str + "】的部门吗？此操作会删除该部门下的所有员工！！！")) {

        $.ajax({
            type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
            url: "../../Handler/DepartmentHandler.ashx",//json数据库路径  一般处理程序的路径
            dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
            data: {
                Method: "DeleteAllDepartment",//你要执行的方法名
                str: str
            }, success: function (data) {
                if (data) {
                    alert("删除成功！！");
                    SelectDepartment();//刷新表格
                }
                else {
                    alert("删除失败！！");
                    SelectDepartment();
                }
            }
        });
    }
}

//--------------------创建方法--------------------//
//--------------------功能：添加--------------------//
function InsertDeparment() {
    
    $.ajax({
        type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/DepartmentHandler.ashx",//json数据库路径  一般处理程序的路径
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "InsertDepartment",//你要执行的方法名
            str1: $("#DepartmentName").val(),
            str2: $("#DepartmentRemarks").val()
        }, success: function (data) {
            if (data) {
                alert("添加成功！！");
                SelectDepartment();//刷新表格
                
            }
            else {
                alert("添加失败！！");
                SelectDepartment();
                
            }
        }
    });
}

//--------------------创建方法--------------------//
//--------------------功能：修改--------------------//
function UpdateDeparment(id) {
    //加载数据
    $.ajax({
        type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/DepartmentHandler.ashx",//json数据库路径  一般处理程序的路径
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectDepartmentID",//你要执行的方法名
            id: id
        }, success: function (data) {
            $("#ModifyDepartmentName").val(data[0].DepartmentName);
            $("#ModifyDepartmentRemarks").val(data[0].DepartmentRemarks);
            
        }
    });

    $("#modify").click(function () {
         //修改
        $.ajax({
            type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
            url: "../../Handler/DepartmentHandler.ashx",//json数据库路径  一般处理程序的路径
            dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
            data: {
                Method: "UpdateDepartment",//你要执行的方法名
                str1: id,
                str2: $("#ModifyDepartmentName").val(),
                str3: $("#ModifyDepartmentRemarks").val()
            }, success: function (data) {
                if (data) {
                    alert("修改成功！！");
                    SelectDepartment();//刷新表格
                   
                }
                else {
                    alert("修改失败！！");
                    SelectDepartment();
                    
                }
            }
        });
    });

}


//--------------------页面加载完成后立马执行--------------------//
//--------------------页面加载完成后立马执行--------------------//
//--------------------页面加载完成后立马执行--------------------//
$(function () {

    //加载数据
    SelectDepartment();

    //全选
    $("#titleCHK").change(function () {
        $("input[name='chkAll']").prop("checked", this.checked);
    });

    //点击删除选中
    $("#delete").click(function () {
        DeleteAllDeparment();
    })

    //点击搜索
    $("#select").click(function () {
        SelectDepartment();
    })

    //点击保存
    $("#save").click(function () {
        InsertDeparment();
    });
});