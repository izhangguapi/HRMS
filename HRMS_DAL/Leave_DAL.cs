using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRMS_DAL
{
    public class Leave_DAL
    {
        /// <summary>
        /// 按照用户id连表查询(查看自己的请假信息)
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static DataTable SelectLeaveID(int id)
        {
            string sql = "SELECT * FROM Leave,UserInfo WHERE Leave.UserID = UserInfo.UserID and Leave.UserID = '" + id + "'";
            return DBHelper.ExecuteSelect(sql);
        }
        /// <summary>
        /// 总经理查询已审批的请假人员，查询自己部门下未审批的请假人员
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static DataTable SelectLeave()
        {
            string sql = "SELECT * FROM Leave,UserInfo WHERE Leave.UserID = UserInfo.UserID and Leave.LeaveState in (1,2) ORDER BY LeaveState";
            return DBHelper.ExecuteSelect(sql);
        }
        public static DataTable SelectLeave(int id)
        {
            string sql = "SELECT * FROM Leave,UserInfo WHERE Leave.UserID = UserInfo.UserID and Leave.LeaveState='3' and UserInfo.DepartmentID = '" + id + "'";
            return DBHelper.ExecuteSelect(sql);
        }
        
        /// <summary>
        /// 按照表id查询
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static DataTable AuditStatus(int id)
        {
            string sql = "SELECT * FROM Leave,UserInfo WHERE Leave.UserID = UserInfo.UserID and Leave.LeaveID = '" + id + "'";
            return DBHelper.ExecuteSelect(sql);
        }
        /// <summary>
        /// 删除未审核的表
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static bool DeleteLeave(int id)
        {
            string sql = "delete from Leave where LeaveID='" + id + "'";
            return DBHelper.ExecuteNonQuery(sql);
        }
        /// <summary>
        /// 申请请假
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool InsertLeave(string[] str)
        {
            string sql = "insert into Leave values('"+str[0]+ "',getdate(),'" + str[1] + "','" + str[2] + "','" + str[3] + "','" + str[4] + "','','3','','')";
            return DBHelper.ExecuteNonQuery(sql);
        }
        /// <summary>
        /// 审核
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool UpdateLeave(string[] str)
        {
            string sql = "update Leave set ApproverName='" + str[1] + "',LeaveState='" + str[2] + "',ApprovalTime=GETDATE(),ApproverReason='" + str[3] + "' where LeaveID = '" + str[0]+"'";
            return DBHelper.ExecuteNonQuery(sql); ;
        }

    }
}
