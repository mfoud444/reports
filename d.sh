cp config.json frontend/src/utils/config.json
cd frontend && pnpm build && cd ..
mv server.php index.php
sed -i 's/ini_set('\''display_errors'\'', 1);/ini_set('\''display_errors'\'', 0);/' index.php
git add .
git commit -m "Add new"
git push origin main
mv index.php server.php
sed -i 's/ini_set('\''display_errors'\'', 0);/ini_set('\''display_errors'\'', 1);/' server.php
