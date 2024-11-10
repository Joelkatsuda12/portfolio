function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

let murakami = document.getElementById('murakami-container-desktop');

murakami.scrollIntoView({ behavior: 'smooth'});



