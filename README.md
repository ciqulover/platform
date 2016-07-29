### A Survey Platform
####一个前端问卷调查框架

##### 主要用到的东西：
* vue.js
* webpack
* localStore
* ECMA2015,sass等

##### [demo]()

##### 本地测试
需要node与npm支持

克隆远程库
``` shell
git clone https://github.com/ycwalker/plateform.git
```
移动到plateform目录下 

``` bash
cd plateform
```

安装依赖
``` 
npm install
```

webpack打包生成
```bash
npm run generate
```

上一部编译完成，开启webpack server服务器
```
mpm run start
```
如果一切正常，打开localhost:8080，即可进入登陆页面

默认内置账户 ycwalker , 密码 111

数据库采用前端模拟，存储在localStore里,如果需要重置，打开F12，清空localStore的三个键值对并重新登陆


