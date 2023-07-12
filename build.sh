git switch react-release
git pull origin react
npm run build
git add -f build
git commit -m "build: Build React at $(date -u \"+%h-%d-%Y %H:%M:%S\")"
git push origin react-release
git switch react
