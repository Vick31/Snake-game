

// ---------- MOVIMIENTO ----------

function mover() {
    snake.x = snake.x + directionX
    snake.y = snake.y + directionY

}

function left() {
    xSnake -= 40
    directionX = -1
    directionY = 0
}
function right() {
    xSnake += 20
    directionX = +1
    directionY = 0
}
function up() {
    ySnake -= 20
    directionY = -1
    directionX = 0
}
function down() {
    ySnake += 20
    directionY = +1
    directionX = 0

}
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            snake.x -= 40
            directionX = -40
            directionY = 0
            break;
        case 38:
            snake.y -= 40
            directionY = -40
            directionX = 0
            break;
        case 39:
            snake.x += 40
            directionX = +40
            directionY = 0
            break;
        case 40:
            snake.y += 40
            directionY = +40
            directionX = 0
            break;
    }
};