using System;
using SuperWebSocket;
using SuperSocket.Common;
using SuperSocket.SocketBase.Config;
using SuperSocket.SocketBase;
using SuperSocket.SocketEngine;
using TaskBoard.Contracts;

namespace TaskBoard
{
    public class  WebSocketHost:IPlugin
    {
        //Just one possible service here...
        
        protected WebSocketServer m_WebSocketServer;

        public WebSocketHost(string serviceName, int port)
        {
            //Initialise and wire up the web socket server
            LogUtil.Setup(new ConsoleLogger());
            m_WebSocketServer = new WebSocketServer();
            m_WebSocketServer.Setup(new RootConfig(), new ServerConfig
            {
                Port = port,
                Ip = "Any",
                MaxConnectionNumber = 100,
                Mode = SocketMode.Sync,
                Name = serviceName
            }, SocketServerFactory.Instance);

            m_WebSocketServer.NewMessageReceived += new SessionEventHandler<WebSocketSession, string>(m_WebSocketServer_NewMessageReceived);
            m_WebSocketServer.NewSessionConnected += new SessionEventHandler<WebSocketSession>(m_WebSocketServer_NewSessionConnected);
            m_WebSocketServer.SessionClosed += new SessionEventHandler<WebSocketSession, CloseReason>(m_WebSocketServer_SessionClosed);

        }

        #region WebSocket server handlers

        void m_WebSocketServer_NewMessageReceived(WebSocketSession session, string e)
        {
            Console.WriteLine("Server:" + e);
            //session.SendResponse(e);
            foreach (var x in m_WebSocketServer.GetAllSessions())
            {
                if (x.SessionID != session.SessionID)
                {
                    //x.SendResponseAsync(e); //use synchronous for now there is an issue with sending large number of messages using async
                    x.SendResponse(e);
                }
            }
        }

        void m_WebSocketServer_SessionClosed(WebSocketSession session, CloseReason reason)
        {

        }

        void m_WebSocketServer_NewSessionConnected(WebSocketSession session)
        {
            session.SendResponse("ok I see you");
        }

        #endregion

        public void Open(){
            m_WebSocketServer.Start();
        }

        public void Close(){
            m_WebSocketServer.Stop();
        }

        public void OnStart()
        {
            Open();
        }

        public void OnStop()
        {
            Close();
        }
    }
}
