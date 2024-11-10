
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

var today = new Date(); 
var date = (today.getMonth()+1)+'/'+(today.getDate())+'/'+today.getFullYear();
document.getElementById('date').innerHTML = date;

const comp = [
    ", i like your shirt!", 
    ", you deserve to be loved!", 
    ", you matter to me!", 
    ", the world is happy to have you!", 
    "!!!!!",
    ", I appreciate you visiting my site!",
    ", that red looks good on you, or blue, or whatever color you're wearing! (I can't Tell)",
    ", I hope your world treats you well today",
    ", thank you for being interested in my work!",
    ", the world needs your creativity!",
    ", thank you for taking the time to visit my site!",
    ", I am lucky that you visited my site!",
    ", I wish you a Good Day! Good night?.. Good morning?.. good afternoon??",
    ", did you know there's over 8 billion people on earth? and no one like you!",
    ", you will get through whatever problem is in your life!",
    ", I like that name!",
    ", Keep going in life! <3",
    ", keep your head up!"
    
    // enter text here //
    ];
    
    function generator() {
        
        let x = "hello "; 
        let y = document.getElementById('name').value; 
        
      const z = comp[Math.floor(Math.random() * comp.length)];
      document.querySelector(".value").textContent = x + y + z;
    };