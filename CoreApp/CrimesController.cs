using Angular7;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Linq.Dynamic.Core;
using System.Diagnostics;
using System.Xml.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FirstToday.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class CrimesController : ControllerBase
    {
        // GET: api/<CrimesController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}


     

        [HttpGet("{id}")]
        [ActionName("get")]
        public IEnumerable<severityCountsWithDemos> get(string id)
        {


            //var def = new { body = "" };
            id = id.Trim('"');
            id = id.Trim('"');
            var d = "p=>true";
            try
            {
                d = id != "undefined" ? decode(id.ToString()) : "";
            }
            catch { }


            var dvalues = d;///""+d.Replace(@"\"",@"\"");
            var rtrn = new List<severityCountsWithDemos>();
            using (var db = new atContext())
            {
                List<RaceView> data;
                //if(sex!="X")
                //     data = db.RaceViews.ToList();
                //else
                data = db.RaceViews.Where(d).ToList();
                rtrn = data.GroupBy(i => i.severity).OrderByDescending(i => i.Count())
                      .Select(o => new severityCountsWithDemos { name = o.Key.Trim(), count = o.Count(),kids= data.Where(a => a.severity == o.Key).Select(d => new demo { weight = d.weight, height = d.height, sex = d.sex, race = d.race }).ToList() }).ToList();
              //  Console.WriteLine("got the first bit");

                //foreach (var m in rtrn)
                //{
                //   /// Console.WriteLine("now doing :" + m.name);
                //    //  var ids = data.Where(c => c.severity == m.name).Select(s => s.sheet_id).ToArray();
                //    var demos = data.Where(a => a.severity == m.name).Select(d => new demo { weight = d.weight, height = d.height, sex = d.sex, race = d.race }).ToList();
                //    m.kids = demos;

                //}

            }
            return rtrn;
        }

    
        public static string decode(string text)
        {
            byte[] mybyte = System.Convert.FromBase64String(text);
            string returntext = System.Text.Encoding.UTF8.GetString(mybyte);
            return returntext;
        }
    }
}
