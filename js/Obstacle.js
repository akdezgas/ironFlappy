function Obstacle(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function(){
       ctx = myGameArea.context;
       ctx.fillStyle = color;
       ctx.fillRect(this.x, this.y, this.width, this.height);
   }
}

Obstacle.prototype.newPos = function(){
  this.x += this.speedX;
  this.y += this.speedY;
}
Obstacle.prototype.left = function(){ return this.x }

Obstacle.prototype.right = function(){  return this.x + this.width  }

Obstacle.prototype.top = function(){  return this.y }

Obstacle.prototype.bottom = function(){ return this.y + this.height }

Obstacle.prototype.crashWith = function(obstacle){
  return !((this.bottom() < obstacle.top())    ||
           (this.top()    > obstacle.bottom()) ||
           (this.right()  < obstacle.left())   ||
           (this.left()   > obstacle.right()))
}
