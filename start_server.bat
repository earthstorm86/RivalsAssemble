@echo off
REM This batch file starts a simple HTTP server using Python.
REM Make sure you have Python installed and in your system's PATH.

echo Starting simple HTTP server on port 8000...
echo Press Ctrl+C to stop the server.

python -m http.server 8000 