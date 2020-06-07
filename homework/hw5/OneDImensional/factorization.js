var sd=[1,2,3,4,5];
var total=0;
var ans=0,average;
var i=0,j=0,c=0;
var b=new Array();

for(;i<sd.length;i++){
     total=total+sd[i];
}
average=total/i;

for(c=0;j<sd.length;j++){
    c=sd[j]-average;
    b[j]=c*c;
    ans=ans+b[j];
}

console.log("%s 的標準差 = %d",sd,ans);