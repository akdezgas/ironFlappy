var myObstacles = [];
var player;
var myGameArea;
$( document ).ready(function() {
            //Ejecuta todo el codigo , fijense paso a paso el flujo
  myGameArea = new GameArea();
  myGameArea.start();
  player = new Obstacle(30, 30, "red", 0, 110);
});


function updateGameArea() {
    for (i = 0; i < myObstacles.length; i += 1) {
            //Podrán ver por consola que esta condicion es False todo el tiempo
            //hasta que hay una colision
      console.log(player.crashWith(myObstacles[i]))
        if (player.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        }
    }
    myGameArea.clear();
    myGameArea.frames +=1;
            //Solo entramos dentro de la condicion "if" cuando "myGameArea.frames"
            //llega a un multiplo de 100, dentro de ella generamos Obstacles dinamicamente
    if (myGameArea.frames % 100 === 0) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new Obstacle(10, height, "green", x, 0));
        myObstacles.push(new Obstacle(10, x - height - gap, "green", x, height + gap));
    }
            //Con el bucle for, recorremos el array de Objetos "obstacles" para mover
            //hacia la izquierda todos los objetos
    for (i = 0; i < myObstacles.length; i++) {

        myObstacles[i].x -= 1;
        myObstacles[i].update();
    }
          //Por ultimo lo unico que hacemos es renderizar el player para refrescar su posicion
    player.newPos();
    player.update();
    myGameArea.score();
}

function moveUp() {
    player.speedY -= 1;
}

function moveDown() {
    player.speedY += 1;
}

function moveLeft() {
    player.speedX -= 1;
}

function moveRight() {
    player.speedX += 1;
}

function stopMove() {
    player.speedX = 0;
    player.speedY = 0;
}


document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      moveUp();
      break;
    case 40:
      moveDown();
      break;
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
}

document.onkeyup = function(e) {
  stopMove();
}
