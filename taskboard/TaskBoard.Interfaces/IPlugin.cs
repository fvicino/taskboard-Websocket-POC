using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TaskBoard.Contracts
{
    public interface IPlugin
    {
        void OnStart();
        void OnStop();
    }

}
