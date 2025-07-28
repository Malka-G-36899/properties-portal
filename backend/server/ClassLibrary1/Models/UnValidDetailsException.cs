using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models
{
    public class UnValidDetailsException:Exception
    {
        public string Parameter { get; set; }
        
        public UnValidDetailsException(string parameter) : base()
        {
            Parameter=parameter;
        }
        public override string Message => base.Message+" "+Parameter+" is invalid";

    }
}
