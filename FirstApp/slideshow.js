let image=['p1.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg'];
let index=0;
let slidshow=document.getElementById("slide");
setInterval(function(){
    slide.src=image[index];
    index=[index+1]%image.length;
},2000)