using Angular7;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System.Linq.Dynamic.Core;
using System.Diagnostics;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Components.Web;


namespace FirstToday.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopBads : ControllerBase
    {
        [HttpGet]
        public IEnumerable<geoNameCount> Get()
        {
            List<geoNameCount> rs = new List<geoNameCount>();
            var rtrn = new List<geoNameCount>();
            using (var db = new atContext())
            {
                rtrn = db.TOP10s.OrderByDescending(o => o.Expr1)
                    .Where(o=>db.orders.FirstOrDefault(oi => oi.ssn == o.ssn2)!=null && db.orders.FirstOrDefault(oi => oi.ssn == o.ssn2).lat!=null)
                      .Select(o => new geoNameCount
                      { id = o.id, name = db.orders.First(oi => oi.ssn == o.ssn2).firstName.Trim() + " " +
                      db.orders.First(oi => oi.ssn == o.ssn2).lastName.Trim()+$" Age: {db.orders.First(oi => oi.ssn == o.ssn2).age}", 
                          lat= db.orders.First(oi => oi.ssn == o.ssn2).lat, lng= db.orders.First(oi => oi.ssn == o.ssn2).lng,  count = o.Expr1.Value }).ToList();

                var last = "";
                foreach (var item in rtrn)
                {
                    item.name = item.name.Trim();
                    if (!item.name.IsNullOrEmpty() && item.name.IndexOf("Age:")!=0)
                    {
                        if (item.name != last)
                        {
                            var crimeKids = db.charges.Where(r => r.sheet_id == item.id).GroupBy(i => i.crime).OrderByDescending(i=>i.Count()).Select(k => new nameCount { name = k.Key.Trim(),count=k.Count()}).ToList();
                            item.kids = crimeKids;
                            last = item.name;
                            rs.Add(item);
                        }


                    }

                }


            }
            return rs;
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
