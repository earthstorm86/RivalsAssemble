# deploy.ps1

# 1. Set the timestamp in index.html
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
(Get-Content index.html) -replace 'BUILD_TIMESTAMP', $timestamp | Set-Content index.html

# 2. Git add, commit, and push
git add index.html
git add .
git commit -m "Deploy: update BUILD_TIMESTAMP to $timestamp"
git push 