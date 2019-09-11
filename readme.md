

## 说明
这个是对babel-handbook的练习代码

> https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md

## 快速开始

1. 先安装bable-node
``` bash
npm i -g @babel/core @babel/node

##  命令行输入
babel-node --version
## 输出 7.x版本以上就可以了
7.6.1
```

2. 初始化项目
``` bash
npm install 或者 yarn
```

3. 运行
``` bash
npm start
```


##  核心库的说明

1. **babylon**是babel的解析器,用于生成AST
2. **babel-traverse** 用于遍历、增加、删除、替换AST
3. **babel-types** 用于操作AST节点的工具库，类似于lodash   
4. **babel-generator** 它读取AST并将其转换为代码和源码映射（sourcemaps）
5. **babel-template的** 和它名字一样，专门用于编写代码模板