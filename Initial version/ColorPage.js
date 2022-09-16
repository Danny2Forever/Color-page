let box0 = document.getElementById("box0");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let box10 = document.getElementById("box10");
let box11 = document.getElementById("box11");
let box12 = document.getElementById("box12");
let box13 = document.getElementById("box13");
let box14 = document.getElementById("box14");
let box15 = document.getElementById("box15");
let box16 = document.getElementById("box16");
let box17 = document.getElementById("box17");
let box18 = document.getElementById("box18");
let box19 = document.getElementById("box19");
let box20 = document.getElementById("box20");
let box21 = document.getElementById("box21");
let box22 = document.getElementById("box22");
let box23 = document.getElementById("box23");
let box24 = document.getElementById("box24");
let box25 = document.getElementById("box25");
let box26 = document.getElementById("box26");
let box27 = document.getElementById("box27");
let box28 = document.getElementById("box28");
let box29 = document.getElementById("box29");
let box30 = document.getElementById("box30");


const colors = ['green', 'red', 'blue', 'yellow', 'pink', 'black', 'white', 'purple', 'orange', 'magenta', 'grey']

const display_color = (x) => {
    num = Math.floor(Math.random() * colors.length)
    console.log(num)
    document.getElementById("background").style.backgroundColor = colors[num];

}

const blank = () => {
    document.getElementById("background").style.backgroundColor = "white";
}

box0.onmouseover = display_color;
box0.onmouseout = blank;

box1.onmouseover = display_color;
box1.onmouseout = blank;

box2.onmouseover = display_color;
box2.onmouseout = blank;

box3.onmouseover = display_color;
box3.onmouseout = blank;

box4.onmouseover = display_color;
box4.onmouseout = blank;

box5.onmouseover = display_color;
box5.onmouseout = blank;

box6.onmouseover = display_color;
box6.onmouseout = blank;

box7.onmouseover = display_color;
box7.onmouseout = blank;

box8.onmouseover = display_color;
box8.onmouseout = blank;

box9.onmouseover = display_color;
box9.onmouseout = blank;

box10.onmouseover = display_color;
box10.onmouseout = blank;

box11.onmouseover = display_color;
box11.onmouseout = blank;

box12.onmouseover = display_color;
box12.onmouseout = blank;

box13.onmouseover = display_color;
box13.onmouseout = blank;

box14.onmouseover = display_color;
box14.onmouseout = blank;

box15.onmouseover = display_color;
box15.onmouseout = blank;

box16.onmouseover = display_color;
box16.onmouseout = blank;

box17.onmouseover = display_color;
box17.onmouseout = blank;

box18.onmouseover = display_color;
box18.onmouseout = blank;

box19.onmouseover = display_color;
box19.onmouseout = blank;

box20.onmouseover = display_color;
box20.onmouseout = blank;

box21.onmouseover = display_color;
box21.onmouseout = blank;

box22.onmouseover = display_color;
box22.onmouseout = blank;

box23.onmouseover = display_color;
box23.onmouseout = blank;

box24.onmouseover = display_color;
box24.onmouseout = blank;

box25.onmouseover = display_color;
box25.onmouseout = blank;

box26.onmouseover = display_color;
box26.onmouseout = blank;

box27.onmouseover = display_color;
box27.onmouseout = blank;

box28.onmouseover = display_color;
box28.onmouseout = blank;

box29.onmouseover = display_color;
box29.onmouseout = blank;

box30.onmouseover = display_color;
box30.onmouseout = blank;