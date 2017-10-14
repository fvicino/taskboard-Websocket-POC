
REM see: http://msdn.microsoft.com/en-us/library/ms733768.aspx
netsh http add urlacl url=http://+:8000/Notification/ user=Frank-pc\frank



%WinDir%\Microsoft.NET\Framework\v4.0.30319\InstallUtil C:\TASKBOARD\BIN\TaskBoardService.exe

net start TaskBoardService

SET /P variable=[Press enter to exit]