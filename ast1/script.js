const ball = document.getElementById("ball");
const ball_container = document.getElementById("ball-container");
// var y = 0;
// var dir = true;
// setInterval(() => {
//     ball.style.marginTop = `${y}px`;
//     dir ? y += 10 : y -=10;
//     dir = y == 360 || y == 0 ? !dir : dir;
// }, 20);


const ball_container_info = ball_container.getBoundingClientRect();
var ball_container_top = ball_container_info.top;
var ball_container_bottom = ball_container_info.bottom;

const ball_info = ball.getBoundingClientRect();
var ball_y_top = ball_info.top;
var ball_y_bottom = ball_info.bottom;

var dir = true;
setInterval(() => {

    ball.style.top =  `${ball_y_top}px`


    if(ball_y_bottom <= ball_container_bottom && ball_y_top >= ball_container_top){
        if (dir){
            ball_y_top += 1;
            ball_y_bottom += 1;
        }else{
            ball_y_bottom -= 1;
            ball_y_top -= 1;
        }
        
    }else{
        if (!dir){
            ball_y_top += 1;
            ball_y_bottom += 1;
        }else{
            ball_y_bottom -= 1;
            ball_y_top -= 1;
        }
        dir = !dir;

    }
   
    
    
    

}, 5);
