using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace HRMS_UI.Handler
{
    /// <summary>
    /// Leave 的摘要说明
    /// </summary>
    public class Leave : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string method = context.Request["Method"];
            switch (method)
            {
                case "SelectLeaveID":
                    SelectLeaveID(context);
                    break;
                case "SelectLeave":
                    SelectLeave(context);
                    break;
                case "AuditStatus":
                    AuditStatus(context);
                    break;
                case "DeleteLeave":
                    DeleteLeave(context);
                    break;
                case "InsertLeave":
                    InsertLeave(context);
                    break;
                case "UpdateLeave":
                    UpdateLeave(context);
                    break;
                    


            }
        }
        /// <summary>
        /// 判断登录人是谁，如果是总经理，那就查询审批过的所有人，如果是部门经理，那就查询自己部门未审批的所有人
        /// </summary>
        /// <param name="context"></param>
        public void SelectLeave(HttpContext context)
        {
            int UserID = Convert.ToInt32(context.Request["UserID"]);
            DataTable dt = HRMS_BLL.UserInfo_BLL.SelectUserInfoID(UserID);
            int RoleID = Convert.ToInt32(dt.Rows[0]["RoleID"]);
            DataTable dt1;
            if (RoleID == 1)
            {
                 dt1 = HRMS_BLL.Leave_BLL.SelectLeave();
            }
            else
            {
                int DepartmentID = Convert.ToInt32(dt.Rows[0]["DepartmentID"]);
                dt1 = HRMS_BLL.Leave_BLL.SelectLeave(DepartmentID);
            }
            //将datatable转换成json
            string json = JsonConvert.SerializeObject(dt1);
            context.Response.Write(json);//通过http协议将json传回前端
        }
        /// <summary>
        /// 查询自己
        /// </summary>
        /// <param name="context"></param>
        public void SelectLeaveID(HttpContext context)
        {
            int id = Convert.ToInt32(context.Request["UserID"]);
            DataTable dt = HRMS_BLL.Leave_BLL.SelectLeaveID(id);
            //将datatable转换成json
            string json = JsonConvert.SerializeObject(dt);
            context.Response.Write(json);//通过http协议将json传回前端
        }
        /// <summary>
        /// 查询审核状态
        /// </summary>
        /// <param name="context"></param>
        public void AuditStatus(HttpContext context)
        {
            int id = Convert.ToInt32(context.Request["LeaveID"]);
            DataTable dt = HRMS_BLL.Leave_BLL.AuditStatus(id);
            //将datatable转换成json
            string json = JsonConvert.SerializeObject(dt);
            context.Response.Write(json);//通过http协议将json传回前端
        }
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="context"></param>
        public void DeleteLeave(HttpContext context)
        {
            int id = Convert.ToInt32(context.Request["LeaveID"]);
            string name = HRMS_BLL.Leave_BLL.AuditStatus(id).Rows[0]["ApproverName"].ToString(); 
            if (name == "")
            {
                bool bo = HRMS_BLL.Leave_BLL.DeleteLeave(id);
                if (bo)
                {
                    context.Response.Write("删除成功");
                }
                else
                {
                    context.Response.Write("删除成功");
                }
                

            }else
            {
                context.Response.Write("不可以删除");
                return;
            }
            
        }
        /// <summary>
        /// 请假申请
        /// </summary>
        /// <param name="context"></param>
        public void InsertLeave(HttpContext context)
        {
            string UserID = context.Request["UserID"].ToString();
            string LeaveStartTime = context.Request["LeaveStartTime"].ToString();
            string LeaveEndTime = context.Request["LeaveEndTime"].ToString();
            string LeaveDays = context.Request["LeaveDays"].ToString();
            string LeaveReason = context.Request["LeaveReason"].ToString();

            string[] str = { UserID, LeaveStartTime, LeaveEndTime, LeaveDays, LeaveReason };

            bool bo = HRMS_BLL.Leave_BLL.InsertLeave(str);

            if (bo)
            {
                context.Response.Write("申请成功");
                return;
            }
            else
            {
                context.Response.Write("申请失败");
                return;
            }
        }

        public void UpdateLeave(HttpContext context)
        {
            string LeaveID = context.Request["LeaveID"].ToString();
            string UserName = context.Request["UserName"].ToString();
            string LeaveState = context.Request["LeaveState"].ToString();
            string ApproverReason = context.Request["ApproverReason"].ToString();

            string[] str = { LeaveID,UserName, LeaveState, ApproverReason };
            bool bo = HRMS_BLL.Leave_BLL.UpdateLeave(str);

            if (bo)
            {
                context.Response.Write("审批成功");
                return;
            }
            else
            {
                context.Response.Write("审批失败");
                return;
            }
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