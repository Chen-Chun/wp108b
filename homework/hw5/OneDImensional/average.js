var mean=[1,2,3,4,5];
var total=0;
var average=0;
var i=0;

for(;i<mean.length;i++){
     total=total+mean[i];
}

average=total/i;

console.log("%s 的平均值 = %d",mean,average);