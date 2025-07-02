cd /home/ubuntu/my-app
pm2 restart my-app || pm2 start bin/www --name my-app
