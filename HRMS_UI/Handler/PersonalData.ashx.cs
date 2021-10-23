using System;
using System.Collections.Generic;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;

namespace HRMS_UI.Handler
{
    /// <summary>
    /// PersonalData 的摘要说明
    /// </summary>
    public class PersonalData : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string method = context.Request["Method"];
            switch (method)
            {
                case "Base64ToImage":
                    Base64ToImage(context);
                    break;
                case "ImgToBase64String":
                    ImgToBase64String(context);
                    break;
            }
        }

        /// <summary>
        /// base64 转 Image
        /// </summary>
        /// <param name="base64"></param>
        public static void Base64ToImage(HttpContext context)
        {
            string base64 = context.Request["base64"];
            string UserNumber = context.Request["UserNumber"];
            base64 = base64.Replace("data:image/png;base64,", "").Replace("data:image/jgp;base64,", "").Replace("data:image/jpg;base64,", "").Replace("data:image/jpeg;base64,", "");//将base64头部信息替换
            byte[] bytes = Convert.FromBase64String(base64);
            MemoryStream memStream = new MemoryStream(bytes);
            Image mImage = Image.FromStream(memStream);
            Bitmap bp = new Bitmap(mImage);
            string ImgUrl = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "/") + "upload/img/" + UserNumber + ".jpg";
            bp.Save(ImgUrl, System.Drawing.Imaging.ImageFormat.Jpeg);//保存文件
            HRMS_BLL.UserInfo_BLL.UpdateUserInfoImg(UserNumber, ImgUrl);//路径保存数据库
            context.Response.Write(true);
        }
        /// <summary>
        /// Image 转成 base64文本
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public static void ImgToBase64String(HttpContext context)
        {
            int UserID = Convert.ToInt32(context.Request["UserID"]);
            DataTable dt = HRMS_BLL.UserInfo_BLL.SelectUserInfoID(UserID);
            string ImgUrl = dt.Rows[0]["ImgUrl"].ToString();
            if (ImgUrl == "")
            {
                context.Response.Write("");
            }
            FileStream fs = new FileStream(ImgUrl, FileMode.Open, FileAccess.Read);
            byte[] buffer = new byte[fs.Length];
            fs.Read(buffer, 0, (int)fs.Length);
            string base64String = Convert.ToBase64String(buffer);
            context.Response.Write(base64String);
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