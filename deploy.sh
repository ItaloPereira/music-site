git branch -D master &&
git checkout -b master &&
npm install && npm run build &&
rm -rf .dist &&
cp -r dist/* ./ &&
rm -rf src
rm -rf node_modules
rm -rf dist
rm .editorconfig
rm .gitignore
rm .imageOptim.js
rm html-files.js
rm package.json
rm package-lock.json
rm webpack.config.build.js
rm webpack.config.dev.js
git add --all && git commit -m 'deploy' && git pull origin master && git add --all && git commit -m 'deploy' && git push origin master
