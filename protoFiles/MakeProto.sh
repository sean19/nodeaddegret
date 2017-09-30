 #!/bin/bash
cmd1="pbjs -t static-module -w commonjs -o protoCompiled.js "
cmd2="pbts -o protoCompiled.d.ts protoCompiled.js"
for i in `ls`;
do
if [ "${i##*.}" == proto ] ;then
cmd1=$cmd1" "$i
echo $i
fi
done
echo ${cmd1}
eval ${cmd1}
eval ${cmd2}
