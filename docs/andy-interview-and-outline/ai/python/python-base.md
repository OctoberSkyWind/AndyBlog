# Python Base

## Python ENV

#### pip::pip 安装 requirements.txt 依赖： pip install -r requirements.txt

#### conda::conda关闭默认base激活

#### uv::uv创建虚拟环境

#### uv::windows下激活指定位置nv环境,powershell终端执行 安装目录\Script\Activate.ps1

#### uv::windows下激活指定位置nv环境cmdl终端执行 安装目录\Script\Activate.bat

##  

#### _xxx（单下划线：约定俗成（非语法），标识「内部使用」，提示开发者勿外部调用,可直接访问（不推荐）

#### __xxx（双下划线）:语法特性（名称改写,直接访问访问不到，可以通过改写后的名称访问）,避免子类覆盖、实现真正封装，无法直接访问，可通过_类名__xxx访问（不推荐）

#### \_\_xxx\_\_（前后双下划线）:内置魔法方法,实现类的特殊功能（如构造、格式化等）,可直接访问，通常通过内置函数间接调用（如str(obj)等价于obj.\_\_str\_\_()）



