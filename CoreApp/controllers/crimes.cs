using Angular7;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System.Linq.Dynamic.Core;
using System.Diagnostics;
using Microsoft.IdentityModel.Tokens;


namespace FirstToday.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class crimes : ControllerBase
    {
        public IatContext _db{ get; set; }
        public crimes(IatContext db) {
            _db = db;
        }


        [HttpGet]
        public IEnumerable<nameCount> Get()
        {

            var rtrn = new List<nameCount>();
                rtrn = _db.RaceViews.GroupBy(i => i.severity).OrderByDescending(i => i.Count())
                      .Select(o => new nameCount { name = o.Key.Trim(), count = o.Count() }).ToList();

            return rtrn;
        }

        [HttpGet("{id}")]
        [ActionName(name: "Get")]
        public List<nameCount> Get(string id)
        {


            Console.WriteLine("made it here to get balls");
            Console.WriteLine("we just got def");
            id = id.Trim('"');
            id = id.Trim('"');
            if (id != "undefined")
            {


            }
            var d = id != "undefined" ? decode(id.ToString()) : "";

             d = d.Replace("~h", "hair.SW(\"");
            d = d.Replace("@e", "eyes.StartsWith(");
            d = d.Replace("@h", "hair.SW(");
            d = d.Replace("@r", "race.SW(");
            d = d.Replace(".SW", ".StartsWith");
            var rtrn = new List<nameCount>();
            using (var db = new Angular7.atContext())
            {
                rtrn = db.RaceViews.Where(d)
                     .GroupBy(i => i.severity).OrderByDescending(i => i.Count())
                     .Select(o => new nameCount { name = o.Key.Trim(), count = o.Count() }).ToList();


            }

            return rtrn;


        }
        // DELETE api/<balls>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        public static string decode(string text)
        {
            byte[] mybyte = System.Convert.FromBase64String(text);
            string returntext = System.Text.Encoding.UTF8.GetString(mybyte);
            return returntext;
        }
    }
}
