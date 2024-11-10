

const img = document.querySelector('Img');


        img.addEventListener("mousemove", (e) =>{
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;
         
         
            img.style.transformOrigin = `${x}px ${y}px`;
            img.style.transform = "scale(3)"
         });
         
         img.addEventListener("mouseout", () => {
            img.style.transformOrigin = 'center';
            img.style.transform = "scale(1)"
         });


























function showVideo(){
    var fullImg = document.getElementById('photo1');
    var video = document.querySelector('video').style.display = 'block';
    var img = document.querySelector('img').style.display = 'none';
    fullImg = video.src;
 };

 function showImg(){
    var fullImg = document.getElementById('photo1');
    var video = document.querySelector('video').style.display = 'none';
    var img = document.querySelector('img').style.display = 'block';
    fullImg = video.src;
 };

