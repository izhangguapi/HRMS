using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRMS_DAL
{
    public class Department_DAL
    {
        //获取部门和名字
        public static DataTable HomeLoad(string UserID)
        {
            string sql = "select UserName,DepartmentName,RoleName from UserInfo,Department,Roles where UserInfo.DepartmentID = Department.DepartmentID and UserInfo.RoleID=Roles.RoleID and UserID = @UserID";
            SqlParameter[] para = new SqlParameter[]{
                new SqlParameter("UserID",UserID),//第一个参数@符号后面的名称 第二个参数：你想赋值
            };
            return DBHelper.ExecuteSelect(sql, para);
        }

        //查询全部、模糊查询、按照id查询
        public static DataTable SelectDepartment()
        {
            string sql = "select * from Department";
            return DBHelper.ExecuteSelect(sql);
        }
        public static DataTable SelectDepartment(string str)
        {
            string sql = "select * from Department where 1 = 1 and DepartmentName like '%" + str + "%'";
            return DBHelper.ExecuteSelect(sql);
        }
        public static DataTable SelectDepartment(int id)
        {
            string sql = "select * from Department where DepartmentID='" + id + "'";
            return DBHelper.ExecuteSelect(sql);
        }

        //删除
        public static bool DeleteDepartment(int id)
        {
            string sql = "delete UserInfo where DepartmentID=@DepartmentID;delete from Department where DepartmentID=@DepartmentID";
            SqlParameter[] para = new SqlParameter[] {
                new SqlParameter("DepartmentID",id)
            };
            return DBHelper.ExecuteNonQuery(sql, para); ;
        }
        //删除多行
        public static bool DeleteAllDepartment(string str)
        {
            string sql = "delete UserInfo where DepartmentID IN(" + str + ");delete Department where DepartmentID IN(" + str + ")";
            return DBHelper.ExecuteNonQuery(sql); ;
        }
        //添加
        public static bool InsertDepartment(string str1, string str2)
        {
            string sql = "insert into Department values('" + str1 + "','" + str2 + "')";
            return DBHelper.ExecuteNonQuery(sql);
        }
        //修改
        public static bool UpdataDepartment(string[] str) {
            string sql = "update Department set DepartmentName = @DepartmentName , DepartmentRemarks = @DepartmentRemarks where DepartmentID = @DepartmentID";
            SqlParameter[] para = new SqlParameter[] {
                new SqlParameter("DepartmentID",str[0]),
                new SqlParameter("DepartmentName",str[1]),
                new SqlParameter("DepartmentRemarks",str[2])
            };
            return DBHelper.ExecuteNonQuery(sql, para);
        }

    }
}
