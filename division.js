class  {
    constructor(x,y,w,h){
        var options = {
           
            isStatic = true
       
        }
        this.body.Bodies.rectangle(x,y,w,h,options)
        this.x = x;
        this.y = y;
        World.add(this.body,world)
    }
    display(){
        var pos = this.body.position

        
        rectMode(CENTRE);
        fill("pink")
        rect(pos.x,pos.y,this.x,this.y)
            }
}