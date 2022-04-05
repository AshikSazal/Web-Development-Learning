var photo=["image/front/pic1.jpg","image/front/pic2.jpg","image/front/pic3.jpg","image/front/pic4.jpg","image/front/pic5.jpg","image/front/pic6.jpg","image/front/pic7.jpg","image/front/pic8.jpg","image/front/pic9.jpg"];
var imgTag=document.querySelector(".slide-pic");
var count=0;
function next() {
  count++;
  if(count>=photo.length){
    count=0;
    imgTag.src=photo[count];
  }
  else{
    imgTag.src=photo[count];
  }
}
function prev() {
  count--;
  if(count<0){
    count=photo.length-1;
    imgTag.src=photo[count];
  }
  else{
    imgTag.src=photo[count];
  }
}
