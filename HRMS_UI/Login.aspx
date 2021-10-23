<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="HRMS_UI.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>HR-MS登录页面</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="vendors/iconfonts/mdi/css/materialdesignicons.min.css" />
    <link rel="stylesheet" href="vendors/css/vendor.bundle.base.css" />
    <!-- endinject -->
    <!-- plugin css for this page -->
    <!-- End plugin css for this page -->
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
    </style>
    <link rel="shortcut icon" href="images/favicon.png" />


</head>

<body>
    <div class="container-scroller" id="login">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth">
                <div class="row w-100">
                    <div class="col-lg-4 mx-auto">
                        <div class="auth-form-light text-left p-5">
                            <div class="brand-logo">
                                <img src="images/logo.svg" />
                            </div>
                            <h4>欢迎来到人事管理系统</h4>
                            <h6 class="font-weight-light">请登录您的账户</h6>
                            <form class="pt-3">
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-lg" id="uid" placeholder="请输入用户名" value="admin1" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-lg" id="pwd" placeholder="密码" value="admin" />
                                </div>
                                <div class="mt-3">
                                    <a class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" id="btnLogin">登录</a>
                                </div>
                                <div class="my-2 d-flex justify-content-between align-items-center">
                                    <div class="form-check">
                                        <label class="form-check-label text-muted">
                                            <input type="checkbox" class="form-check-input" />记住我
                                        </label>
                                    </div>
                                    <a href="#" class="auth-link text-black">忘记密码？</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/MyCookies.js"></script>
    <script src="js/pages/Login.js"></script>
    <script src="vendors/js/vendor.bundle.base.js"></script>
    <script src="vendors/js/vendor.bundle.addons.js"></script>
    <script src="js/off-canvas.js"></script>
    <script src="js/misc.js"></script>
</body>
</html>
