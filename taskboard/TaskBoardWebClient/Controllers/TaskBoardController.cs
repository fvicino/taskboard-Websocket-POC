using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TaskBoardWebClient.Properties;

namespace TaskBoardWebClient.Controllers
{
    public class TaskBoardController : Controller
    {
        //
        // GET: /TaskBoard/

        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult TaskBoardState(){


//use the test resource string for now

            System.Web.Script.Serialization.JavaScriptSerializer ser = new System.Web.Script.Serialization.JavaScriptSerializer();

            var jsn = new JsonResult();
            jsn.ContentType = "json";
            jsn.Data = ser.Deserialize<List<Dictionary<string,object>>>(Resources.projects); ;
            jsn.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return jsn;
        }

    }
}
