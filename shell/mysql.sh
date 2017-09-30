#!/bin/bash
##################################

###更新配置,biz,boss,wx
#系统
SYS=(VFangBizSystem VFangBossSystem wxTest)
#停止服务器命令
DOSTOP="./jazmin stop"
#开启服务器命令
DOSTART="./jazmin startbg"
################################服务器配置
#IP
IP=120.25.247.75
#端口
PORT=22
#用户名
USER=root
#密码
PASSWORD=vfangtuan520
################################目录配置

#输入提示
TIP=]#
#命令间隔时间
TIMESPAN=5
#############################登录
/usr/bin/expect << EOF

set timeout 1
spawn ssh ${USER}@${IP}
expect "Password:"
send "${PASSWORD}\r"
expect {                 //返回信息匹配
"yes/no" { send "yes\r"; exp_continue}  //第一次ssh连接会提示yes/no,继续
"Password:" { send "${PASSWORD}\r" }      //出现密码提示,发送密码
}
###############################################
expect "*${TIP}"
send "mysql"
sleep 1
###############################################
send "echo -----脚本执行完成\r"
sleep ${TIMESPAN}
expect EOF
##########################################################

