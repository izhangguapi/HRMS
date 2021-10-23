<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="HRMS_UI.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>人力资源管理</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="vendors/iconfonts/mdi/css/materialdesignicons.min.css" />
    <link rel="stylesheet" href="vendors/css/vendor.bundle.base.css" />
    <!-- endinject -->
    <!-- plugin css for this page -->
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="css/style.css" />
    <!-- endinject -->
    <link rel="shortcut icon" href="images/favicon.png" />
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

</head>
<body>
    <div class="container-scroller">
        <!-- partial:partials/_navbar.html -->
        <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a class="navbar-brand brand-logo">
                    <img src="images/logo.svg" alt="logo" /></a>
                <a class="navbar-brand brand-logo-mini">
                    <img src="images/logo-mini.svg" alt="logo" /></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-stretch">
                <div class="search-field d-none d-md-block">
                    <form class="d-flex align-items-center h-100" action="#">
                        <div class="input-group">
                            <div class="input-group-prepend bg-transparent">
                                <i class="input-group-text border-0 mdi mdi-magnify"></i>
                            </div>
                            <input type="text" class="form-control bg-transparent border-0" placeholder="Search projects" />
                        </div>
                    </form>
                </div>
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item nav-profile dropdown">
                        <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                            <div class="nav-profile-img">
                                <img src="amazeui/img/hu.jpg" id="tx1" />
                                <span class="availability-status online"></span>
                            </div>
                            <div class="nav-profile-text">
                                <p class="mb-1 text-black" id="Name">姓名</p>
                            </div>
                        </a>
                        <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                            <a class="dropdown-item" href="#">
                                <i class="mdi mdi-key mr-2 text-success"></i>修改密码
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                                <i class="mdi mdi-logout mr-2 text-primary"></i>安全退出
                            </a>
                        </div>
                    </li>
                    <li class="nav-item d-none d-lg-block full-screen-link">
                        <a class="nav-link">
                            <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
                        </a>
                    </li>


                    <li class="nav-item dropdown">
                        <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                            <i class="mdi mdi-key mr-2"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown" style="width: 500px;">
                            <h6 class="p-3 mb-0">修改密码</h6>
                            <div class="dropdown-divider"></div>

                            <div class="form-group row" style="margin: 20px">
                                <label for="exampleInputPassword2" class="col-sm-3 col-form-label">原密码</label>
                                <div class="col-sm-9">
                                    <input type="password" class="form-control" id="Password" placeholder="请输入原密码" />
                                </div>
                            </div>

                            <div class="dropdown-divider"></div>

                            <div class="form-group row" style="margin: 20px">
                                <label for="exampleInputPassword2" class="col-sm-3 col-form-label">新密码</label>
                                <div class="col-sm-9">
                                    <input type="password" class="form-control" id="NewPassword1" placeholder="请输入新密码" />
                                </div>
                            </div>

                            <div class="dropdown-divider"></div>


                            <div class="form-group row" style="margin: 20px">
                                <label for="exampleInputPassword2" class="col-sm-3 col-form-label">确认新密码</label>
                                <div class="col-sm-9">
                                    <input type="password" class="form-control" id="NewPassword2" placeholder="请输入确认新密码" />
                                </div>
                            </div>

                            <div class="dropdown-divider"></div>
                            <div style="text-align: center">
                                <button type="submit" class="btn btn-gradient-primary mr-2" style="margin: 10px" id="ChangePassword">确认修改</button>
                            </div>
                        </div>
                    </li>


                    <li class="nav-item nav-logout d-none d-lg-block">
                        <a class="nav-link" href="#">
                            <i class="mdi mdi-power" id="SignOut"></i>
                        </a>
                    </li>

                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span class="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_sidebar.html -->
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item nav-profile">
                        <a href="#" class="nav-link">
                            <div class="nav-profile-image">
                                <img src="amazeui/img/hu.jpg" id="tx2" />
                                <span class="login-status online"></span>
                                <!--change to offline or busy as needed-->
                            </div>
                            <div class="nav-profile-text d-flex flex-column">
                                <span class="font-weight-bold mb-2" id="Role">职位</span>
                                <span class="text-secondary text-small" id="Department">部门</span>
                            </div>
                            <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                        </a>
                    </li>
                    <!--主页-->
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="menu-title">主页</span>
                            <i class="mdi mdi-home menu-icon"></i>
                        </a>
                    </li>
                    <!--签到-->
                    <li class="nav-item" id="testtt">
                        <a class="nav-link">
                            <span class="menu-title">签到</span>
                            <i class="mdi mdi-pocket menu-icon"></i>
                        </a>
                    </li>
                    <!--个人资料-->
                    <li class="nav-item" id="grzl">
                        <a class="nav-link" href="#">
                            <span class="menu-title">个人资料</span>
                            <i class="mdi mdi-account menu-icon"></i>
                        </a>
                    </li>
                    <!--查看同事-->
                    <li class="nav-item" id="ckts">
                        <a class="nav-link" href="#">
                            <span class="menu-title">查看同事</span>
                            <i class="mdi mdi-account menu-icon"></i>
                        </a>
                    </li>
                    <!--申请请假-->
                    <li class="nav-item" id="sqqj">
                        <a class="nav-link" href="#">
                            <span class="menu-title">申请请假</span>
                            <i class="mdi mdi-hotel menu-icon"></i>
                        </a>
                    </li>

                    
                    <!--管理页面-->
                    <li class="nav-item" id="glym">
                        <a class="nav-link" data-toggle="collapse" href="#Administration" aria-expanded="false" aria-controls="Administration">
                            <span class="menu-title">管理页面</span>
                            <i class="menu-arrow"></i>
                            <i class="mdi mdi-account-settings-variant menu-icon"></i>
                        </a>
                        <div class="collapse" id="Administration">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"><a class="nav-link" href="#" id="bmgl">部门管理</a></li>
                                <li class="nav-item"><a class="nav-link" href="#" id="yggl">员工管理</a></li>
                                <li class="nav-item"><a class="nav-link" href="#" id="qjgl">请假管理</a></li>
                            </ul>
                        </div>
                    </li>
                    <!--日志-->
                    <li class="nav-item" id="rz">
                        <a class="nav-link" data-toggle="collapse" href="#Journal" aria-expanded="false" aria-controls="Journal">
                            <span class="menu-title">日志</span>
                            <i class="menu-arrow"></i>
                            <i class="mdi mdi-library-books menu-icon"></i>
                        </a>
                        <div class="collapse" id="Journal">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"><a class="nav-link" href="#" id="qjrz">请假日志</a></li>
                                <li class="nav-item"><a class="nav-link" href="#" id="czrz">操作日志</a></li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </nav>
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">

                    <iframe frameborder="0" scrolling="no" width="100%" id="iframe" onload="this.height=100"></iframe>

                </div>
                <!-- content-wrapper ends -->
                <!-- partial:partials/_footer.html -->

                <!-- partial -->
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->

    <script src="js/jquery.min.js"></script>
    <script src="js/MyCookies.js"></script>
    <script src="js/pages/Home.js"></script>
    <script src="vendors/js/vendor.bundle.base.js"></script>
    <script src="vendors/js/vendor.bundle.addons.js"></script>
    <script src="js/off-canvas.js"></script>

    <script>
        $(function () {
            $("#sidebar > ul > li.nav-item.nav-profile > a > div.nav-profile-image > img").attr('src', $("#touxiang").attr('src'));
        });
    </script>
</body>

</html>
