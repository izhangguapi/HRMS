using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace HRMS_UI.Handler
{
    /// <summary>
    /// LoginHandler 的摘要说明
    /// </summary>
    public class LoginHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string method = context.Request["Method"];
            switch (method)
            {
                case "Login":
                    Login(context);
                    break;
            }
        }
        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="context"></param>
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

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}