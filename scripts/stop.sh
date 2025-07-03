echo "Stopping PM2 app..."
pm2 delete my-app || echo "PM2 app not running, skip."
