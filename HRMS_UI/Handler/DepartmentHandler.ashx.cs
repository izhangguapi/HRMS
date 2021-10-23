using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace HRMS_UI.Handler
{
    /// <summary>
    /// DepartmentHandler 的摘要说明
    /// </summary>
    public class DepartmentHandler : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            string method = context.Request["Method"];
            switch (method)
            {
                case "SelectDepartment":
                    SelectDepartment(context);
                    break;
                case "SelectDepartmentID":
                    SelectDepartmentID(context);
                    break;
                case "InsertDepartment":
                    InsertDepartment(context);
                    break;

                case "DeleteDepartment":
                    DeleteDepartment(context);
                    break;

                case "UpdateDepartment":
                    UpdateDepartment(context);
                    break;
                case "DeleteAllDepartment":
                    DeleteAllDepartment(context);
                    break;
            }
        }
        //查询
        public void SelectDepartment(HttpContext context)
        {
            if (context.Request["str"].ToString() != "")
            {
                string str = context.Request["str"].ToString();
                DataTable dt = HRMS_BLL.Department_BLL.SelectDepartment(str);
                //将datatable转换成json
                string json = JsonConvert.SerializeObject(dt);
                context.Response.Write(json);//通过http协议将json传回前端
            }
            else
            {
                DataTable dt = HRMS_BLL.Department_BLL.SelectDepartment();
                //将datatable转换成json
                string json = JsonConvert.SerializeObject(dt);
                context.Response.Write(json);//通过http协议将json传回前端
            }
        }
        public void SelectDepartmentID(HttpContext context)
        {
            int id = Convert.ToInt32(context.Request["id"]);
            DataTable dt = HRMS_BLL.Department_BLL.SelectDepartment(id);
            //将datatable转换成json
            string json = JsonConvert.SerializeObject(dt);
            context.Response.Write(json);//通过http协议将json传回前端
        }

        //添加
        public void InsertDepartment(HttpContext context)
        {
            string deptname = context.Request["str1"].ToString();
            string deptremarks = context.Request["str2"].ToString();
            bool bo = HRMS_BLL.Department_BLL.InsertDepartment(deptname, deptremarks);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);
        }
        //删除
        public void DeleteDepartment(HttpContext context)
        {
            int id = int.Parse(context.Request["id"]);
            bool bo = HRMS_BLL.Department_BLL.DeleteDepartment(id);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);
        }
        //删除多行
        public void DeleteAllDepartment(HttpContext context)
        {
            string str = context.Request["str"].ToString();
            bool bo = HRMS_BLL.Department_BLL.DeleteAllDepartment(str);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);
        }
        //修改
        public void UpdateDepartment(HttpContext context)
        {
            string DepartmentID = context.Request["str1"].ToString();
            string DepartmentNametr = context.Request["str2"].ToString();
            string DepartmentRemarks = context.Request["str3"].ToString();

            string[] str = { DepartmentID, DepartmentNametr, DepartmentRemarks };
            bool bo = HRMS_BLL.Department_BLL.UpdataDepartment(str);
            string json = JsonConvert.SerializeObject(bo);
            context.Response.Write(json);
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