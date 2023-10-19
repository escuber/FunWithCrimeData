using Angular7;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System.Linq.Dynamic.Core;
using System.Diagnostics;
using System;


namespace FirstToday.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class dicksController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<nameCount> Get()
        {

            var rtrn = new List<nameCount>();
            using (var db = new atContext())
            {
                return db.RaceViews.GroupBy(i => i.crime).OrderByDescending(i => i.Count())
                    .Select(o => new nameCount() { name = o.Key, count = o.Count() }).ToList();
                        }
        }

        [HttpGet("{id}")]
        [ActionName(name: "Getit")]
        public List<nameCount> GetIt(string id)
        {
            id = id.Trim('"');
            id = id.Trim('"');
            var d = crimes.decode(id.ToString());

            d = d.Replace("~h", "hair.SW(\"");
            d = d.Replace("@e", "eyes.StartsWith(");
            d = d.Replace("@h", "hair.SW(");
            d = d.Replace("@r", "race.SW(");

            d = d.Replace(".SW", ".StartsWith");

            var rtrn = new List<nameCount>();
            using (var db = new Angular7.atContext())
            {
                rtrn = db.RaceViews.Where(d.ToString())
                .GroupBy(i => i.crime).OrderByDescending(i => i.Count())
                       .Select(o => new nameCount() { name = o.Key.Trim(), count = o.Count() }).ToList();




            }
            return rtrn;


        }



    }
}