<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Department.aspx.cs" Inherits="HRMS_UI.Department" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>部门管理</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="vendors/iconfonts/mdi/css/materialdesignicons.min.css" />
    <link rel="stylesheet" href="vendors/css/vendor.bundle.base.css" />
    <!-- endinject -->
    <!-- plugin css for this page -->
    <link rel="stylesheet" href="node_modules/jqvmap/dist/jqvmap.min.css" />
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="css/style.css" />
    <!-- endinject -->

</head>
<body>
    <div class="card" style="text-align: center">
        <div class="card-body">
            <div class="row" style="margin-left: 0">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="请输入部门名称" id="textname" />
                        <div class="input-group-append">
                            <button class="btn btn-sm btn-gradient-primary" type="button" id="select">搜索</button>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-success btn-fw" data-toggle="modal" data-target="#gridSystemModal">添加</button>
                        &nbsp;&nbsp;&nbsp;
                        <button class="btn btn-danger btn-fw" type="button" id="delete">删除选中</button>
                    </div>
                </div>
            </div>

            <table class="table table-hover" id="DepartmentTable">
                <thead>
                    <tr>
                        <th style="width: 10%">
                            <input type="checkbox" id="titleCHK" />
                        </th>
                        <th style="width: 10%">部门编号</th>
                        <th style="width: 20%">部门名称</th>
                        <th style="width: 20%">备注</th>
                        <th style="width: 40%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


    <!--开始：弹窗添加-->
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
                    <!--部门名称-->
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">部门名称</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" id="DepartmentName" placeholder="请输入部门名称" />
                        </div>
                    </div>
                    <!--部门备注-->
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">部门备注</label>
                        <div class="col-sm-9">
                            <textarea class="form-control" id="DepartmentRemarks" rows="5" placeholder="请输入备注"></textarea>
                        </div>
                    </div>
                </div>
                <!--底部按钮-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-fw" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-success btn-fw" data-dismiss="modal" id="save">添加</button>
                </div>
            </div>
        </div>
    </div>
    <!--结束：弹窗添加-->

    <!--开始：弹窗修改-->
    <div id="gridSystemModalM" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel" style="display: none;">
        <div class="modal-dialog" role="document">
            <div class="modal-content " style="background-color: white;">

                <!--头部标题-->
                <div class="modal-header">
                    <h4 class="modal-title" id="gridSystemModalLabelM">修改部门</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <!--中间内容-->
                <div class="card-body">
                    <!--部门名称-->
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">部门名称</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" id="ModifyDepartmentName" placeholder="请输入部门名称" />
                        </div>
                    </div>
                    <!--部门备注-->
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">部门备注</label>
                        <div class="col-sm-9">
                            <textarea class="form-control" id="ModifyDepartmentRemarks" rows="5" placeholder="请输入备注"></textarea>
                        </div>
                    </div>
                </div>
                <!--底部按钮-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-fw" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-success btn-fw" data-dismiss="modal" id="modify">更新</button>
                </div>
            </div>
        </div>
    </div>
    <!--开始：弹窗修改-->

    <script src="js/jquery.min.js"></script>
    <script src="js/pages/Department.js"></script>
    <script src="vendors/js/vendor.bundle.base.js"></script>
    <script src="vendors/js/vendor.bundle.addons.js"></script>
    <script src="js/off-canvas.js"></script>
    <script src="js/misc.js"></script>
</body>
</html>
