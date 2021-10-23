using HRMS_DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRMS_BLL
{
    public class Department_BLL
    {
        public static DataTable HomeLoad(string UserID)
        {
            return Department_DAL.HomeLoad(UserID);
        }

        //查询
        public static DataTable SelectDepartment()
        {
            return Department_DAL.SelectDepartment();
        }
        public static DataTable SelectDepartment(string str)
        {
            return Department_DAL.SelectDepartment(str);
        }
        public static DataTable SelectDepartment(int id)
        {
            return Department_DAL.SelectDepartment(id);
        }

        ///删除
        public static bool DeleteDepartment(int id)
        {
            return Department_DAL.DeleteDepartment(id);
        }
        //删除多行
        public static bool DeleteAllDepartment(string str)
        {
            return Department_DAL.DeleteAllDepartment(str);
        }
        //添加
        public static bool InsertDepartment(string str1, string str2)
        {
            return Department_DAL.InsertDepartment(str1, str2);
        }
        //修改
        public static bool UpdataDepartment(string[] str)
        {
            return Department_DAL.UpdataDepartment(str);
        }
    }
}
