window.onload = initLinks;

var imgNum = 0;
var arrPictures = new Array ("international flags.jpg","dish 1.jpg","plates of food 1.jpg","farm-to-table.jpg")


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




















