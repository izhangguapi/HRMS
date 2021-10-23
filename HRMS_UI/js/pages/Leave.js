//时间控件
lay('#version').html('-v' + laydate.v);
laydate.render({
    elem: '#LeaveTime'
    , type: 'datetime'
    , range: true
});

//禁止输入审核人和备注
$("#ApproverName").focus(function () {
    $("#ApproverName").blur();
});
$("#ApproverReason").focus(function () {
    $("#ApproverReason").blur();
});
$("#ApprovalTime").focus(function () {
    $("#ApprovalTime").blur();
});

//点击请假申请
$("#InsertLeave").click(function () {
    InsertLeave();
});

//--------------------创建方法--------------------//
//--------------------功能：加载数据--------------------//
function SelectLeave() {
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/Leave.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectLeaveID",//你要执行的方法名
            UserID: getCookie("UserID")
        }, success: function (data) {
            //each循环 类似后台的foreach循环  第一个参数：你要循环的值  第二个参数：回调函数 （a.循环下标，从0开始   b.每一行的值）
            var str;//用来拼接数据行
            $.each(data, function (index, i) {

                str += "<tr>";
                str += "<td>" + i.LeaveTime.substring(0, 10) + "</td>";
                str += "<td>" + i.LeaveStartTime.replace("T", " ") + "</td>";
                str += "<td>" + i.LeaveEndTime.replace("T", " ") + "</td>";
                str += "<td>" + i.LeaveReason + "</td>";
                str += "<td>";
                if (i.LeaveState == 1) {
                    var color = "btn btn-success btn-rounded btn-fw";
                    var text = "审核通过";
                } else if (i.LeaveState == 2) {
                    var color = "btn btn-danger btn-rounded btn-fw";
                    var text = "审核不通过";
                } else {
                    var color = "btn btn-warning btn-rounded btn-fw";
                    var text = "审核中";
                }
                str += "<button type='button' class='" + color + "' data-toggle='modal' data-target='.bs-example-modal-sm' onclick='AuditStatus(" + i.LeaveID + ")'>" + text + "</button>";
                str += "&nbsp;&nbsp;&nbsp;";
                str += "<button type='button' class='btn btn-danger btn-rounded btn-fw' onclick='DeleteLeave(" + i.LeaveID + ")'>删除</button>";
                str += "</td > ";
                str += "</tr>";
            })
            $("#LeaveTable tr:gt(0)").remove();
            $("#LeaveTable").append(str);//将拼接好的行追加到表格中



        }
    });
}

//--------------------创建方法--------------------//
//--------------------功能：查看审核状态--------------------//
function AuditStatus(id) {
    $.ajax({
        type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/Leave.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "AuditStatus",//你要执行的方法名
            LeaveID: id
        }, success: function (data) {
            if (data[0].LeaveState == 1) {
                $("#AuditStatus").text("审核通过");
                $("#AuditStatus").attr("class", "text-success");
                $("#ApprovalTime").val(data[0].ApprovalTime.replace("T", " "));

            } else if (data[0].LeaveState == 2) {
                $("#AuditStatBtn").text("审核不通过");
                $("#AuditStatus").text("审核不通过");
                $("#AuditStatus").attr("class", "text-danger");
                $("#ApprovalTime").val(data[0].ApprovalTime.replace("T", " "));
            } else {
                $("#AuditStatBtn").text("审核中");
                $("#AuditStatus").text("审核中");
                $("#AuditStatus").attr("class", "text-warning");
                $("#ApprovalTime").val("");
            }
            $("#ApproverName").val(data[0].ApproverName);
            $("#ApproverReason").val(data[0].ApproverReason);


        }
    });
}

//--------------------创建方法--------------------//
//--------------------功能：查看审核状态--------------------//
function DeleteLeave(id) {
    $.ajax({
        type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/Leave.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "text",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "DeleteLeave",//你要执行的方法名
            LeaveID: id
        }, success: function (data) {
            alert(data);
            SelectLeave();
        }
    });
}

//--------------------创建方法--------------------//
//--------------------功能：请假申请--------------------//
function InsertLeave() {
    var date = new Date();
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var ss = date.getSeconds() < 10 ? '0' + date.getDate() : date.getSeconds();
    var time = new Date(Y + M + D + hh + mm + ss);

    var LeaveStartTime = new Date($("#LeaveTime").val().substring(0, 19));
    var LeaveEndTime = new Date($("#LeaveTime").val().substring(22, 41));

    if ($("#LeaveTime").val() == "" || $("#LeaveReason").val() == "") {
        alert("请输入完整的信息");
        return;
    } else if (time.getTime() - LeaveStartTime.getTime() > 0) {
        alert("你这是想穿越时空吗？请假请到前面去了？？？");
        return;
    }

    


    

    var diff = LeaveEndTime.getTime() - LeaveStartTime.getTime();//时间差的毫秒数

    //计算出相差天数
    var days = Math.floor(diff / (24 * 3600 * 1000));

    //计算出小时数
    var leave1 = diff % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));

    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);

    var returnStr = "";
    if (seconds > 0) {
        returnStr = seconds + "秒";
    }
    if (minutes > 0) {
        returnStr = minutes + "分" + returnStr;
    }
    if (hours > 0) {
        returnStr = hours + "小时" + returnStr;
    }
    if (days > 0) {
        returnStr = days + "天" + returnStr;
    }
    $.ajax({
        type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/Leave.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "text",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "InsertLeave",//你要执行的方法名
            UserID: getCookie("UserID"),
            LeaveStartTime: $("#LeaveTime").val().substring(0, 19),
            LeaveEndTime: $("#LeaveTime").val().substring(22, 41),
            LeaveDays: returnStr,
            LeaveReason: $("#LeaveReason").val()
        }, success: function (data) {
            alert(data);
            SelectLeave();
        }
    });
}

//---------------------------------------------------------------------------------
$(function () {
    SelectLeave();
});