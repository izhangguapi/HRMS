$("#UserName").focus(function () {
    $("#UserName").blur();
});
$("#UserAge").focus(function () {
    $("#UserAge").blur();
});
$("#UserIphone").focus(function () {
    $("#UserIphone").blur();
});
$("#UserAddress").focus(function () {
    $("#UserAddress").blur();
});
$("#DepartmentName").focus(function () {
    $("#DepartmentName").blur();
});
$("#RoleName").focus(function () {
    $("#RoleName").blur();
});
$("#DimissionTime").focus(function () {
    $("#DimissionTime").blur();
});
$("#BasePay").focus(function () {
    $("#BasePay").blur();
});
$("#LoginName").focus(function () {
    $("#LoginName").blur();
});
$("#UserNumber").focus(function () {
    $("#UserNumber").blur();
});
$("#UserRemarks").focus(function () {
    $("#UserRemarks").blur();
});

//姓名
$("#xm").blur(function () {
    var str1 = /^[\u4E00-\u9FA5]{2,4}$/;
    var str2 = $("#xm").val();
    if ($("#xm").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“姓名”");
        $("#xm").val("");
    }
});
//年龄
$("#nl").blur(function () {
    var str1 = /^(1[89]|[2-5]\d|60)$/;
    var str2 = $("#nl").val();
    if ($("#nl").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("输入的年龄不在法定范围之内");
        $("#nl").val("");
    }
});
//手机号码
$("#dh").blur(function () {
    var str1 = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    var str2 = $("#dh").val();
    if ($("#dh").val() == "") {
        return;
    } else if (!(str1.test(str2))) {
        alert("请规范输入“手机号码”");
        $("#dh").val("");
    }
});


function rotateimgright() {
    $("#image").cropper('rotate', 90);
}
function rotateimgleft() {
    $("#image").cropper('rotate', -90);
}
function set_alert_info(content) {
    $("#alert_content").html(content);
}
$("#up-img-touch").click(function () {
    $("#doc-modal-1").modal({ width: '600px' });
});


//--------------------点击保存--------------------//
$("#save").click(function () {

    var UserName = $("#xm").val();
    var UserAge = $("#nl").val();
    var UserIphone = $("#dh").val();
    var UserAddress = $("#dz").val();
    var UserRemarks = $("#gq").val();

    //判断输入的是否有空值
    var add = new Array(UserName, UserAge, UserIphone, UserAddress)//定义数组
    var num = 0;//定义数组记录几个是空值
    for (var i = 0; i < add.length; i++) {
        if (add[i] == "") {
            num += 1;//如果有空值num就+1
        }
    }
    if (num != 0) {
        alert("请输入完整的信息");//如果num不为0 就弹窗提示
        return;
    }
    $.ajax({
        type: "post",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "PersonalUpdateUserInfo",//你要执行的方法名
            UserID: getCookie("UserID"),
            UserName: UserName,
            UserAge: UserAge,
            UserIphone: UserIphone,
            UserAddress: UserAddress,
            UserRemarks: UserRemarks
        }, success: function (data) {
            if (data) {
                alert("修改成功！！");
                SelectPersonal();//刷新表格
            }
            else {
                alert("修改失败！！");
                SelectPersonal();
            }
        }
    });

});


//绑定上传事件
$('#up-btn-ok').on('click', function () {
    var $modal = $('#my-modal-loading');
    var $modal_alert = $('#my-alert');
    var img_src = $("#image").attr("src");
    if (img_src == "") {
        set_alert_info("没有选择上传的图片");
        $modal_alert.modal();
        return false;
    }

    $modal.modal();

    var canvas = $("#image").cropper('getCroppedCanvas');
    var imgurl = canvas.toDataURL(); //转成base64


    //ajax一直执行错误方法，可能是文件夹权限问题，也可以用vs可以调试本地iis的程序，debug一下看看错误的,最后改了一下ashx文件里面的代码路径，发现就是文件夹的权限问题。在那个文件夹存数据需要管理员权限
    //弹出base64编码----------alert(imgurl);
    $.ajax({
        type: "post",
        url: "../../Handler/PersonalData.ashx",
        dataType: "text",
        data: {
            Method: "Base64ToImage",//你要执行的方法名
            base64: imgurl.toString(),
            UserNumber: getCookie("UserNumber")
        },
        success: function (data) {
            $modal.modal('close');//关闭正在加载弹窗
            $("#touxiang").attr("src", imgurl);
            window.parent.$("#tx1").attr("src", imgurl);
            window.parent.$("#tx2").attr("src", imgurl);
            $modal_alert.modal();
        },
        error: function () {
            alert("失败");
            $modal.modal('close');//关闭正在加载弹窗
            set_alert_info("上传文件失败了！可能是权限不够");
            $modal_alert.modal();
            //console.log('Upload error');  
        }

    });
});

// 事件代理绑定事件
$('.docs-buttons').on('click', '[data-method]', function () {

    var $this = $(this);
    var data = $this.data();
    var result = $image.cropper(data.method, data.option, data.secondOption);
    switch (data.method) {
        case 'getCroppedCanvas':
            if (result) {
                // 显示 Modal
                $('#cropped-modal').modal().find('.am-modal-bd').html(result);
                $('#download').attr('href', result.toDataURL('image/jpeg'));
            }
            break;
    }
});


function SelectPersonal() {

    //加载数据
    $.ajax({
        type: "get",//ajax请求的类型 get 最多只能传递4048个字符 不安全  效率高 （查询）   post 无限制的传参 效率低 安全（增删改）
        url: "../../Handler/UserInfoHandler.ashx",//json数据库路径  一般处理程序的路径<a href="Handler/LoginHandler.ashx">Handler/LoginHandler.ashx</a><a href="Handler/Handler1.ashx">Handler/Handler1.ashx</a>
        dataType: "json",// 从后台返回的数据类型  json 轻型数据库源框架 键值对  text
        data: {
            Method: "SelectUserInfoID",//你要执行的方法名
            UserID: getCookie("UserID")
        }, success: function (data) {
            //赋值显示页面
            $("#UserName").val(data[0].UserName);
            $("#UserAge").val(data[0].UserAge);
            $("#UserIphone").val(data[0].UserIphone);
            $("#UserAddress").val(data[0].UserAddress);
            $("#DepartmentName").val(data[0].DepartmentName);
            $("#RoleName").val(data[0].RoleName);
            $("#DimissionTime").val(data[0].DimissionTime.substring(0, 10));
            $("#BasePay").val(data[0].BasePay);
            $("#LoginName").val(data[0].LoginName);
            $("#UserNumber").val(data[0].UserNumber);
            $("#UserRemarks").val(data[0].UserRemarks);
            //赋值修改界面
            $("#xm").val(data[0].UserName);
            $("#nl").val(data[0].UserAge);
            $("#dh").val(data[0].UserIphone);
            $("#dz").val(data[0].UserAddress);
            $("#gq").val(data[0].UserRemarks);
        }
    });
}

$(".am-modal-btn").click(function () {
    $("#doc-modal-1").modal();
});






$(function () {
    SelectPersonal();



    //查找头像文件是否存在,且替换
    $.ajax({
        url: "/Handler/PersonalData.ashx",
        dataType: "text",
        type: "post",
        data: {
            Method: "ImgToBase64String",
            UserID: getCookie("UserID")
        }, success: function (data) {
            if (data != "") {
                $("#touxiang").attr("src", "data:image/jgp;base64," + data);
            } else {
                return;
            }

        }
    });



    'use strict';
    // 初始化
    var $image = $('#image');
    $image.cropper({
        aspectRatio: '1',
        autoCropArea: 0.8,
        preview: '.up-pre-after',

    });

    



    // 上传图片
    var $inputImage = $('#inputImage');
    var URL = window.URL || window.webkitURL;
    var blobURL;

    if (URL) {
        $inputImage.change(function () {
            var files = this.files;
            var file;

            if (files && files.length) {
                file = files[0];

                if (/^image\/\w+$/.test(file.type)) {
                    blobURL = URL.createObjectURL(file);
                    $image.one('built.cropper', function () {
                        URL.revokeObjectURL(blobURL);
                    }).cropper('reset').cropper('replace', blobURL);
                    $inputImage.val('');
                } else {
                    window.alert('请选择图像文件');
                }
            }

            // Amazi UI 上传文件显示代码
            var fileNames = '';
            $.each(this.files, function () {
                fileNames += '<span class="am-badge">' + this.name + '</span> ';
            });
            $('#file-list').html(fileNames);

        });
    } else {
        $inputImage.prop('disabled', true).parent().addClass('disabled');
    }

    
});

