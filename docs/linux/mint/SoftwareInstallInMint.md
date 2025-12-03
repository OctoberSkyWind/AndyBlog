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