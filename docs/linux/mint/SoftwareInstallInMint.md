# SoftwareInstallInMint

[TOC]
[[toc]]

## 环境

```bash

andy@andy-MS-7D90:~/AndyHome/nvm$ cat /etc/os-release 
NAME="Linux Mint"
VERSION="22.1 (Xia)"
ID=linuxmint
ID_LIKE="ubuntu debian"
PRETTY_NAME="Linux Mint 22.1"
VERSION_ID="22.1"
HOME_URL="https://www.linuxmint.com/"
SUPPORT_URL="https://forums.linuxmint.com/"
BUG_REPORT_URL="http://linuxmint-troubleshooting-guide.readthedocs.io/en/latest/"
PRIVACY_POLICY_URL="https://www.linuxmint.com/"
VERSION_CODENAME=xia
UBUNTU_CODENAME=noble


andy@andy-MS-7D90:~/AndyHome/nvm$ lsb_release -a
No LSB modules are available.
Distributor ID: Linuxmint
Description:    Linux Mint 22.1
Release:        22.1
Codename:       xia

```

## 软件安装

### datagrip

```bash
# 1.先行下载 tar包，这里下载了 datagrip-2025.2.4.tar.gz 

# 2. 然后进入 下载目录 

# 3. 解压到 /opt 目录（需 sudo 权限，全局可见）
sudo tar -zxvf datagrip-2025.2.4.tar.gz -C /opt/

# 4. （可选）为解压后的文件夹创建软链接（方便后续升级/调用）
sudo ln -s /opt/datagrip-2025.2.4 /opt/datagrip

# 5.进入 DataGrip 的 bin 目录
cd /opt/DataGrip-2025.2.4/bin

# 6.运行启动脚本
./datagrip.sh

# 7.生成快捷键
# 打开 DataGrip，点击顶部菜单栏 Tools → Create Desktop Entry...；
# 在弹窗中勾选 Create the entry for all users（可选，全局生效），点击 OK；
# 关闭 DataGrip，在 Mint 的应用程序菜单（左下角九宫格）中搜索 “DataGrip”，即可点击启动。


```
### goLand
```bash
# 1. 先行下载 tar包，这里下载了  goland-2025.2.5.tar.gz 
andy@andy-MS-7D90:~/下载$ ll |grep goland
-rw-rw-r--  1 andy andy 1224607298 12月  5 15:50 goland-2025.2.5.tar.gz
andy@andy-MS-7D90:~/下载$ pwd
/home/andy/下载

# 2. 解压压缩包到 /opt 目录
sudo tar -zxvf goland-2025.2.5.tar.gz -C /opt/

# 3. 简化目录名称
sudo mv /opt/GoLand-2025.2.5 /opt/goland

# 4. 启动 GoLand（首次启动，不要用 root 权限）
cd /opt/goland/bin
./goland.sh

# 5.创建桌面快捷方式
# 同 datagrip 一样，创建桌面快捷方式
```

### WebStrom

```bash
#　１．先行下载了　WebStorm
#andy@andy-MS-7D90:~/下载$ ls |grep Storm
#WebStorm-2025.2.5.tar.gz
#andy@andy-MS-7D90:~/下载$ pwd
#/home/andy/下载

# ２．进入下载目录
cd /home/andy/下载

# 解压到 /opt 目录（sudo 确保权限）
sudo tar -zxvf WebStorm-2025.2.5.tar.gz -C /opt/
# 重命名解压后的文件夹,名称可能有差异，自行调整
sudo mv /opt/WebStorm-2025.2.5 /opt/webstorm

# 进入 webstorm 的 bin 目录
cd /opt/webstorm/bin

# 启动 WebStorm(启动时不要用root启动)
./webstorm.sh

#创建桌面快捷方式（同上）
```

### nvm

```bash
# 1. 先行下载了 nvm-0.40.3.tar.gz 并创建 mkdir -p /home/andy/AndyHome/nvm（用于安装nvm的目录）

#andy@andy-MS-7D90:~/下载$ ll |grep nvm
#-rw-rw-r--  1 andy andy     346428 11月 25 09:38 nvm-0.40.3.tar.gz
#andy@andy-MS-7D90:~/下载$ pwd
#/home/andy/下载
mkdir -p /home/andy/AndyHome/nvm

# 2. 进入下载目录，解压
# -zxvf：解压 .tar.gz 格式文件（z = 解压 gzip，x = 提取文件，v = 显示过程，f = 指定文件）；
# -C ~/.nvm：指定解压到用户主目录的 .nvm 文件夹（自动创建）；
# --strip-components=1：去除解压后目录的外层（避免 .nvm/nvm-0.40.3 嵌套）。
cd /home/andy/下载
tar -zxvf nvm-0.40.3.tar.gz -C /home/andy/AndyHome/nvm --strip-components=1


# 3. 配置环境变量
vim ~/.bashrc0

# 行末加上
# 配置 nvm 安装路径（核心）
export NVM_DIR="/home/andy/AndyHome/nvm"
# 加载 nvm 核心脚本
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# 加载 nvm 命令补全（可选，提升使用体验）
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

source ~/.bashrc

# 4. 验证安装 nvm -v
# andy@andy-MS-7D90:~/AndyHome/nvm$ nvm -v
# 0.40.3

# 5. 安装  这里选了 20.19.1 版本
# 下载前 可以配置镜像源 我这使用了魔法 就没有配置
nvm install 20.19.1

# 6. 设为默认版本（可选，避免每次终端重启重新切换）：
nvm alias default 20.19.1

# 7. 验证安装结果
node -v
npm -v

#andy@andy-MS-7D90:~/AndyHome/nvm$ node -v
#v20.19.1
#andy@andy-MS-7D90:~/AndyHome/nvm$ npm -v
#10.8.2

```

### NoSQLBooster

```bash
# 1. 先行下载了 nosqlbooster4mongo-10.0.8.tar.gz 
# andy@andy-MS-7D90:~/下载$ ls |grep nosql
# nosqlbooster4mongo-10.0.8.tar.gz
# andy@andy-MS-7D90:~/下载$ pwd
# /home/andy/下载
# andy@andy-MS-7D90:~/下载$ 


# 2. 安装系统依赖（必装）
# 更新软件源
apt update


# 3.仅安装系统仍支持的依赖（全部可正常定位）
sudo apt install -y \
  libxss1 libnss3 libgtk-3-0t64 libnotify4 \
  libxtst6 libatspi2.0-0t64 libdrm2 libgbm1 libasound2t64 \
  libx11-xcb1 libxcb-dri3-0 libxrandr2 libxi6 \
  fonts-wqy-microhei fonts-wqy-zenhei

# 4.部署程序到 /opt（标准化安装）
# 创建安装目录
sudo mkdir -p /opt/nosqlbooster
# 解压压缩包到 /opt（自动处理文件夹层级）
sudo tar -zxvf /home/andy/下载/nosqlbooster4mongo-10.0.8.tar.gz -C /opt/nosqlbooster --strip-components=1
# 赋予可执行权限
sudo chmod +x /opt/nosqlbooster/nosqlbooster4mongo
# 建立全局软链接（任意目录可启动）
sudo ln -s /opt/nosqlbooster/nosqlbooster4mongo /usr/local/bin/nosqlbooster
# 还原普通用户权限
sudo chown -R andy:andy /opt/nosqlbooster
sudo chown andy:andy /usr/local/bin/nosqlbooster


# 5. 终端临时启动，验证是否能运行
# 方式1：直接调用 /opt 目录下的可执行文件
/opt/nosqlbooster/nosqlbooster4mongo

# 方式2：用我们创建的全局软链接（更简洁，任意目录都能输）
nosqlbooster

# 6. 桌面快捷方式
# 复制到桌面并赋予权限
cp /usr/share/applications/nosqlbooster.desktop ~/桌面/
chmod +x ~/桌面/nosqlbooster.desktop
#　右键桌面图标 → 允许启动 → 双击启动


# 7. 创建桌面快捷方式（系统级）
# 切换到 root 用户（输入密码后）
sudo -i

# 再执行创建快捷方式的命令（此时全程 root 权限）
cat > /usr/share/applications/nosqlbooster.desktop << EOF
[Desktop Entry]
Name=NoSQLBooster for MongoDB
Comment=MongoDB GUI Client (v10.0.8)
Exec=/opt/nosqlbooster/nosqlbooster4mongo
Icon=/opt/nosqlbooster/resources/app/static/icon.png
Terminal=false
Type=Application
Categories=Development;Database;MongoDB;Utility;
Encoding=UTF-8
StartupWMClass=nosqlbooster4mongo
Keywords=MongoDB;NoSQL;Client;GUI;
EOF

# 赋予文件正确权限
chmod 644 /usr/share/applications/nosqlbooster.desktop

# 退出 root 身份
exit
#　点击 Mint 左下角开始菜单 → 搜索 “NoSQLBooster” → 点击启动。

```

### uTools

- 配置开启自动启动

```bash

```

### 安装 Anaconda

- 安装时间点 2025-12-04 10:04:08
    - 基于该时间点下选择的版本和安装方式

```bash
# 1. 更新系统依赖（可选但推荐，避免安装时缺失依赖）
sudo apt update && sudo apt upgrade -y

# 2. 安装下载/解压必需工具
sudo apt install wget bzip2 -y

# 3. 切换到用下载目录（避免下载到零散目录，方便查找），创建一个 Anaconda 目录
cd /home/andy/AndyHome/DownLoad
mkdir -p Anaconda

andy@andy-MS-7D90:~/AndyHome/DownLoad/Anaconda$ pwd
/home/andy/AndyHome/DownLoad/Anaconda

# 4. 下载2025.06-1 Linux x86_64版本（官方直链，无需登录）
wget https://repo.anaconda.com/archive/Anaconda3-2025.06-1-Linux-x86_64.sh

# 5. 校验安装包完整性（关键！避免文件损坏导致安装失败）
echo "82976426a2c91fe1453281def386f9ebebd8fdb45dc6c970b54cfef4e9120857 *Anaconda3-2025.06-1-Linux-x86_64.sh" | shasum -a 256 --check

# 6. 运行安装程序

bash Anaconda3-2025.06-1-Linux-x86_64.sh
# 有一些交互，包括安装位置选择，注入环境变量等等，
# 我这边选择的安装目录如下  /home/andy/AndyHome/anaconda3
# Anaconda3 will now be installed into this location:
# /home/andy/anaconda3
#  - Press ENTER to confirm the location
#  - Press CTRL-C to abort the installation
#  - Or specify a different location below
# [/home/andy/anaconda3] >>> /home/andy/AndyHome/anaconda3



#　7. 生效环境变量
# 适配默认bash终端
source ~/.bashrc

# 8. 配置 conda的环境变量
# 搜索anaconda3目录（默认在用户主目录，若你改了安装路径需对应调整）
find ~ -name "anaconda3"

# 8. 验证安装是否成功（可以重开一个bash）
conda --version
# 成功输出示例：conda 24.9.0（版本号随安装包略有差异）
python --version
# 成功输出示例：Python 3.11.9 :: Anaconda, Inc.
anaconda-navigator
# 成功会弹出Anaconda图形管理窗口

#　9. 优化配置
## 关闭base环境自动激活（避免终端前缀一直显示(base)）
conda config --set auto_activate_base false

# 配置清华镜像源（国内用户必做，加速包下载，翻墙下载速度还可以 可以不配置）
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes

# 10. 常用操作
# 手动激活base环境（关闭自动激活后，需要时执行）
conda activate base

# 创建新环境（示例：创建python3.10的环境，命名为myenv）
conda create -n myenv python=3.10

# 激活新环境
conda activate myenv

# 退出当前环境
conda deactivate
```

### 安装 PyCharm

```bash
# 下载软件  当前版本是 pycharm-2025.2.5.tar.gz
andy@andy-MS-7D90:~/下载$ pwd
/home/andy/下载
andy@andy-MS-7D90:~/下载$ ls|grep pycharm
pycharm-2025.2.5.tar.gz

# 1. 打开终端并进入下载目录
cd /home/andy/下载

# 2. 解压安装包到全局目录 /opt 
sudo tar -zxvf pycharm-2025.2.5.tar.gz -C /opt/

# 3. 创建软链接
# 先验证解压后的文件夹名称（防止名称不一致）：
ls /opt | grep pycharm

# 创建软链接（将 pycharm-2025.2.5 链接为 pycharm，简化路径）：
sudo ln -s /opt/pycharm-2025.2.5 /opt/pycharm

# 4. 启动 PyCharm
cd /opt/pycharm/bin
./pycharm.sh

# 5. 创建 Mint 桌面快捷方式（永久生效）同上

# 6. 添加命令行快捷启动（可选，终端一键启动）
# 实现 任意终端输入 pycharm 即可启动，可创建别名：
vim ~/.bashrc
# 文件末尾添加
# PyCharm 快捷启动别名
alias pycharm='/opt/pycharm/bin/pycharm.sh'
# 配置环境变量
source ~/.bashrc
```
