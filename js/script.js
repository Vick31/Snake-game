
let ancho = 900
let alto = 700

let snake = {
    x: 0,
    y: 0,
    size: 20
}
let directionX = 40
let directionY = 0


// ---------- TABLE ----------


let div = document.getElementById('div').style;


function table() {

    div.width = ancho + 'px';
    div.height = alto + 'px';
    div.backgroundColor = '#76F591'
    div.border = '10px dashed #006014'
    div.margin = 0 + 'px';

    randomBall()
}


// ---------- SNAKE ----------

let span = document.getElementById('span').style;

function createSnake() {
    span.padding = snake.size + 'px'
    span.background = 'red'
    span.position = 'absolute'
    span.top = snake.y + 'px'
    span.left = snake.x + 'px'
}



// ---------- BALLS ----------


let bola = document.getElementById('bola').style;
var ball = {
    x: 0,
    y: 0,
    size: 40
}
function randomBall() {
    ball.x = Math.floor(Math.random() * (ancho - snake.size) + snake.size)
    ball.y = Math.floor(Math.random() * (alto - snake.size) + snake.size)

}

function balls() {
    bola.width = ball.size + 'px'
    bola.height = ball.size + 'px'
    //bola.borderRadius = 100 + '%'
    bola.background = 'black'
    bola.position = 'relative'
    bola.top = ball.y + 'px'
    bola.left = ball.x + 'px'
}






// ---------- INICIADOR ----------

function start() {
    setInterval(() => {
        mover()
        createSnake()
        balls()
        if ((snake.x - 10) == ball.x || (snake.y - 10) == ball.y) {
            randomBall()
        }
    }, 1000 / 15);
}
table()

