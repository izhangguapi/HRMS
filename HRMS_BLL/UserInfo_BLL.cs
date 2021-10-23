using HRMS_DAL;
using HRMS_Entity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace HRMS_BLL
{
    public class UserInfo_BLL
    {
        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="pwd"></param>
        /// <returns></returns>
        public static DataTable Login(string uid,string pwd)
        {
            return UserInfo_DAL.Login(uid, pwd);
        }
        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="UserID"></param>
        /// <param name="LoginName"></param>
        /// <returns></returns>

        public static DataTable ChangePasswordSelect(int UserID, string LoginName)
        {
            return UserInfo_DAL.ChangePasswordSelect(UserID, LoginName);
        }
        public static bool ChangePassword(int UserID, string LoginName)
        {
            return UserInfo_DAL.ChangePassword(UserID, LoginName);
        }
        /// <summary>
        /// 查询全部
        /// </summary>
        /// <returns></returns>
        public static DataTable SelectUserInfo()
        {
            return UserInfo_DAL.SelectUserInfo();

        }
        public static DataTable SelectUserInfoID(int id)
        {
            return UserInfo_DAL.SelectUserInfoID(id);
        }
        /// <summary>
        /// 传过去一个用户ID,查询同事信息
        /// </summary>
        /// <param name="id"></param>
        public static DataTable SelectUserInfoColleague(int id)
        {
            return UserInfo_DAL.SelectUserInfoColleague(id);
        }

        /// <summary>
        /// 删除单行
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static bool DeleteUserInfo(int id)
        {
            return UserInfo_DAL.DeleteUserInfo(id);
        }
        /// <summary>
        /// 删除多行
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool DeleteAllUserInfo(string str)
        {
            return UserInfo_DAL.DeleteAllUserInfo(str);
        }
        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool InsertUserInfo(string[] str)
        {
            return UserInfo_DAL.InsertUserInfo(str);
        }
        /// <summary>
        /// 查询数量
        /// </summary>
        /// <returns></returns>
        public static DataTable SelectUserInfoCount()
        {
            return UserInfo_DAL.SelectUserInfoCount();
        }
        /// <summary>
        /// 管理页面修改
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool UpdateUserInfo(string[] str)
        {
            return UserInfo_DAL.UpdateUserInfo(str);
        }
        /// <summary>
        /// 修改个人资料
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool PersonalUpdateUserInfo(string[] str)
        {
            return UserInfo_DAL.PersonalUpdateUserInfo(str);
        }
        /// <summary>
        /// 修改头像路径
        /// </summary>
        /// <param name="UserNumber"></param>
        /// <param name="imgurl"></param>
        /// <returns></returns>
        public static bool UpdateUserInfoImg(string UserNumber, string ImgUrl)
        {
            return UserInfo_DAL.UpdateUserInfoImg(UserNumber, ImgUrl);
        }
        
    }
}
