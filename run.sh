#!/bin/bash

# First, update config.json and copy it to frontend
sed -i 's|"baseURLAPI": "[^"]*"|"baseURLAPI": "http://127.0.0.1:8000/api"|' config.json
cp config.json frontend/src/utils/config.json

# Start PHP server
php artisan serve &

# Store the server process ID
SERVER_PID=$!

# Wait for a moment to ensure server is running
sleep 5

# Update config.json back to production URL
sed -i 's|"baseURLAPI": "[^"]*"|"baseURLAPI": "https://jct.edu.sa/reports/api"|' config.json

# Create a function to handle cleanup
cleanup() {
    echo "Stopping PHP server..."
    kill $SERVER_PID
}

# Set up trap to ensure cleanup on script exit
trap cleanup EXIT

# Keep script running until manually terminated
echo "Server is running. Press Ctrl+C to stop."
wait $SERVER_PID