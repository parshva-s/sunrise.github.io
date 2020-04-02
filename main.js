//this is a Jave file
"use strict";

let x = 0;
requestAnimationFrame(animate);
function animate() {
    x++;
      
    // Reset animation if x > 275
    if (x == 275) {
        x=0;
    }
    console.log(x);
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
//the size of  canvas
cnv.width = 400;
cnv.height = 400;
//sky
let r_sky = 255 - (x/2);//r-value of sky
let g_sky = 182 + (x/7);//g-value of sky
let b_sky = 193 + (x/3);//b value of sky
ctx.fillStyle = "rgb(" + r_sky + "," + g_sky + "," + b_sky + ")";//turns pink to blue
ctx.fillRect(0, 0, cnv.width, cnv.height);
//clouds
ctx.fillStyle = 'white';
ctx.ellipse(175-x, 150, 65, 35, 0, 0, Math.PI * 2);//moves to the left
ctx.ellipse(225+x, 100, 65, 35, 0, 0, Math.PI * 2);//moves to the right
ctx.fill();
//sun
ctx.beginPath();
ctx.fillStyle = "rgb(255," + x + ",0)";//changes from red to yellow
ctx.arc(200, 300-x, 15+ (x/10), 0, 2 * Math.PI);//moves up and radius gets bigger as it moves up
ctx.fill();
//ground
ctx.fillStyle = "rgb(78,168,67)";
ctx.fillRect(0, 300, 400, 100);
requestAnimationFrame(animate);
}