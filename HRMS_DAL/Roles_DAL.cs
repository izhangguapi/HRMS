using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRMS_DAL
{
    public class Roles_DAL
    {
        public static DataTable LoadRoles() {
            string sql = "select * from Roles";
            return DBHelper.ExecuteSelect(sql);
        }
    }
}
