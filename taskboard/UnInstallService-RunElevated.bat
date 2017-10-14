
net stop TaskBoardService

%WinDir%\Microsoft.NET\Framework\v4.0.30319\InstallUtil /u C:\TASKBOARD\BIN\TaskBoardService.exe

REM see: http://msdn.microsoft.com/en-us/library/ms733768.aspx
netsh http delete urlacl url=http://+:8000/Notification/

SET /P variable=[Press enter to exit]