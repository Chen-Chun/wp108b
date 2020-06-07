var sd=[1,2,3,4,5];
var total=0;
var ans,average;
var i=0;

for(;i<sd.length;i++){
     total=total+sd[i];
}
average=total/i;

ans=total/i;

console.log("%s 的標準差 = %d",sd,ans);