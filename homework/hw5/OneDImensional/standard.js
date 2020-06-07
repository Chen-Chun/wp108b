function factor(a){
    var array=[];
    var i=2;
     while(a>1){
        if(a%i==0){
            array.push(i); //某些值加入到陣列的最後一個位置
            a=a/i;
            continue;
        }
        i++; 
     }
    return array;
}

console.log("factor(45) = %s",factor(45));
