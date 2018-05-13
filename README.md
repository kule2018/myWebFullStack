# hx_js_fullstack
邓力js全栈学习
 # git的时光机					   仓库中的.git 文件夹是版本库，不要乱动，否则就没法使用回退
 git log --pretty=oneline          查看commit记录
 git reset --hard HEAD^			   回退到上一版本	HEAD是git提供的一个指针，指向当前版本， HEAD^^指向上上个版本	HEAD~100  回退到前100个版本
 git reset --hard commit_id        回退到commit_id指向的版本
 git reflog 					   查看到历史命令，帮助我们重返未来
 git checkout -- file			   撤销修改，使文件回到最近一次git commit或git add时的状态	  命令中的--很重要，没有--，就变成了“切换到另一个分支”的命令
 git reset HEAD file			   撤销暂存区的更改
 
 # 远程仓库技巧
 git remote add origin git@server-name:path/repo-name.git    本地git仓库关联到GitHub仓库
 git push -u origin master		   将本地仓库推送到远程仓库   第一次加上-u关联	后续提交可省去简化命令
 
 # 分支管理
 git branch <name>     			   创建一个分支        master为主分支
 git checkout -b dev			   git创建分支并切换到当前新创建的分支上
 git checkout <name>   			   切换分支
 git branch    					   查看当前所使用的分支
 git push -u origin study   	   提交到新的git远程study分支
 git branch -d <name> 			   删除分支
 git branch -D <name>              强行删除一个分支
 
 # Bug分支
 git stash						   保存当前的工作现场
 git stash list					   显示已保存的现场
 git stash apply stash@{0}         恢复指定现场
 git stash drop					   删除已保存的现场
 git stash pop					   恢复的同时把stash内容也删了
 
 # 多人协作
 首先，可以试图用git push origin branch-name推送自己的修改
 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并
 如果合并有冲突，则解决冲突，并在本地提交
 没有冲突或者解决掉冲突后，再用git push origin branch-name推送就能成功！
 如果git pull提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream branch-name origin/branch-name
 
 # 标签管理
 git tag <name>					   用于新建一个标签，默认为HEAD，也可以指定一个commit id
 git tag -d <name>				   删除标签
 git tag -a <tagname> -m ''        可以指定标签信息
 git tag -s <tagname> -m ''		   可以用PGP签名标签
 git show <tagname>				   可以看到说明文字或PGP签名信息
 git tag						   可以查看所有标签
 git push origin <tagname>		   推送某个标签到远程		标签不会自动推送到远程      
 git push origin --tags			   一次性全部推送
 git push origin :refs/tags/<tagname>          				 可以删除一个远程标签
 
