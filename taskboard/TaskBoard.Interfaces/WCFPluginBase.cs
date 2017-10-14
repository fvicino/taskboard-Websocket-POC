using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TaskBoard.Contracts
{
    public abstract class WCFPluginBase:IPlugin
    {
        private DIServiceHost _servieHost=null;

        public Type ServiceType { get; set; }

        public abstract void SetServiceType();

        public void OnStart()
        {
            SetServiceType();
            _servieHost = new DIServiceHost(this.ServiceType, new List<Uri>().ToArray());
            _servieHost.Open();
        }

        public void OnStop()
        {
            _servieHost.Close();
            _servieHost = null;
        }
    }
}
