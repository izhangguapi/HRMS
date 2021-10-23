using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace HRMS_UI.Handler
{
    /// <summary>
    /// HomeHandler 的摘要说明
    /// </summary>
    public class HomeHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string method = context.Request["Method"];
            switch (method)
            {
                case "HomeLoad":
                    HomeLoad(context);
                    break;
            }
        }

        public void HomeLoad(HttpContext context) {
            string UserID = context.Request["UserID"].ToString().Trim();//获取前端传递过来的参数 是通过data中冒号左边的名称来获取冒号右边值
            DataTable dt = HRMS_BLL.Department_BLL.HomeLoad(UserID);
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