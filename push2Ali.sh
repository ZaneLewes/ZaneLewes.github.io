#/bin/sh
# 如果没有algolia，需要提前安装 npm i atomic-algolia
hugo
cp -a public/* ../tmp_myblog
cd ../tmp_myblog

git checkout main
#git init
#git remote add deploy ssh://root@goood-man.top:/root/myblog.git
git add -A
git commit -m "rebuilding site $(date)"
git push --set-upstream deploy main
