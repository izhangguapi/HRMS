using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace HRMS_UI.Handler
{
    /// <summary>
    /// UserInfoHandler 的摘要说明
    /// </summary>
    public class UserInfoHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string method = context.Request["Method"];
            switch (method)
            {
                case "SelectUserInfo":
                    SelectUserInfo(context);
                    break;
                case "Login":
                    Login(context);
                    break;
                case "InsertUserInfo":
                    InsertUserInfo(context);
                    break;
                case "DeleteUserInfo":
                    DeleteUserInfo(context);
                    break;
                case "DeleteAllUserInfo":
                    DeleteAllUserInfo(context);
                    break;
                case "UpdateUserInfo":
                    UpdateUserInfo(context);
                    break;
                case "SelectUserInfoCount":
                    SelectUserInfoCount(context);
                    break;
                case "SelectUserInfoID":
                    SelectUserInfoID(context);
                    break;
                case "PersonalUpdateUserInfo":
                    PersonalUpdateUserInfo(context);
                    break;
                case "ChangePasswordSelect":
                    ChangePasswordSelect(context);
                    break;
                case "ChangePassword":
                    ChangePassword(context);
                    break;
                case "SelectUserInfoColleague":
                    SelectUserInfoColleague(context);
                    break;
                    

            }
        }
        //修改密码
        public void ChangePasswordSelect(HttpContext context)
        {
            int UserID = Convert.ToInt32(context.Request["UserID"]);
            string LoginPwd = context.Request["LoginPwd"].ToString().Trim();

            DataTable bo = HRMS_BLL.UserInfo_BLL.ChangePasswordSelect(UserID, LoginPwd);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);
        }
        public void ChangePassword(HttpContext context)
        {
            int UserID = Convert.ToInt32(context.Request["UserID"]);
            string LoginPwd = context.Request["LoginPwd"].ToString().Trim();

            bool bo = HRMS_BLL.UserInfo_BLL.ChangePassword(UserID, LoginPwd);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);
        }
        //查询
        public void SelectUserInfo(HttpContext context)
        {
            DataTable dt = HRMS_BLL.UserInfo_BLL.SelectUserInfo();
            string json = JsonConvert.SerializeObject(dt);
            context.Response.Write(json);//通过http协议将json传回前端
        }
        public void SelectUserInfoID(HttpContext context)
        {
            int id = Convert.ToInt32(context.Request["UserID"]);
            DataTable dt = HRMS_BLL.UserInfo_BLL.SelectUserInfoID(id);
            //将datatable转换成json
            string json = JsonConvert.SerializeObject(dt);
            context.Response.Write(json);//通过http协议将json传回前端
        }
        /// <summary>
        /// 传过去一个用户ID,查询同事信息
        /// </summary>
        /// <param name="context"></param>
        public void SelectUserInfoColleague(HttpContext context)
        {
            int id = Convert.ToInt32(context.Request["UserID"]);
            DataTable dt = HRMS_BLL.UserInfo_BLL.SelectUserInfoColleague(id);
            //将datatable转换成json
            string json = JsonConvert.SerializeObject(dt);
            context.Response.Write(json);//通过http协议将json传回前端
        }
        //登录
        public void Login(HttpContext context)
        {
            string uid = context.Request["uid"].ToString().Trim();//获取前端传递过来的参数 是通过data中冒号左边的名称来获取冒号右边值
            string pwd = context.Request["pwd"].ToString().Trim();
            DataTable dt = HRMS_BLL.UserInfo_BLL.Login(uid, pwd);
            //将datatable转换成json
            string json;
            if (HRMS_BLL.UserInfo_BLL.Login(uid, pwd).Rows.Count > 0)
            {
                json = JsonConvert.SerializeObject(dt);
            }
            else
            {
                json = JsonConvert.SerializeObject("1");//登录失败
            }

            context.Response.Write(json);//通过http协议将json传回前端
        }

        //添加
        public void InsertUserInfo(HttpContext context)
        {
            string DepartmentID = context.Request["str1"].ToString();
            string RoleID = context.Request["str2"].ToString();
            string UserNumber = context.Request["str3"].ToString();
            string LoginName = context.Request["str4"].ToString();
            string LoginPwd = context.Request["str5"].ToString();
            string UserName = context.Request["str6"].ToString();
            string UserAge = context.Request["str7"].ToString();
            string UserSex = context.Request["str8"].ToString();
            string UserIphone = context.Request["str9"].ToString();
            string UserAddress = context.Request["str10"].ToString();
            string UserStatr = context.Request["str11"].ToString();
            string DimissionTime = context.Request["str12"].ToString();
            string BasePay = context.Request["str13"].ToString();

            string[] str = { DepartmentID, RoleID, UserNumber, LoginName, LoginPwd, UserName, UserAge, UserSex, UserIphone, UserAddress, UserStatr, DimissionTime, BasePay };

            bool bo = HRMS_BLL.UserInfo_BLL.InsertUserInfo(str);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);



        }
        //删除
        public void DeleteUserInfo(HttpContext context)
        {
            int id = int.Parse(context.Request["id"]);
            bool bo = HRMS_BLL.UserInfo_BLL.DeleteUserInfo(id);//HRMS_BLL.Deparment.DeleteDeparment(d_id);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);
        }
        //删除多行
        public void DeleteAllUserInfo(HttpContext context)
        {
            string str = context.Request["str"].ToString();
            bool bo = HRMS_BLL.UserInfo_BLL.DeleteAllUserInfo(str);//HRMS_BLL.Deparment.DeleteDeparment(d_id);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);
        }
        //管理修改
        public void UpdateUserInfo(HttpContext context)
        {
            string UserID = context.Request["str1"].ToString();
            string DepartmentID = context.Request["str2"].ToString();
            string RoleID = context.Request["str3"].ToString();
            string UserNumber = context.Request["str4"].ToString();
            string LoginName = context.Request["str5"].ToString();
            string LoginPwd = context.Request["str6"].ToString();
            string UserName = context.Request["str7"].ToString();
            string UserAge = context.Request["str8"].ToString();
            string UserSex = context.Request["str9"].ToString();
            string UserIphone = context.Request["str10"].ToString();
            string UserAddress = context.Request["str11"].ToString();
            string UserStatr = context.Request["str12"].ToString();
            string DimissionTime = context.Request["str13"].ToString();
            string BasePay = context.Request["str14"].ToString();

            string[] str = { UserID, DepartmentID, RoleID, UserNumber, LoginName, LoginPwd, UserName, UserAge, UserSex, UserIphone, UserAddress, UserStatr, DimissionTime, BasePay };

            bool bo = HRMS_BLL.UserInfo_BLL.UpdateUserInfo(str);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);

        }
        //个人资料修改
        public void PersonalUpdateUserInfo(HttpContext context)
        {
            string UserID = context.Request["UserID"].ToString();
            string UserName = context.Request["UserName"].ToString();
            string UserAge = context.Request["UserAge"].ToString();
            string UserIphone = context.Request["UserIphone"].ToString();
            string UserAddress = context.Request["UserAddress"].ToString();
            string UserRemarks = context.Request["UserRemarks"].ToString();

            string[] str = { UserID, UserName, UserAge,  UserIphone, UserAddress , UserRemarks };

            bool bo = HRMS_BLL.UserInfo_BLL.PersonalUpdateUserInfo(str);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);

        }
        //查询数量
        public void SelectUserInfoCount(HttpContext context)
        {
            DataTable dt = HRMS_BLL.UserInfo_BLL.SelectUserInfoCount();
            //将datatable转换成json
            string json = JsonConvert.SerializeObject(dt);
            context.Response.Write(json);//通过http协议将json传回前端
        }
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}