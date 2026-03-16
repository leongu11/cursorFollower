var curX = 0;
var curY = 0;
var xdirFlag = 0;
var ydirFlag = 0;

// const el = document.querySelector('.divchange');
// const rect = el.getBoundingClientRect();
// var origin = [window.innerWidth/2,window.innerHeight/2];

//replace if not want hardcoded and tweak
var origin = getEyeCenter()
var rotateAngle = 0;

document.addEventListener("mousemove", function(event) {
    const cursor = document.getElementById("cursor")
    cursor.style.left = event.clientX + "px"
    cursor.style.top = event.clientY + "px"
    //js find one angle and good enough
    origin = getEyeCenter()
    rotateAngle = mathTime(event.clientX,event.clientY,origin)
    rotateImage(rotateAngle)
    // console.log(rotateAngle)
});

// i firkeing love funcitons okay jeesh louish
function getEyeCenter () {
    const eyeP = document.querySelector(".imagechange")
    const place1 = eyeP.getBoundingClientRect()

    eyeY = place1.top + place1.height /2
    eyeX = place1.left + place1.width /2
    
    return [eyeX,eyeY]
}

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
}
