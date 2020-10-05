# start
## git init
## npm init -y
## npm install nightwatch --save-dev
## npm install chromedriver --save-dev
## npm install geckodriver --save-dev

# install without proxy
## npm --without-ssl --insecure --proxy http://user:pass@proxy-proxy.net:8080 install nightwatch --save-dev

# run tests
## npm test

# useful links
#### https://stackoverflow.com/questions/38570209/making-global-npm-packages-available-to-all-users-on-windows-2012-server
##### CMD > npm prefix -g
##### Set the global prefix to the CI user: npm config set prefix <C:\Users\CI_USER\AppData\Roaming\npm>
##### Install the needed packages: npm i -g PKG
##### Restore the prefix to the previous value.

#### https://github.com/coding-with-dom/intro-to-nightwatchjs
#### https://www.youtube.com/playlist?list=PLHe-juD38yt4t38EsggDx2viWXz9Dc0OS
#### https://piecioshka.pl/blog/2017/08/09/jak-napisac-testy-end-to-end-z-wykorzystaniem-nightwatch-oraz-chrome-headless.html
#### https://github.com/piecioshka/test-nightwatch-chrome-headless
#### https://github.com/dwyl/learn-nightwatch