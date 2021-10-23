<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Colleague.aspx.cs" Inherits="HRMS_UI.Colleague" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Purple Admin</title>
    <link rel="stylesheet" href="../../vendors/iconfonts/mdi/css/materialdesignicons.min.css" />
    <link rel="stylesheet" href="../../vendors/css/vendor.bundle.base.css" />
    <link rel="stylesheet" href="../../node_modules/jqvmap/dist/jqvmap.min.css" />
    <link rel="stylesheet" href="../../css/style.css" />
    <link rel="shortcut icon" href="../../images/favicon.png" />
    <style type="text/css">
        @-webkit-keyframes chartjs-render-animation {
            from {
                opacity: 0.99
            }

            to {
                opacity: 1
            }
        }

        @keyframes chartjs-render-animation {
            from {
                opacity: 0.99
            }

            to {
                opacity: 1
            }
        }

        .chartjs-render-monitor {
            -webkit-animation: chartjs-render-animation 0.001s;
            animation: chartjs-render-animation 0.001s;
        }
    </style>
</head>
<body>
    <div class="card" style="text-align: center">
        <div class="card-body">
            <div class="row" style="margin-left: 0">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="请输入姓名" />
                        <div class="input-group-append">
                            <button class="btn btn-sm btn-gradient-primary" type="button" id="SelectUserInfo">搜索</button>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table table-striped" id="Colleague">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>电话</th>
                        <th>地址</th>
                        <th>入职时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-info">
                        <td class="py-1"><img src="../../images/faces-clipart/pic-1.png" alt="image"/></td>
                        <td>20190101001</td>
                        <td>张瓜皮</td>
                        <td>19</td>
                        <td>男</td>
                        <td>13886961359 </td>
                        <td>湖北省天门市</td>
                        <td>2019-01-01</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/MyCookies.js"></script>
    <script src="js/pages/Colleague.js"></script>
</body>
</html>
