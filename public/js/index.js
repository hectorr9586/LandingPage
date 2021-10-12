
// get the ids
var m1=document.getElementById("modalM");
var backG=document.getElementById("bGround");
var clos1=document.getElementsByClassName("clo1")[0];
var clos2=document.getElementsByClassName("clo2")[0];
var imgTitle=document.getElementById("imgT");
var imgDesc=document.getElementById("imgD");
var imgShowed=document.getElementById("imgSh");

//get all portafolio images'references
var imgObj=document.getElementsByClassName("hov1");
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


//backG.style.height= (backG.style.heigh)/ backG.style.w;


//make a 
document.querySelectorAll(".hov1").forEach(item => {
    item.addEventListener("click", event => {
        let height = document.querySelector('#bGround').clientHeight
        let item_vol= item.id;
        console.log(height);
        inform(item_vol);
        m1.style.display = "block";
    })
  });

function inform(image) {
    let titles="N/A";
    let descrip="N/A";
    let show= "N/A";
    let ground="N/A";
    switch (image)
    {
        case "Imag1":
            titles= "Technology";
            descrip= "This is about technology. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sodales congue. Etiam consequat ornare arcu quis facilisis. Curabitur et egestas ligula. Ut porta tempus condimentum. Pellentesque lacinia lorem in molestie suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec euismod ultrices condimentum."
            show= "https://placeimg.com/640/480/tech";
            ground="rgb(218, 81, 57)";
            break;
        case "Imag2":
            titles= "Nature";
            descrip= "This is about nature. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sodales congue. Etiam consequat ornare arcu quis facilisis. Curabitur et egestas ligula. Ut porta tempus condimentum. Pellentesque lacinia lorem in molestie suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec euismod ultrices condimentum."
            show= "https://placeimg.com/640/480/nature";
            ground="rgb(122, 223, 189)";
            break;
        case "Imag3":
            titles= "Architecture";
            descrip= "This is about architecture. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sodales congue. Etiam consequat ornare arcu quis facilisis. Curabitur et egestas ligula. Ut porta tempus condimentum. Pellentesque lacinia lorem in molestie suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec euismod ultrices condimentum."
            show= "https://placeimg.com/640/480/arch";
            ground="rgb(124, 122, 223)";
            break;
        case "Imag4":
            titles= "Animals";
            descrip= "This is about animals. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sodales congue. Etiam consequat ornare arcu quis facilisis. Curabitur et egestas ligula. Ut porta tempus condimentum. Pellentesque lacinia lorem in molestie suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec euismod ultrices condimentum."
            show= "https://placeimg.com/640/480/animals";
            ground="rgb(218, 57, 178)";
            break;
        case "Imag5":
            titles= "Technology";
            descrip= "This is about technology. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sodales congue. Etiam consequat ornare arcu quis facilisis. Curabitur et egestas ligula. Ut porta tempus condimentum. Pellentesque lacinia lorem in molestie suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec euismod ultrices condimentum."
            show= "https://placeimg.com/640/480/tech";
            ground="rgb(213, 223, 122)";
            break;
        case "Imag6":
            titles= "Nature";
            descrip= "This is about nature. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sodales congue. Etiam consequat ornare arcu quis facilisis. Curabitur et egestas ligula. Ut porta tempus condimentum. Pellentesque lacinia lorem in molestie suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec euismod ultrices condimentum."
            show= "https://placeimg.com/640/480/nature";
            ground="rgb(223, 151, 122)";
            break;
        default:
            titles= "IError";
            descrip= "This is an error."
            show= "./img/team.png";
            ground="rgb(200, 122, 223)";
            break;
    }
    imgTitle.textContent= titles;
    imgDesc.textContent= descrip;
    imgShowed.src= show;
    backG.style.backgroundColor = ground;
}


