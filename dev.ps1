# Start both frontend and backend
$frontend = Start-Process npm run dev -WorkingDirectory .\apps\web -PassThru
$backend = Start-Process npm run start:dev -WorkingDirectory .\apps\api -PassThru

Write-Host "Frontend running on http://localhost:3000" -ForegroundColor Green
Write-Host "Backend running on http://localhost:3001" -ForegroundColor Yellow

# Wait for process exit (optional, for blocking)
# Wait-Process -Id $frontend.Id, $backend.Id
