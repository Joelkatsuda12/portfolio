function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

let itoi = document.getElementById('itoi-container-desktop');

itoi.scrollIntoView({ behavior: 'smooth'});



