let image=['l1.png','s1.jpg','s2.jpg','s3.jpg'];
let index=0;
let slidshow=document.getElementById("slide");
setInterval(function(){
    slide.src=image[index];
    index=[index+1]%image.length;
},2000)