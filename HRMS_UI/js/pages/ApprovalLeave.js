$("#UpdateLeave").click(function () {
    UpdateLeave();
});

//--------------------创建方法--------------------//
//--------------------功能：加载数据--------------------//
function SelectLeave() {

    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/Leave.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectLeave",//你要执行的方法名
            UserID: getCookie("UserID")
        }, success: function (data) {
            //each循环 类似后台的foreach循环  第一个参数：你要循环的值  第二个参数：回调函数 （a.循环下标，从0开始   b.每一行的值）
            var str;//用来拼接数据行
            $.each(data, function (index, i) {

                if (i.LeaveState == 1) {
                    var ApprovalTime = i.ApprovalTime.replace("T", " ");
                    var text = "已同意";
                    var color = "table-success";
                    var btncolor = "btn btn-gradient-success btn-rounded btn-fw";
                } else if (i.LeaveState == 2) {
                    var ApprovalTime = i.ApprovalTime.replace("T", " ");
                    var text = "不同意";
                    var color = "table-danger";
                    var btncolor = "btn btn-gradient-danger btn-rounded btn-fw";
                } else {
                    var ApprovalTime = "";
                    var text = "未审批";
                    var color = "table-warning";
                    var btncolor = "btn btn-gradient-warning btn-rounded btn-fw";
                }
                str += "<tr class='" + color+"'>";
                str += "<td>" + i.LeaveID + "</td>";
                str += "<td>" + i.UserName + "</td>";
                str += "<td>" + i.LeaveTime.substring(0, 10) + "</td>";
                str += "<td>" + i.LeaveStartTime.replace("T", " ").substring(0, 19) + "至" + i.LeaveEndTime.replace("T", " ").substring(0, 19) + "</td>";
                str += "<td>" + i.LeaveDays + "</td>";
                str += "<td>" + i.LeaveReason + "</td>";
                str += "<td>" + text + "</td>";
                str += "<td>" + i.ApproverName + "</td>";
                str += "<td>" + ApprovalTime + "</td>";
                str += "<td>" + i.ApproverReason + "</td>";
                str += "<td>";
                str += "<button type='button' class='" + btncolor + "' data-toggle='modal' data-target='.bs-example-modal-sm' onclick='Approval(" + i.LeaveID + ")'>" + text + "</button>";
                str += "</td > ";
                str += "</tr>";
            })
            $("#LeaveTable tr:gt(0)").remove();
            $("#LeaveTable").append(str);//将拼接好的行追加到表格中



        }
    });
}
//--------------------创建方法--------------------//
//--------------------功能：点击按钮（查找数据）--------------------//
function Approval(id) {
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/Leave.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "AuditStatus",//你要执行的方法名
            LeaveID: id
        }, success: function (data) {
            if (data[0].LeaveState == 1) {
                $("#AuditStatus").text("审核通过");
                $("#AuditStatus").attr("class", "text-success");
            } else if (data[0].LeaveState == 2) {
                $("#AuditStatus").text("审核不通过");
                $("#AuditStatus").attr("class", "text-danger");
            } else {
                $("#AuditStatus").text("未审核");
                $("#AuditStatus").attr("class", "text-warning");
            }
            $("#LeaveID").val(data[0].LeaveID);
            $("#LeaveState").val(data[0].LeaveState);
            $("#ApproverReason").val(data[0].ApproverReason);
        }
    });

}

//--------------------创建方法--------------------//
//--------------------功能：请假审核（更新数据库）--------------------//
function UpdateLeave() {
    if ($("#LeaveState").val() == "" || $("#ApproverReason").val() == "") {
        alert("请输入完整的信息");
        return;
    }
    $.ajax({
        type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/Leave.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "text",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "UpdateLeave",//你要执行的方法名
            LeaveID: $("#LeaveID").val(),
            UserName: getCookie("UserName"),
            LeaveState: $("#LeaveState").val(),
            ApproverReason: $("#ApproverReason").val()
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