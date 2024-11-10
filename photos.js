

function showSidebar(){
   const sidebar = document.querySelector('.sidebar');
   sidebar.style.display = 'block';
}

function hideSidebar(){
   const sidebar = document.querySelector('.sidebar');
   sidebar.style.display = 'none';
}


const photo1 = document.getElementById('photo1');
const img = document.querySelector('Img');

photo1.addEventListener("mousemove", (e) =>{
   const x = e.clientX - e.target.offsetLeft;
   const y = e.clientY - e.target.offsetTop;


   img.style.transformOrigin = `${x}px ${y}px`;
   img.style.transform = "scale(2)"
});

photo1.addEventListener("mouseout", () => {
   img.style.transformOrigin = 'center';
   img.style.transform = "scale(1)"
});



function showTree(){
   var tree = document.getElementById('tree');
   var fullImg = document.getElementById('big-img');
   fullImg.src = tree.src;
   var description = document.getElementById('description').innerHTML = 'f/8 &emsp; 1/640 sec &emsp; ISO-800';
};

function showMoon(){
   var moon = document.getElementById('moon');
   var fullImg = document.getElementById('big-img');
   fullImg.src = moon.src;
   var description = document.getElementById('description').innerHTML = 'f/10 &emsp; 1/5000 sec &emsp; ISO-5000';
};

function showBirds(){
   var birds = document.getElementById('birds');
   var fullImg = document.getElementById('big-img');
   fullImg.src = birds.src;
   var description = document.getElementById('description').innerHTML = 'f/16 &emsp; 1/3200 sec &emsp; ISO-10000';
};

function showFireworks(){
   var fireworks = document.getElementById('fireworks');
   var fullImg = document.getElementById('big-img');
   fullImg.src = fireworks.src;
   var description = document.getElementById('description').innerHTML = 'f/14 &emsp; 5 sec &emsp; ISO-400';
};

function showSpider(){
   var spider = document.getElementById('spider');
   var fullImg = document.getElementById('big-img');
   fullImg.src = spider.src;
   var description = document.getElementById('description').innerHTML = 'f/3.5 &emsp; 1/1250 sec &emsp; ISO-800';
};

function showSunlight(){
   var sunlight = document.getElementById('sunlight');
   var fullImg = document.getElementById('big-img');
   fullImg.src = sunlight.src;
   var description = document.getElementById('description').innerHTML = 'f/4.2 &emsp; 1/200 sec &emsp; ISO-2500';
};

function showBricks(){
   var bricks = document.getElementById('bricks');
   var fullImg = document.getElementById('big-img');
   fullImg.src = bricks.src;
   var description = document.getElementById('description').innerHTML = 'f/8 &emsp; 1/1000 sec &emsp; ISO-320';
};

function showFootball(){
   var football = document.getElementById('football');
   var fullImg = document.getElementById('big-img');
   fullImg.src = football.src;
   var description = document.getElementById('description').innerHTML = 'f/5.6 &emsp; 1/2000 sec &emsp; ISO-800';
};

function showDrums(){
   var drums = document.getElementById('drums');
   var fullImg = document.getElementById('big-img');
   fullImg.src = drums.src;
   var description = document.getElementById('description').innerHTML = 'f/7.1 &emsp; 1/3200 sec &emsp; ISO-800';
};

function showLightning(){
   var lightning = document.getElementById('lightning');
   var fullImg = document.getElementById('big-img');
   fullImg.src = lightning.src;
   var description = document.getElementById('description').innerHTML = 'f/4.5 &emsp; 1/30 sec &emsp; ISO-1600';
};


function showAurora(){
   var aurora = document.getElementById('aurora');
   var fullImg = document.getElementById('big-img');
   fullImg.src = aurora.src;
   var description = document.getElementById('description').innerHTML = 'f/0 &emsp; 1 sec &emsp; ISO-4000';
};


function showFlowers(){
   var flowers = document.getElementById('flowers');
   var fullImg = document.getElementById('big-img');
   fullImg.src = flowers.src;
   var description = document.getElementById('description').innerHTML = 'f/8 &emsp; 1/800 sec &emsp; ISO-500';
};

function showLights(){
   var lights = document.getElementById('lights');
   var fullImg = document.getElementById('big-img');
   fullImg.src = lights.src;
   var description = document.getElementById('description').innerHTML = 'f/5.6 &emsp; 1.6 sec &emsp; ISO-2000';
};

function showBaseball(){
   var baseball = document.getElementById('baseball');
   var fullImg = document.getElementById('big-img');
   fullImg.src = baseball.src;
   var description = document.getElementById('description').innerHTML = 'f/9 &emsp; 1/4000 sec &emsp; ISO-1250';
};

function showFire(){
   var fire = document.getElementById('fire');
   var fullImg = document.getElementById('big-img');
   fullImg.src = fire.src;
   var description = document.getElementById('description').innerHTML = 'f/5.6 &emsp; 1/1000 sec &emsp; ISO-8000';
};

function showCar(){
   var car = document.getElementById('car');
   var fullImg = document.getElementById('big-img');
   fullImg.src = car.src;
   var description = document.getElementById('description').innerHTML = 'f/14 &emsp; 1/25 sec &emsp; ISO-100';
};

function showCup(){
   var cup = document.getElementById('cup');
   var fullImg = document.getElementById('big-img');
   fullImg.src = cup.src;
   var description = document.getElementById('description').innerHTML = 'f/4.5 &emsp; 1/160 sec &emsp; ISO-8000';
};

function showSkyscraper(){
   var skyscraper = document.getElementById('skyscraper');
   var fullImg = document.getElementById('big-img');
   fullImg.src = skyscraper.src;
   var description = document.getElementById('description').innerHTML = 'f/13 &emsp; 1/640 sec &emsp; ISO-320';
};

function showStation(){
   var station = document.getElementById('station');
   var fullImg = document.getElementById('big-img');
   fullImg.src = station.src;
   var description = document.getElementById('description').innerHTML = 'f/8 &emsp; 1/125 sec &emsp; ISO-100';
};

function showMoreFlowers(){
   var moreFlowers = document.getElementById('more-flowers');
   var fullImg = document.getElementById('big-img');
   fullImg.src = moreFlowers.src;
   var description = document.getElementById('description').innerHTML = 'f/8 &emsp; 1/30 sec &emsp; ISO-100';
};

function showCat(){
   var cat = document.getElementById('cat');
   var fullImg = document.getElementById('big-img');
   fullImg.src = cat.src;
   var description = document.getElementById('description').innerHTML = 'f/8 &emsp; 1/1000 sec &emsp; ISO-1000';
};

function showBoats(){
   var boats = document.getElementById('boats');
   var fullImg = document.getElementById('big-img');
   fullImg.src = boats.src;
   var description = document.getElementById('description').innerHTML = 'f/18 &emsp; 1/640 sec &emsp; ISO-2000';
};

function showBuilding(){
   var boats = document.getElementById('building');
   var fullImg = document.getElementById('big-img');
   fullImg.src = building.src;
   var description = document.getElementById('description').innerHTML = 'f/18 &emsp; 1/125 sec &emsp; ISO-25600';
};

function showBridge(){
   var bridge = document.getElementById('bridge');
   var fullImg = document.getElementById('big-img');
   fullImg.src = bridge.src;
   var description = document.getElementById('description').innerHTML = 'f/18 &emsp; 1/50 sec &emsp; ISO-100';
};

function showLeaf(){
   var leaf = document.getElementById('leaf');
   var fullImg = document.getElementById('big-img');
   fullImg.src = leaf.src;
   var description = document.getElementById('description').innerHTML = 'f/8 &emsp; 1/320 sec &emsp; ISO-2500';
};

function showFountain(){
   var fountain = document.getElementById('fountain');
   var fullImg = document.getElementById('big-img');
   fullImg.src = fountain.src;
   var description = document.getElementById('description').innerHTML = 'f/14 &emsp; 1/3 sec &emsp; ISO-3200';
};

function showLight(){
   var light = document.getElementById('light');
   var fullImg = document.getElementById('big-img');
   fullImg.src = light.src;
   var description = document.getElementById('description').innerHTML = 'f/13 &emsp; 15 sec &emsp; ISO-1000';
};

function showFence(){
   var fence = document.getElementById('fence');
   var fullImg = document.getElementById('big-img');
   fullImg.src = fence.src;
   var description = document.getElementById('description').innerHTML = 'f/3.5 &emsp; 1/5000 sec &emsp; ISO-320';
};

function showVenus(){
   var fence = document.getElementById('venus');
   var fullImg = document.getElementById('big-img');
   fullImg.src = venus.src;
   var description = document.getElementById('description').innerHTML = 'f/11 &emsp; 3 sec &emsp; ISO-250';
};

function showMoreFireworks(){
   var moreFireworks = document.getElementById('more-fireworks');
   var fullImg = document.getElementById('big-img');
   fullImg.src = moreFireworks.src;
   var description = document.getElementById('description').innerHTML = 'f/9 &emsp; 1/40 sec &emsp; ISO-2000';
};