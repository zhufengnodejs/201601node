#learnGitBranching 是什么
learnGitBranching是一个git仿真沙盒，提供一系列的交互式学习指导/挑战，用来加快学习git提交树如何工作。 
learnGitBranching的主界面左边是模拟终端窗口，另外是图示区。图示区用图形表明了git代码库当前的提交记录、分支、HEAD指向等。 
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/gitpractice.jpg" class="img-responsive">

#如何使用
learnGitBranching通过关卡的形式，逐步展开对git的学习。每一关开始是对要学习的主题的一些介绍，包含操作原理，要使用到的命令，以及命令执行后的图示。介绍完成之后，会显示这一关的goal。在输入命令并执行后，右边的代码库图示会自动更新以呈现最新状态。
根据关卡题目，输入并执行正确的命令，当程序匹配到通关需要的结果时即可以过关。
如果要跳过每一关开始的介绍，可以按Esc。右下角的两个按钮分别是帮助菜单与语言选择。
当前支持的git命令有
* commit
* branch
* checkout
* cherry-pick
* reset
* revert
* rebase
* merge

终端模拟窗口中不仅可以执行git命令，还可以执行一些控制命令。
* show goal: 显示关卡目标
* hide goal: 隐藏关卡目标
* help level: 显示当前关卡帮助
* help general: 显示程序帮助
* show solution: 显示答案
* undo: 撤销
* reset: 重新开始

完整的命令列表，请参考：
* show commands: 显示所有命令

#关卡
现在共有14关，包含4关基础，4关相对引用，2关高级rebase，3关综合，以及1关高难度

#资源
1. 官网
http://pcottle.github.io/learnGitBranching
2. GitHub
https://github.com/pcottle/learnGitBranching
