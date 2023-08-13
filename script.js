// Top bar Social Media /////////////////////////////////////
let youtube = document.getElementById("youtube");
let facebook = document.getElementById("facebook");
let instagram = document.getElementById("instagram");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let pink = document.getElementById("pink");

youtube.onmouseover = () => {
    youtube.style.backgroundColor = "#FF0000";
    red.style.color = "#ffffff";
    youtube.onmouseleave = () => {
        youtube.style.backgroundColor = "";
        red.style.color = "";
    }
};
facebook.onmouseover = () => {
    facebook.style.backgroundColor = "#4267B2";
    blue.style.color = "#ffffff";
    facebook.onmouseleave = () => {
        facebook.style.backgroundColor = "";
        blue.style.color = "";
    }
};
instagram.onmouseover = () => {
    instagram.style.backgroundColor = "#e1306c";
    pink.style.color = "#ffffff";
    instagram.onmouseleave = () => {
        instagram.style.backgroundColor = "";
        pink.style.color = "";
    }
};


// add active on url ///////////////////////////////////// 
let currentLocation = location.href;
let menuItems = document.querySelectorAll('.link');
let menuLength = menuItems.length


for (let i = 0; i < menuLength; i++) {
    if (menuItems[i].href === currentLocation) {
        menuItems[i].className = "activate"
    };
};


// toggle Menu /////////////////////////////////////
let toggleBtn = document.querySelector('#toggleBtn');
let links = document.querySelector('#links');
let iconOpen = document.getElementById("iconOpen");
let iconClose = document.getElementById("iconClose");

toggleBtn.addEventListener('click', () => {
    links.classList.toggle('active');
});

iconOpen.onclick = () => {
    iconOpen.style.display = "none";
    iconClose.style.display = "block"; 
    iconClose.style.color = "#ffffff"; 
    
};
iconClose.onclick = () => {
    iconOpen.style.display = "block";
    iconClose.style.display = "none";
};



// parallax /////////////////////////////////////
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

let scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

let scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

let scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));



// Move to top Btn /////////////////////////////////////
let toUp = document.querySelector('.btn-up');

window.onscroll = () => {
    if (scrollY >= 400) {
        toUp.style.display = 'block'
    } else {
        toUp.style.display = 'none'
    }
};

toUp.onclick = () => {
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
};
