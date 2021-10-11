
// get the ids
var m1=document.getElementById("modalM");
var backG=document.getElementById("bGround");
var clos1=document.getElementsByClassName("clo1")[0];
var clos2=document.getElementsByClassName("clo2")[0];
var imgTitle=document.getElementById("imgT");
var imgDesc=document.getElementById("imgD");
var imgShowed=document.getElementById("imgSh");

//get all portafolio images'references
var imgObj=document.getElementsByClassName("imgElements");
//get numeber of images
let imgObjAm=Object.keys(imgObj).length;


// close the modal if click the button
clos1.onclick=function() {
    m1.style.display="none";
}
clos2.onclick=function() {
    m1.style.display="none";
}

// close the modal if click outside the modal
 window.onclick=function(event) {
  if (event.target == m1) {
    m1.style.display="none";
  }
}

//make a 
document.querySelectorAll(".imgElements").forEach(item => {
    item.addEventListener("mouseover", event => {
        
        for (let i=0; i<=(imgObjAm-1);i++){
            imgObj[i].addEventListener("mouseover", function() {
                inform(i);
                m1.style.display = "block";
              });
        }
    })
  });

function inform(image) {
    let titles="N/A";
    let descrip="N/A";
    let show= "N/A";
    let ground="N/A";
    switch (image)
    {
        case 0:
            titles= "Imag 1";
            descrip= "This is the image 1."
            show= "./img/hou.png";
            ground="purple";
            break;
        case 1:
            titles= "Imag 2";
            descrip= "This is the image 2."
            show= "./img/hou.png";
            ground="purple";
            break;
        case 2:
            titles= "Imag 3";
            descrip= "This is the image 3."
            show= "./img/submarine.png";
            ground="blue";
            break;
        case 3:
            titles= "Imag 4";
            descrip= "This is the image 4."
            show= "./img/hou.png";
            ground="purple";
            break;
        case 4:
            titles= "Imag 5";
            descrip= "This is the image 5."
            show= "./img/hou.png";
            ground="purple";
            break;
        case 5:
            titles= "Imag 6";
            descrip= "This is the image 6."
            show= "./img/hou.png";
            ground="purple";
            break;
        case 6:
            titles= "Imag 7";
            descrip= "This is the image 7."
            show= "./img/hou.png";
            ground="purple";
            break;
        case 7:
            titles= "Imag 8";
            descrip= "This is the image 8."
            show= "./img/hou.png";
            ground="purple";
            break;
        default:
            titles= "IError";
            descrip= "This is an error."
            show= "./img/hou.png";
            break;
    }
    imgTitle.textContent= titles;
    imgDesc.textContent= descrip;
    imgShowed.src= show;
    backG.style.backgroundColor = ground;
}


