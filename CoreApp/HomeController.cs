using Microsoft.AspNetCore.Mvc;

namespace CoreApp
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return RedirectPermanent("~/index.html");
            //return View();
        }
    }
}
