class Vector{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
    }
    add(v2){
        return([this.x+v2.x,this.y+v2.y,this.z+v2.z]);
    }
    sub(v2){
        return([this.x-v2.x,this.y-v2.y,this.z-v2.z]);
    }
    dot(v2){
        var dot=this.x*v2.x + this.y*v2.y + this.z*v2.z;
        return dot;
    }
    neg(){
        return([0-this.x,0-this.y,0-this.z]);
    }
}

module.exports=Vector;