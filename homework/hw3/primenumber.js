i=3;
j=7;
c=0;

for(a=i;a<=j;a++){
    for(b=2;b<=a/2;b++){
        if(a%b!=0) c++;
    }
}
console.log("CountPrime(%d,%d) have %d",i,j,c);