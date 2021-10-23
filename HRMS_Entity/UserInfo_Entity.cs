using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRMS_Entity
{
    public class UserInfo_Entity
    {
        public int UserID { get; set; }
        public int DepartmentID { get; set; }
        public int RoleID { get; set; }
        public string Role
        {
            get
            {
                switch (RoleID)
                {
                    case 1: return "总经理";
                    case 2: return "部门经理";
                    case 3: return "人事经理";
                    case 4: return "人事助理";
                    case 5: return "员工";
                    default: return "这是个垃圾";
                }
            }
        }
        public int UserNumber { get; set; }
        public string LoginName { get; set; }
        public string LoginPwd { get; set; }
        public string UserName { get; set; }
        public string UserAge { get; set; }
        public int UserSex { get; set; }
        public string Sex
        {
            get
            {
                if (UserSex == 1)
                {
                    return "男";
                }
                else
                {
                    return "女";
                }
            }
        }
        public string UserIphone { get; set; }
        public string UserAddress { get; set; }
        public string UserStatr { get; set; }
        public string EntryTime { get; set; }
        public string DimissionTime { get; set; }
        public double BasePay { get; set; }
        public string UserRemarks { get; set; }
        public string DepartmentName { get; set; }
    }
}
