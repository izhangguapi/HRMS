<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="User.aspx.cs" Inherits="HRMS_UI.User" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>员工管理</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="vendors/iconfonts/mdi/css/materialdesignicons.min.css" />
    <link rel="stylesheet" href="vendors/css/vendor.bundle.base.css" />
    <!-- endinject -->
    <!-- inject:css -->
    <link rel="stylesheet" href="css/style.css" />

    <style>
        /*IE/Edge隐藏滚动条*/
        body {
            -ms-overflow-style: none;
        }

        /*Chorme隐藏滚动条*/

        body::-webkit-scrollbar {
            display: none;
        }


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

</head>
<body style="padding:0px">
    <div class="card" style="text-align: center">
        <div class="card-body">
            <div class="row" style="margin-left: 0">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="暂时不可用，点击搜索刷新" />
                        <div class="input-group-append">
                            <button class="btn btn-sm btn-gradient-primary" type="button" id="SelectUserInfo">搜索</button>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-success btn-fw" data-toggle="modal" data-target=".bs-example-modal-lg">添加</button>
                        &nbsp;&nbsp;&nbsp;
                        <button class="btn btn-danger btn-fw" type="button" id="DeleteAllUserInfo">删除选中</button>
                    </div>
                </div>
            </div>

            <table class="table table-hover" id="UserInfoTable">
                <thead>
                    <tr>
                        <th style="width: 2%">
                            <input type="checkbox" id="titleCHK" />
                        </th>
                        <th>部门</th>
                        <th>职位</th>
                        <th>用户编号</th>
                        <th>登陆名</th>
                        <th>密码</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别 </th>
                        <th>手机</th>
                        <th>地址</th>
                        <th>是否可登录</th>
                        <th>最后登陆时间</th>
                        <th>入职时间</th>
                        <th>薪资</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>002</td>
                        <td>003</td>
                        <td>004</td>
                        <td>005</td>
                        <td>006</td>
                        <td>007</td>
                        <td>008</td>
                        <td>009</td>
                        <td>010</td>
                        <td>011</td>
                        <td>012</td>
                        <td>013</td>
                        <td>014</td>
                        <td>015</td>
                        <td>016</td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!--开始：弹窗添加-->
    <div id="gridSystemModal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" style="display: none;">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content " style="background-color: white;">

                <!--头部标题-->
                <div class="modal-header">
                    <h4 class="modal-title" id="gridSystemModalLabel">添加员工</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <!--中间内容-->

                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <form class="form-sample">
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--选择部门-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">选择部门</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" id="DepartmentID">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--选择职位-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">选择职位</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" id="RoleID">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--姓名-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">姓名</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="UserName" placeholder="请输入姓名" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--用户编号-->

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">用户编号</label>
                                            <div class="col-sm-9">
                                                <div class="input-group">
                                                <input type="text" class="form-control" id="UserNumber" placeholder="填写完成点击自动获取" disabled="disabled" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-sm btn-gradient-primary" type="button" id="AutomaticUserNum">自动获取</button>
                                                </div>
                                            </div>
                                                
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--登陆名-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">登陆名</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="LoginName" placeholder="请输入登陆名" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--密码-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">密码</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="LoginPwd" placeholder="密码要求5-20位，必须包括数字、大小写字母或者特殊字符中的其中一种" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <!--年龄-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">年龄</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="UserAge" placeholder="请输入年龄" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--性别-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">性别</label>
                                            <div class="col-sm-4">
                                                <div class="form-check form-check-info">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="UserSex" id="UserSex1" value="1" checked="checked" />男<i class="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-check form-check-danger">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="UserSex" id="UserSex2" value="0"  />女<i class="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--入职时间-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">入职时间</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="请选择入职时间" id="DimissionTime" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--薪资-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">薪资</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="BasePay" placeholder="请输入薪资" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--手机号码-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">手机号码</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="UserIphone" placeholder="请输入手机号码" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--是否可登录-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">是否可登录</label>
                                            <div class="col-sm-4">
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="UserStatr" id="UserStatr1" value="1" checked="checked" />可登陆<i class="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="UserStatr" id="UserStatr2" value="0"  />不可登陆<i class="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--家庭地址-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">家庭地址</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="UserAddress" placeholder="请输入家庭地址" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <!--底部按钮-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-fw" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-success btn-fw" data-dismiss="modal" id="save"  >添加</button>
                </div>
            </div>
        </div>
    </div>
    <!--结束：弹窗添加-->

    <!--开始：弹窗修改-->
    <div id="gridSystemModalM" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" style="display: none;">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content " style="background-color: white;">

                <!--头部标题-->
                <div class="modal-header">
                    <h4 class="modal-title" id="gridSystemModalLabelM">修改员工</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <!--中间内容-->

                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <form class="form-sample">
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--选择部门-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">选择部门</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" id="DepartmentIDM">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--选择职位-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">选择职位</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" id="RoleIDM">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--姓名-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">姓名</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="UserNameM" placeholder="请输入姓名" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--用户编号-->

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">用户编号</label>
                                            <div class="col-sm-9">
                                                <div class="input-group">
                                                <input type="text" class="form-control" id="UserNumberM" placeholder="请输入用户编号"/>
                                                
                                            </div>
                                                
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--登陆名-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">登陆名</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="LoginNameM" placeholder="请输入登陆名" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--密码-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">密码</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="LoginPwdM" placeholder="密码要求5-20位，必须包括数字、大小写字母或者特殊字符中的其中一种" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <!--年龄-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">年龄</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="UserAgeM" placeholder="请输入年龄" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--性别-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">性别</label>
                                            <div class="col-sm-4">
                                                <div class="form-check form-check-info">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="UserSexM" value="1" id="UpdateUserSex1"/>男<i class="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-check form-check-danger">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="UserSexM" value="0"  id="UpdateUserSex2"/>女<i class="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--入职时间-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">入职时间</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="请选择入职时间" id="DimissionTimeM" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--薪资-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">薪资</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="BasePayM" placeholder="请输入薪资" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--手机号码-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">手机号码</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="UserIphoneM" placeholder="请输入手机号码" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!--是否可登录-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">是否可登录</label>
                                            <div class="col-sm-4">
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="UserStatrM" value="1"  id="UpdateUserStatr1" />可登陆<i class="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="UserStatrM" value="0"  id="UpdateUserStatr2" />不可登陆<i class="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!--家庭地址-->
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">家庭地址</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="UserAddressM" placeholder="请输入家庭地址" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                    </div>
                                </div>
                            </form>
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
    <!--结束：弹窗修改-->



    <script src="js/jquery.min.js"></script>
    <script src="laydate/laydate.js"></script>
    <script src="js/pages/User.js"></script>

    <script src="vendors/js/vendor.bundle.base.js"></script>
    <script src="vendors/js/vendor.bundle.addons.js"></script>
    <script src="js/off-canvas.js"></script>
    <script src="js/misc.js"></script>


</body>
</html>
