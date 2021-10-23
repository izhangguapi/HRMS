<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PersonalData.aspx.cs" Inherits="HRMS_UI.PersonalData" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>个人资料</title>
    <link rel="stylesheet" href="vendors/iconfonts/mdi/css/materialdesignicons.min.css" />
    <link rel="stylesheet" href="vendors/css/vendor.bundle.base.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="shortcut icon" href="images/favicon.png" />

    <!--上传图片-->
    <link rel="stylesheet" type="text/css" href="amazeui/css/font-awesome.4.6.0.css" />
    <link rel="stylesheet" href="amazeui/css/amazeui.min.css" />
    <link rel="stylesheet" href="amazeui/css/amazeui.cropper.css" />
    <link rel="stylesheet" href="amazeui/css/custom_up_img.css" />

    <style type="text/css">
        .up-img-cover {
            width: 100px;
            height: 100px;
        }

            .up-img-cover img {
                width: 100%;
            }

        /*IE/Edge隐藏滚动条*/
        body {
            -ms-overflow-style: none;
        }

            /*Chorme隐藏滚动条*/
            body::-webkit-scrollbar {
                display: none;
            }
    </style>

</head>
<body>

    <div class="col-12 grid-margin">
        <div class="card">
            <div class="card-body">
                <form>



                    <div class="up-img-cover" style="margin: 0px auto 10px auto">
                        <img class="am-circle" id="touxiang" src="amazeui/img/hu.jpg" />
                    </div>

                    <div style="margin: 0px auto 10px auto; width: auto; height: auto; text-align: center">
                        <button type="button" class="btn btn-outline-danger btn-icon-text" id="up-img-touch">修改头像</button>
                    </div>
                    <div><a style="text-align: center; display: block;" id="pic"></a></div>



                    <!--图片上传框-->
                    <div class="am-modal am-modal-no-btn up-frame-bj " tabindex="-1" id="doc-modal-1">
                        <div class="am-modal-dialog up-frame-parent up-frame-radius">
                            <div class="am-modal-hd up-frame-header">
                                <label>修改头像</label>
                                <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close="">&times;</a>
                            </div>
                            <div class="am-modal-bd  up-frame-body">
                                <div class="am-g am-fl">
                                    <div class="am-form-group am-form-file">
                                        <div class="am-fl">
                                            <button type="button" class="btn btn-gradient-danger btn-icon-text">
                                                <i class="mdi mdi-upload btn-icon-prepend"></i>选择图像文件
                                            </button>
                                        </div>
                                        <input type="file" id="inputImage" />
                                    </div>
                                </div>
                                <div class="am-g am-fl">
                                    <div class="up-pre-before up-frame-radius">
                                        <img alt="" src="" id="image" />
                                    </div>
                                    <div class="up-pre-after up-frame-radius">
                                    </div>
                                    <div style="overflow: hidden; width: 186px; height: auto; float: left; margin-left: 25px; margin-top: 25px;">
                                        <ul class="list-arrow">
                                            <li>滑轮放大缩小</li>
                                            <li>鼠标拖动边角缩放选框</li>
                                            <li>鼠标变成十字架拖动创建选框</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="am-g am-fl">
                                    <div class="btn-group" role="group" aria-label="Basic example" style="margin: 20px auto auto auto">
                                        <button type="button" class="btn btn-primary" onclick="rotateimgleft()">
                                            <i class="mdi mdi-rotate-left"></i>
                                        </button>
                                        <button type="button" class="btn btn-primary" onclick="rotateimgright()">
                                            <i class="mdi mdi-rotate-right"></i>
                                        </button>
                                        <button type="button" class="btn btn-primary" id="up-btn-ok" url="admin/user/upload.action">
                                            <i class="mdi mdi-check"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!--加载框-->
                    <div class="am-modal am-modal-loading am-modal-no-btn" tabindex="-1" id="my-modal-loading">
                        <div class="am-modal-dialog">
                            <div class="am-modal-hd">正在上传...</div>
                            <div class="am-modal-bd">
                                <span class="am-icon-spinner am-icon-spin"></span>
                            </div>
                        </div>
                    </div>

                    <!--警告框-->
                    <div class="am-modal am-modal-alert" tabindex="-1" id="my-alert">
                        <div class="am-modal-dialog">
                            <div class="am-modal-hd">信息</div>
                            <div class="am-modal-bd" id="alert_content">
                                上传成功！
                            </div>
                            <div class="am-modal-footer">
                                <span class="am-modal-btn">确定</span>
                            </div>
                        </div>
                    </div>









                    <div class="row">
                        <!--------------------姓名-------------------->
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">姓名</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="UserName" />
                                </div>
                            </div>
                        </div>
                        <!--------------------年龄-------------------->
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">年龄</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="UserAge" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!--------------------电话-------------------->
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">电话</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="UserIphone" />
                                </div>
                            </div>
                        </div>

                        <!--------------------地址-------------------->
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">地址</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="UserAddress" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!--------------------部门-------------------->
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">部门</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="DepartmentName" />
                                </div>
                            </div>
                        </div>
                        <!--------------------职位-------------------->
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">职位</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="RoleName" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!--------------------入职时间-------------------->
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">入职时间</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="DimissionTime" />
                                </div>
                            </div>
                        </div>
                        <!--------------------基本薪资-------------------->
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">基本薪资</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="BasePay" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!--------------------登录名-------------------->
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">登录名</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="LoginName" />
                                </div>
                            </div>
                        </div>
                        <!--------------------编号-------------------->
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">编号</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="UserNumber" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!--------------------个性签名-------------------->
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>个性签名</label>
                                <textarea class="form-control" id="UserRemarks" rows="5"></textarea>
                            </div>
                        </div>
                    </div>


                    <!-- 按钮 -->
                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" style="float:right;">
                        修改资料
                    </button>

                    <!-- 弹窗 -->
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myModalLabel">修改资料</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label>姓名</label>
                                        <input type="text" class="form-control" id="xm" />
                                    </div>
                                    <div class="form-group">
                                        <label>年龄</label>
                                        <input type="text" class="form-control" id="nl" />
                                    </div>
                                    <div class="form-group">
                                        <label>电话</label>
                                        <input type="text" class="form-control" id="dh" />
                                    </div>
                                    <div class="form-group">
                                        <label>地址</label>
                                        <input type="text" class="form-control" id="dz"  />
                                    </div>
                                    <div class="form-group">
                                        <label>个性签名</label>
                                        <textarea class="form-control" id="gq" rows="5"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" id="save">保存</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    </div>
    <!--
<a href="Handler/UserInfoHandler.ashx">Handler/UserInfoHandler.ashx</a>
        -->


    <script src="js/jquery.min.js"></script>
    <script src="js/MyCookies.js"></script>
    <script src="vendors/js/vendor.bundle.base.js"></script>
    <script src="vendors/js/vendor.bundle.addons.js"></script>
    <script src="js/off-canvas.js"></script>
    <script src="amazeui/js/amazeui.min.js" charset="utf-8"></script>
    <script src="amazeui/js/cropper.min.js" charset="utf-8"></script>
    <script src="js/pages/PersonalData.js"></script>
</body>
</html>
