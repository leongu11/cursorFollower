var curX = 0;
var curY = 0;
var xdirFlag = 0;
var ydirFlag = 0;

// const el = document.querySelector('.divchange');
// const rect = el.getBoundingClientRect();
// var origin = [window.innerWidth/2,window.innerHeight/2];

//replace if not want hardcoded and tweak
var origin = [723,557];
var rotateAngle = 0;

document.addEventListener("mousemove", function(event) {
    // console.log(event.clientX,event.clientY)
    //js find one angle and good enough
    rotateAngle = mathTime(event.clientX,event.clientY,origin)
    rotateImage(rotateAngle)
    // console.log(rotateAngle)
});


// i firkeing love funcitons okay jeesh louish
function rotateImage (rotateAngle) {
    const images = document.querySelectorAll("#rotatings img");
    let angle = -1*(rotateAngle+90)
    images.forEach(image => {
        //wstackoverflow
        image.style.transform = `rotate(${angle}deg)`;
    })
}
function findAngle (x,y) {
    //change cuz in radians
    degs = Math.atan2(y,x) * 180 / Math.PI
    console.log(degs)
    return degs
    
}


function mathTime (mouseX,mouseY,origin) {
    
     disX = mouseX - origin[0]
     disY = origin[1] - mouseY 
    
    console.log(origin,mouseX,mouseY,disX,disY)
    rotateAngle = findAngle(disX,disY)

    return rotateAngle

//     disX = Math.abs(mouseX - origin[0])
//     disY = Math.abs(mouseY - origin[1])
//     absAngle = findAngle(disX,disY)

//     //q1case
//     if (xdirFlag == 0 && ydirFlag == 0) {
//         rotateAngle = -90-absAngle
//     } else if (xdirFlag == 1 && ydirFlag == 0) { //q2
//         rotateAngle = 90 + absAngle
//     } else if (xdirFlag == 0 && ydirFlag == 1) { //q3
//         rotateAngle = absAngle
//     } else { //q4
//         rotateAngle = -1 * absAngle
//     }

//     return rotateAngle
}
