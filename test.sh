echo 'update webdriver'
./node_modules/.bin/webdriver-manager update
sleep 5

(./node_modules/.bin/webdriver-manager start &)
while ! nc -z  127.0.0.1 4444; do sleep 1; done

echo 'start webdriver'

echo 'nightwatch run'
./node_modules/.bin/nightwatch
echo 'done'