using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using System.Collections;
using TaskBoardWebClient.Properties;

namespace TaskBoard.Controllers
{
    public class HomeController : Controller
    {
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
