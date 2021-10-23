using HRMS_DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRMS_BLL
{
    public class Leave_BLL
    {
        /// <summary>
        /// 按照用户id连表查询
        /// </summary>
        /// <param name="id"></param>
        public static DataTable SelectLeaveID(int id)
        {
            return Leave_DAL.SelectLeaveID(id);
        }
        /// <summary>
        /// 查询所有请假人员，查询自己部门下的请假人员
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static DataTable SelectLeave()
        {
            return Leave_DAL.SelectLeave();
        }
        public static DataTable SelectLeave(int id)
        {
            return Leave_DAL.SelectLeave(id);
        }
        
        /// <summary>
        /// 按照表id查询
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static DataTable AuditStatus(int id)
        {
            return Leave_DAL.AuditStatus(id);
        }
        /// <summary>
        /// 删除未审核的表
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static bool DeleteLeave(int id)
        {
            return Leave_DAL.DeleteLeave(id);
        }
        /// <summary>
        /// 申请请假
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool InsertLeave(string[] str)
        {
            return Leave_DAL.InsertLeave(str);
        }
        /// <summary>
        /// 审核
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool UpdateLeave(string[] str)
        {
            return Leave_DAL.UpdateLeave(str);
        }

        
    }
}
