<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ApprovalLeave.aspx.cs" Inherits="HRMS_UI.ApprovalLeave" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <link rel="stylesheet" href="../../vendors/iconfonts/mdi/css/materialdesignicons.min.css" />
    <link rel="stylesheet" href="../../vendors/css/vendor.bundle.base.css" />
    <link rel="stylesheet" href="../../css/style.css" />
    <link rel="shortcut icon" href="../../images/favicon.png" />
</head>
<body>

    <div class="col-lg-12 stretch-card" style="text-align: center">
        <div class="card">
            <div class="card-body">

                <table class="table table-bordered" id="LeaveTable">
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>姓名</th>
                            <th>请假时间</th>
                            <th>开始时间 - 结束时间</th>
                            <th>请假天数</th>
                            <th>请假原因</th>
                            <th>审批状态</th>
                            <th>审批人</th>
                            <th>审批时间</th>
                            <th>审批备注</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-info">
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!--开始：弹窗审批-->
    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content " style="background-color: white;">

                <!--审核状态-->
                <div class="modal-header">
                    <h4 class="modal-title"><b class="" id="AuditStatus">审批状态</b></h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <!--中间内容-->
                <div class="card-body">
                    <!--审批状态-->
                    <input id="LeaveID" hidden="hidden" />
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">审批状态</label>
                          <div class="col-sm-9">
                            <select class="form-control" id ="LeaveState">
                              <option value="1">同意</option>
                              <option value="2">不同意</option>
                            </select>
                          </div>
                        </div>
                 

                    <!--备注-->
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">备注</label>
                        <div class="col-sm-9">
                            <textarea class="form-control" id="ApproverReason" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <!--底部按钮-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-fw" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-success btn-fw" data-dismiss="modal" id="UpdateLeave">审批</button>
                </div>
            </div>
        </div>
    </div>
    <!--结束：弹窗审批-->



    <script src="../../vendors/js/vendor.bundle.base.js"></script>
    <script src="../../vendors/js/vendor.bundle.addons.js"></script>
    <script src="../../js/off-canvas.js"></script>
    <script src="../../js/misc.js"></script>
    <script src="../../js/file-upload.js"></script>
    <style>
        body {
            padding: 20px;
        }

        .demo-input {
            padding-left: 10px;
            height: 38px;
            min-width: 262px;
            line-height: 38px;
            border: 1px solid #e6e6e6;
            background-color: #fff;
            border-radius: 2px;
        }
    </style>
    <script src="js/MyCookies.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/pages/ApprovalLeave.js"></script>
</body>
</html>
