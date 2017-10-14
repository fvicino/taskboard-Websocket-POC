
using System.ServiceModel;
using System.ServiceProcess;
using Microsoft.Practices.ServiceLocation;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Configuration;
using System.Collections.Generic;
using TaskBoard.Contracts;


namespace TaskBoard
{
    
    public class TaskBoardService: ServiceBase
    {
//        private WebSocketHost webSocketHost = null;
        private ServiceHost serviceHost = null;

        public TaskBoardService()
        {
            // Name the Windows Service
            ServiceName = "TaskBoardService";
            
            //follow these steps to make a self installing service
            // http://stackoverflow.com/questions/1195478/how-to-make-a-net-windows-service-start-right-after-the-installation/1195621#1195621
            //

            InitialiseContainer();

        }

        #region Windows Serive Methods
        public static void Main()
        {
            ServiceBase.Run(new TaskBoardService());
        }

        // Start the Windows service.
        protected override void OnStart(string[] args)
        {

            //load the plugins
            var plugins = ServiceLocator.Current.GetAllInstances<IPlugin>();
            foreach (var p in plugins) {
                p.OnStart();
            }

        }

        protected override void OnStop()
        {

            var plugins = ServiceLocator.Current.GetAllInstances<IPlugin>();
            foreach (var p in plugins)
            {
                p.OnStart();
            }

        }

        #endregion

        private void InitialiseContainer() {
            //init a unity container
            var c = new UnityContainer();
            c.LoadConfiguration();

            //init the service locator
            var l = new UnityServiceLocator(c);
            ServiceLocator.SetLocatorProvider(() => l);
        }
    }

}
