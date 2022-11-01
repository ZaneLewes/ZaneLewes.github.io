#/bin/sh
# 如果没有algolia，需要提前安装 npm i atomic-algolia
hugo
git add -A
git commit -m "rebuilding site $(date)"
git push
