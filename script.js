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

toggleBtn.addEventListener('click', () => {
    links.classList.toggle('active');
});


// skills progress //////////////////////////////////
let htmlProgress = document.querySelector(".htmlProgress");
let cssProgress = document.querySelector(".cssProgress");
let bootstrapProgress = document.querySelector(".bootstrapProgress");
let javascriptProgress = document.querySelector(".javascriptProgress");
let wordpressProgress = document.querySelector(".wordpressProgress");
let reactProgress = document.querySelector(".reactProgress");

let htmlCount = document.querySelector(".htmlCount");
let cssCount = document.querySelector(".cssCount");
let bootstrapCount = document.querySelector(".bootstrapCount");
let javascriptCount = document.querySelector(".javascriptCount");
let wordpressCount = document.querySelector(".wordpressCount");
let reactCount = document.querySelector(".reactCount");

let countSpeed = 30;

let htmlStartValue = 0, htmlEndValue = 95;
let cssStartValue = 0, cssEndValue = 95;
let bootstrapStartValue = 0, bootstrapEndValue = 90;
let javascriptStartValue = 0, javascriptEndValue = 70;
let wordpressStartValue = 0, wordpressEndValue = 85;
let reactStartValue = 0, reactEndValue = 70;




let htmlInterval = setInterval(() => {

    htmlStartValue++;
    htmlProgress.style.background = `conic-gradient(#f06428 ${htmlStartValue * 3.6}deg, #ffffff 0deg)`;
    htmlCount.innerHTML = `${htmlStartValue}%`;

    if (htmlStartValue == htmlEndValue) {
        clearInterval(htmlInterval);
    }

}, countSpeed);

let cssInterval = setInterval(() => {

    cssStartValue++;
    cssProgress.style.background = `conic-gradient(#0075ff  ${cssStartValue * 3.6}deg, #ffffff 0deg)`;
    cssCount.innerHTML = `${cssStartValue}%`;

    if (cssStartValue == cssEndValue) {
        clearInterval(cssInterval);
    }

}, countSpeed);


let bootstrapInterval = setInterval(() => {

    bootstrapStartValue++;
    bootstrapProgress.style.background = `conic-gradient(#9866e5 ${bootstrapStartValue * 3.6}deg, #ffffff 0deg)`;
    bootstrapCount.innerHTML = `${bootstrapStartValue}%`;

    if (bootstrapStartValue == bootstrapEndValue) {
        clearInterval(bootstrapInterval);
    }

}, countSpeed);


let javascriptInterval = setInterval(() => {

    javascriptStartValue++;
    javascriptProgress.style.background = `conic-gradient(#f7df1e ${javascriptStartValue * 3.6}deg, #ffffff 0deg)`;
    javascriptCount.innerHTML = `${javascriptStartValue}%`;

    if (javascriptStartValue == javascriptEndValue) {
        clearInterval(javascriptInterval);
    }

}, countSpeed);


let wordpressInterval = setInterval(() => {

    wordpressStartValue++;
    wordpressProgress.style.background = `conic-gradient(#0087be ${wordpressStartValue * 3.6}deg, #ffffff 0deg)`;
    wordpressCount.innerHTML = `${wordpressStartValue}%`;

    if (wordpressStartValue == wordpressEndValue) {
        clearInterval(wordpressInterval);
    }

}, countSpeed);


let reactInterval = setInterval(() => {

    reactStartValue++;
    reactProgress.style.background = `conic-gradient(#00d8ff ${reactStartValue * 3.6}deg, #ffffff 0deg)`;
    reactCount.innerHTML = `${reactStartValue}%`;

    if (reactStartValue == reactEndValue) {
        clearInterval(reactInterval);
    }

}, countSpeed);



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
