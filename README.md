
# 我的网页版简历
> 基于 gulp、jQuery 构建的个人简历

在线访问 [http://meishadevs.com/resume/](http://meishadevs.com/resume/)

项目运行

	# 将项目克隆到本地
	git clone https://github.com/meishadevs/resume.git

	# 进入resume目录下
	cd resume

	# 安装依赖
	npm install

	# 执行gulp任务编译项目，此时会自动生成一个dist文件夹，将dist文件夹部署到服务器上后，便可访问
	gulp defaultTask

	# 执行gulp任务运行项目，此时会自动使用默认的浏览器打开简历页，当修改src目录下的文件时，网页会自动刷新，并显示修改后的内容
	gulp server
