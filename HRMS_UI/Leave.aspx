<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Leave.aspx.cs" Inherits="HRMS_UI.Leave" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <link rel="stylesheet" href="../../vendors/iconfonts/mdi/css/materialdesignicons.min.css" />
    <link rel="stylesheet" href="../../vendors/css/vendor.bundle.base.css" />
    <link rel="stylesheet" href="../../css/style.css" />
    <link rel="shortcut icon" href="../../images/favicon.png" />
</head>



<body style="height: 900px">
    <div class="card" style="text-align: center">
        <div class="card-body">
            <div class="row" style="margin-left: 0">

                <div class="form-group">
                    <div class="input-group">

                        <button type="button" class="btn btn-success btn-fw" data-toggle="modal" data-target="#gridSystemModal">请假申请</button>
                    </div>
                </div>
            </div>

            <table class="table table-hover" id="LeaveTable">
                <thead>
                    <tr>
                        <th style="width: 10%">请假时间</th>
                        <th style="width: 20%">开始时间</th>
                        <th style="width: 20%">结束时间</th>
                        <th style="width: 20%">请假原因</th>
                        <th style="width: 30%">审核状态</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


    <!--开始：弹窗请假-->
    <div id="gridSystemModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel" style="display: none;">
        <div class="modal-dialog" role="document">
            <div class="modal-content " style="background-color: white;">

                <!--头部标题-->
                <div class="modal-header">
                    <h4 class="modal-title" id="gridSystemModalLabel">添加部门</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <!--中间内容-->
                <div class="card-body">
                    <!--请假时间-->
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">请假时间</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" placeholder="日期时间范围" id="LeaveTime" />
                        </div>
                    </div>
                    <!--请假原因-->
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">请假原因</label>
                        <div class="col-sm-9">
                            <textarea class="form-control" id="LeaveReason" rows="5" placeholder="请输入备注"></textarea>
                        </div>
                    </div>
                </div>
                <!--底部按钮-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-fw" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-success btn-fw" data-dismiss="modal" id="InsertLeave">申请</button>
                </div>
            </div>
        </div>
    </div>
    <!--结束：弹窗请假-->

    <!--开始：弹窗查看审核信息-->
    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content " style="background-color: white;">

                <!--审核状态-->
                <div class="modal-header">
                    <h4 class="modal-title"><b class="text-success" id="AuditStatus">审核状态</b></h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <!--中间内容-->
                <div class="card-body">
                    <!--审核人-->
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">审核人</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="ApproverName" />
                        </div>
                    </div>
                    <!--审核时间-->
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">审核时间</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="ApprovalTime" />
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
                </div>
            </div>
        </div>
    </div>
    <!--结束：弹窗查看审核信息-->

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
    <script src="laydate/laydate.js"></script>
    <script src="js/pages/Leave.js"></script>

</body>
</html>
