using Angular7;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreApp
{
    [Route("api/[controller]")]
    [ApiController]
    public class balls1Controller : ControllerBase
    {
        // GET: api/<balls1Controller>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}
        //[HttpGet]
        //public IEnumerable<nameCount> Get()
        //{
        //        //            return new string[] { "value1", "value2" };
        //        var rtrn = new List<nameCount>();
        //        using (var db = new atContext())
        //        {
        //            rtrn = db.RaceViews.GroupBy(i => i.severity).OrderByDescending(i => i.Count())
        //                  .Select(o => new nameCount { name = o.Key.Trim(), count = o.Count() }).ToList();
        //            //                rtrn = db.charges.Where(o => o.severity == sev).GroupBy(i => i.crime).OrderByDescending(i => i.Count())
        //            //    .Select(o => new nameCount { name = o.Key.Trim(), count = o.Count() }).ToList();




        //        }
        //        return rtrn;
            
        //}
        [HttpGet]
        public string Get()
        {
            //            return new string[] { "value1", "value2" };
            var rtrn = "";
            using (var db = new atContext())
            {
                rtrn = db.Database.GetConnectionString();
                try
                {
                    rtrn = rtrn + db.orders.Count();
                }
                catch (Exception ex)
                {
                    rtrn += ex.ToString();
                
                }
            //    rtrn = db.RaceViews.GroupBy(i => i.severity).OrderByDescending(i => i.Count())
            //          .Select(o => new nameCount { name = o.Key.Trim(), count = o.Count() }).ToList();
            //    //                rtrn = db.charges.Where(o => o.severity == sev).GroupBy(i => i.crime).OrderByDescending(i => i.Count())
            //    //    .Select(o => new nameCount { name = o.Key.Trim(), count = o.Count() }).ToList();




            }
            return rtrn;

        }

        // GET api/<balls1Controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<balls1Controller>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<balls1Controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<balls1Controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
