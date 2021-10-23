using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace HRMS_UI.Handler
{
    /// <summary>
    /// RolesHandler 的摘要说明
    /// </summary>
    public class RolesHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string method = context.Request["Method"];
            switch (method)
            {
                case "LoadRoles":
                    LoadRoles(context);
                    break;
            }
        }
        //查询
        public void LoadRoles(HttpContext context)
        {
            DataTable dt = HRMS_BLL.Roles_BLL.LoadRoles();
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