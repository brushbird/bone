## PlayManager
1. showLoading() 显示加载界面
2. closeLoading() 关闭加载页
3. playScene() 播放场景
4. goNext() 前往下一页
5. start() 开始播放
6. restart() 重新开始
7. showTxt(txt,color) 显示字幕
## 页面脚本
1. 每个页面由一个脚本控制，目录在page下
2. 页面入口由laya可编辑界面内控制，脚本关联在runtime内
3. laya编辑器和引擎内一些方法名不做赘述，参看laya官网文档
## Utils工具类
1. asyncTween(target,to,duration = 1000,easeFunc = Laya.Ease.linearNone) 封装引擎动画方法为promise形式，调用时用await async的写法
2. asyncByTime(time) 间隔一段时间，用await async写法时效果类似sleep
3. toggleSkin(node: Laya.Image, skin1, skin2, delay, maxCount?) 在两个皮肤间切换
4. createDragonBone(url) 龙骨动画生成
## 特殊处理
1. bin/index.html入口内进行背景音乐播放，不在游戏引擎内控制，为了实现微信内无点击自动播放背景音乐的效果
2. 视频页面为播放一个gif，为了兼容微信的假横屏效果，内有横竖两个gif，在首次进入页面时进行判断加载横向还是纵向，并提前加载。