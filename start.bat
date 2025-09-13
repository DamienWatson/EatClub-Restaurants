@echo off

cls

if "%~1"=="" (
    GOTO :start
    EXIT /B 0
)

if "%~1"=="h" (
    GOTO :start_help
    EXIT /B 0
)

if "%~1"=="help" (
    GOTO :start_help
    EXIT /B 0
)

EXIT /B 0

:start
    ECHO Run Application.
    ECHO.
    ECHO ----------------------------
    ECHO.
    START "Application" npm start
EXIT /B 0

:start_help
    ECHO ----------------------------------------------------
    ECHO - Run Start:              ./start {1}
    ECHO ----------------------------------------------------
    ECHO     Help {1}:             "h|help"
    ECHO     Start Application {1}:  ""
    ECHO ----------------------------------------------------
EXIT /B 0