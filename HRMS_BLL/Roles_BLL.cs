using HRMS_DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRMS_BLL
{
    public class Roles_BLL
    {
        public static DataTable LoadRoles()
        {
            return Roles_DAL.LoadRoles();
        }
    }
}
