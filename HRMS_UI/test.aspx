<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="test.aspx.cs" Inherits="HRMS_UI.test" %>





<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>个人资料</title>
    <!--<link href="~/assets/css/amazeui.min.css" rel="stylesheet" />-->
<!--<script src="~/assets/js/jquery.min.js"></script>-->
    <link href="amazeui/css/amazeui.min.css" rel="stylesheet" />
    <script src="js/jquery.min.js"></script>
</head>
<body>


<div class="am-form-group am-form-file">
  <button type="button" class="am-btn am-btn-danger am-btn-sm">
    <i class="am-icon-cloud-upload"></i> 选择要上传的文件</button>
  <input id="doc-form-file" type="file" multiple />
</div>
<script>
      $('#doc-form-file').on('change', function () {
        var file = this.files[0];
        var fileName = file.name;
        var fileType = fileName.substr(fileName.length - 4, fileName.length);
        if (fileType == '.docx' || fileType == '.doc') {
            var formData = new FormData()
            formData.append("file", file);
            $.ajax({
                url: '/Home/upLoadFile',
                type: 'POST',
                cache: false,
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                success: function (json) {
                    //上传成功的处理
                    alert("成");
                }
            });
        } else {
        alert('文件类型不正确');
        }
    });
</script>
    </body></html>