window.onload = initLinks;

var imgNum = 0;
var arrPictures = new Array ("international flags.jpeg","dish 1.jpeg","plates of food 1.jpeg","farm-to-table.jpeg")


function initLinks(){

document.getElementById("linkPrevious").onclick = processPrevious;
document.getElementById("linkNext").onclick = processNext;

}

function processPrevious(){
if (imgNum == 0){
  imgNum = arrPictures.length;
}
imgNum--;
document.getElementById("imgSlideshow") .src = arrPictures[imgNum];
return false;
}

function processNext(){

imgNum++;
if (
  imgNum == arrPictures.length){
    imgNum = 0;
  }
document.getElementById("imgSlideshow").src = arrPictures[imgNum];
return false;

}




















