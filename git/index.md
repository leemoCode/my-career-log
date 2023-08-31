## 本地分支与远程分支关联1
git branch --set-upstream-to=origin/remote_branch  your_branch

remote_branch = 你本地分支对应的远程分支
your_branch = 是你当前的本地分支

## 本地分支与远程分支关联2
git push --set-upstream origin  xxx

## 提交时绕过eslint检查验证（不推荐）
git commit -m 'xxx' --no-verify

## 撤回上一次commit操作
git reset --soft HEAD^
使用cmd时 more? 额外加一个^

## 删除本地分支
git branch -d xxx

## 删除远程分支
git push origin --delete xxx

## 将远程分支向本地同步一次
git remote update -p

## 快速删除node_modules文件夹
全局安装rimraf：
npm install rimraf -g
到你的项目根目录下（即有node_modules的目录），执行命令：
rimraf node_modules

## 清除缓存
npm cache clean --force

## 回退到某版本
git reset --hard commit_id

## 放弃本次merge
git reset --merge

## 暂存代码等操作
git stash 暂存
git stash list 查看暂存信息
git stash pop 取出
git stash clear 清空暂存栈