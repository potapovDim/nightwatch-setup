if [ "$(ls -A ./node_modules/webdriver-manager/selenium)" ]; then
      nc -z  127.0.0.1 4444 &&  kill `ps -ef|grep -i selenium| grep -v grep| awk '{print $2}'`
else 
  ./node_modules/.bin/webdriver-manager update
  sleep 5
fi

(./node_modules/.bin/webdriver-manager start &)
while ! nc -z  127.0.0.1 4444; do sleep 1; done

./node_modules/.bin/nightwatch


./node_modules/.bin/webdriver-manager shutdown

#sleep 3
#./node_modules/.bin/webdriver-manager clean