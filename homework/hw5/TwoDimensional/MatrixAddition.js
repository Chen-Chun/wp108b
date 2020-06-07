var a = [[1, 2], [3, 4]];
var b = [[1, 1], [1, 1]];
var c = [];
var i,j;

for(i = 0; i < a.length; i++){
    c[i] = [];
    for(j = 0; j < a[i].length; j++){
        c[i][j] = a[i][j] + b[i][j];
    }
}

console.log(c);