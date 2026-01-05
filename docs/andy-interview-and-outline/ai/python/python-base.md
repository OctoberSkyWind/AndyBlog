# Python Base

## Python ENV

#### pip::pip 安装 requirements.txt 依赖： pip install -r requirements.txt

#### conda::conda关闭默认base激活

#### uv::uv创建虚拟环境

#### uv::windows下激活指定位置nv环境,powershell终端执行 安装目录\Script\Activate.ps1

#### uv::windows下激活指定位置nv环境cmdl终端执行 安装目录\Script\Activate.bat

##     

#### Python 中的相对路径主要是相对于程序的当前工作目录（CWD),当前工作目录是 Python 解释器在运行时所处的目录,load_dotenv("./.env")加载时，是指的当前工作目录下的.env文件

#### _xxx（单下划线：约定俗成（非语法），标识「内部使用」，提示开发者勿外部调用,可直接访问（不推荐）

#### __xxx（双下划线）:语法特性（名称改写,直接访问访问不到，可以通过改写后的名称访问）,避免子类覆盖、实现真正封装，无法直接访问，可通过_类名__xxx访问（不推荐）

#### \_\_xxx\_\_（前后双下划线）:内置魔法方法,实现类的特殊功能（如构造、格式化等）,可直接访问，通常通过内置函数间接调用（如str(obj)等价于obj.\_\_str\_\_()）

#### \_\_eq\_\_ 方法就是 == 相等运算符的底层实现逻辑，可以类比java中的equals方进行理解

## 类型注解

#### Python中类型注解与实际的属性值实际赋值不要求一致，只是一种提示作用，编译器完全允许，仅静态检查工具（如mypy）会根据注解进行类型检查，如Pydantic/SQlAlchemy等都利用了这种类型注解的特性（仅为注释，无实际效果），然后提供对应的如mypy插件，让静态工具可以识别，从而不报错

## python 方法

#### 对象判断布尔真假规则本质，优先调用__bool__(self)，未定义 __bool__()，则调用 __len__(self) 兜底，两者均未定义，对象默认恒为 True

## 常用类

#### Queue::get() 从队列取出数据（物理操作），而task_done() 和 join() 的操作对象都是内部计数器，分别是减少内部计数器（逻辑标记）和检查计数器是否归零（同步等待）_


## 异常
#### Python 所有异常或错误均直接或间接继承 BaseException，无 Java 的 Exception/Error 划分，工程上绝大多数场景禁止 except: / except BaseException捕获所有异常，工程开发中，99% 的业务场景只需捕获 Exception；BaseException 的其他直接子类，属于「不应被业务代码捕获」的范畴。