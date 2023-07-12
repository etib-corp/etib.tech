git switch react-release
git reset --hard react
npm install
npm run build
find . -maxdepth 1 -name "*" ! -name "build" ! -name ".git" -exec rm -fr {} +
mv build/* .
rmdir build
git add --all
git commit -m "build: Build React at $(date -u "+%h-%d-%Y %H:%M:%S")"
git push --force origin
git switch react
