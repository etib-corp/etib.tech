git switch react-release
git pull --force origin react
npm run build
find . -maxdepth 1 -name "*" ! -name "build" -delete
mv build/* .
rmdir build
git add --all
git commit -m "build: Build React at $(date -u "+%h-%d-%Y %H:%M:%S")"
git push origin react-release
git switch react
