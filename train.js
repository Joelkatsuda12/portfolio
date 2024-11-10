

const photo1 = document.getElementById('photo1');
const img = document.querySelector('Img');

photo1.addEventListener("mousemove", (e) =>{
   const x = e.clientX - e.target.offsetLeft;
   const y = e.clientY - e.target.offsetTop;


   img.style.transformOrigin = `${x}px ${y}px`;
   img.style.transform = "scale(3)"
});

photo1.addEventListener("mouseout", () => {
   img.style.transformOrigin = 'center';
   img.style.transform = "scale(1)"
});





function myFunction(smallIMG){
   var fullImg = document.getElementById('big-img');
   fullImg.src = smallIMG.src;
}