using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using HRMS_Entity;

namespace HRMS_DAL
{
    public class UserInfo_DAL
    {
        //修改密码
        public static DataTable ChangePasswordSelect(int UserID, string LoginName)
        {
            string sql = "select * from UserInfo where UserID='"+ UserID + "' and LoginPwd='"+ LoginName + "'";
            return DBHelper.ExecuteSelect(sql);
        }
        public static bool ChangePassword(int UserID, string LoginName)
        {
            string sql = "update UserInfo set LoginPwd = '"+ LoginName + "' where UserID = '"+ UserID + "'";
            return DBHelper.ExecuteNonQuery(sql);
        }

        //登录
        public static DataTable Login(string uid, string pwd)
        {
            //string strSql =string.Format("select * from UserInfo where LoginName='{0}' and LoginPwd='{1}'",name,pwd);
            string sql = "select * from UserInfo where (LoginName=@LoginName or UserIphone=@LoginName or UserNumber=@LoginName) and LoginPwd=@LoginPwd";

            SqlParameter[] para = new SqlParameter[]{
                new SqlParameter("LoginName",uid),//第一个参数@符号后面的名称 第二个参数：你想赋值
                new SqlParameter("LoginPwd",pwd)
            };
            return DBHelper.ExecuteSelect(sql, para);

 
        }
        //查询
        public static DataTable SelectUserInfo()
        {
            string sql = "select * from UserInfo,Department,Roles where UserInfo.DepartmentID = Department.DepartmentID and UserInfo.RoleID=Roles.RoleID";
            return DBHelper.ExecuteSelect(sql);
        }
        public static DataTable SelectUserInfoID(int id)
        {
            string sql = "select * from UserInfo,Department,Roles where UserInfo.DepartmentID = Department.DepartmentID and UserInfo.RoleID =Roles.RoleID and UserID='" + id + "'";
            return DBHelper.ExecuteSelect(sql);
        }
        /// <summary>
        /// 传过去一个用户ID,查询同事信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static DataTable SelectUserInfoColleague(int id)
        {
            string sql = "select * from UserInfo where DepartmentID = (select DepartmentID from UserInfo where UserID = '" + id + "')";
            return DBHelper.ExecuteSelect(sql);
        }
        //删除
        public static bool DeleteUserInfo(int id)
        {
            string sql = "delete UserInfo where UserID=@UserID";
            SqlParameter[] para = new SqlParameter[] {
                new SqlParameter("UserID",id)
            };
            return DBHelper.ExecuteNonQuery(sql, para);
        }
        //删除多行
        public static bool DeleteAllUserInfo(string str)
        {
            string sql = "delete UserInfo where UserID IN(" + str + ")";
            return DBHelper.ExecuteNonQuery(sql);
        }
        //添加
        public static bool InsertUserInfo(string[] str)
        {
            string sql = "insert into UserInfo values('" + str[0] + "','" + str[1] + "','" + str[2] + "','" + str[3] + "','" + str[4] + "','" + str[5] + "','" + str[6] + "','" + str[7] + "','" + str[8] + "','" + str[9] + "','" + str[10] + "','','" + str[11] + "','" + str[12] + "','')";
            return DBHelper.ExecuteNonQuery(sql); ;
        }
        
        //查询数量
        public static DataTable SelectUserInfoCount()
        {
            string sql = "select count(*) num from UserInfo";
            return DBHelper.ExecuteSelect(sql);
        }
        //管理修改
        public static bool UpdateUserInfo(string[] str) {
            string sql = "update UserInfo set DepartmentID = '" + str[1] + "', RoleID = '" + str[2] + "', UserNumber = '" + str[3] + "'  ,LoginName = '" + str[4] + "',LoginPwd = '" + str[5] + "',UserName = '" + str[6] + "',UserAge = '" + str[7] + "',UserSex = '" + str[8] + "',UserIphone = '" + str[9] + "',UserAddress = '" + str[10] + "',UserStatr = '" + str[11] + "', DimissionTime = '" + str[12] + "', BasePay = '" + str[13] + "' where UserID = " + str[0] + "";
            return DBHelper.ExecuteNonQuery(sql);
        }
        
        //个人资料修改
        public static bool PersonalUpdateUserInfo(string[] str)
        {
            string sql = "update UserInfo set UserName = '" + str[1] + "',UserAge = '" + str[2] + "',UserIphone = '" + str[3] + "',UserAddress = '" + str[4] + "',UserRemarks='"+ str[5] + "' where UserID = " + str[0] + "";
            return DBHelper.ExecuteNonQuery(sql);
        }
        public static bool UpdateUserInfoImg(string UserNumber, string imgurl)
        {
            string sql = "update UserInfo set ImgUrl='"+ imgurl + "' where UserNumber='"+ UserNumber + "'";
            return DBHelper.ExecuteNonQuery(sql);
        }
        
    }

}

