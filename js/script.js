// Afficher ou cacher la suite de l'article

// Afficher le reste de l'article via le bouton read more
let readMoreBtn = document.getElementById('read_more_btn');
readMoreBtn.addEventListener('click', readMore);

function readMore() {
    let moreText = document.getElementById('more');
    let fade_out = document.getElementsByClassName('fade_out');

    if(moreText.style.display = 'none'){
        moreText.style.display ='block';
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'block';
        fade_out.style.maskImage = 'unset';
    }if (moreText.style.display ='block') {
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'block';
    }
}


// Cacher le reste de l'article via le bouton read less
let readLessBtn = document.getElementById('read_less_btn');
readLessBtn.addEventListener('click', readLess);

function readLess() {
    let lessText = document.getElementById('more');
    

    if(lessText.style.display = 'block'){
        lessText.style.display ='none';
        readMoreBtn.style.display ='block';
        readLessBtn.style.display ='none';
    }
}


// Carousel : récupérations des données de chaques vidéos dans un tableau
const slides = [
    {
        id: 1,
        srcVideo: "https://www.youtube.com/embed/OBfLvqA_E4A",
        title: "Offline Support, Totally Tooling Tips (S3, Ep1)", 
    },

    {
        id: 2,
        srcVideo: "https://www.youtube.com/embed/QhUzmR8eZAo",
        title: "Instant Loading with the App Shell Model, Totally Tooling Tips (S3, E2)", 
    },

    {
        id: 3,
        srcVideo: "https://www.youtube.com/embed/Sftbg45nQcQ",
        title: "Push Notifications: Totally Tooling Tips (S3, E3)", 
    },

    {
        id: 4,
        srcVideo: "https://www.youtube.com/embed/yQhFmPExcbs",
        title: "Web App Manifest: Totally Tooling Tips (S3, E4)", 
    },

    {
        id: 5,
        srcVideo: "https://www.youtube.com/embed/M482RhQ8i1Q",
        title: "DevTools Device Mode: Totally Tooling Tips (S3, E5)", 
    },

    {
        id: 6,
        srcVideo: "https://www.youtube.com/embed/IIRj8DftkqE",
        title: "Service Worker Libraries, Totally Tooling Tips (S3, E6)", 
    },

    {
        id: 7,
        srcVideo: "https://www.youtube.com/embed/YEbtvKPvTYE",
        title: "More DevTools Tips, Totally Tooling Tips (S3, E7)", 
    },

    {
        id: 8,
        srcVideo: "https://www.youtube.com/embed/pBJZsp5LsOE",
        title: "Accessibility, Totally Tooling Tips (S3, E8)", 
    },

    {
        id: 9,
        srcVideo: "https://www.youtube.com/embed/wFwogd4CdwY",
        title: "Key Moments In Web Page Loading, Totally Tooling Tips (S3, E9)", 
    },
]


// Carousel : set up 
let currentSlide = 0;
let maxSlide = slides.length - 1;

let iframe = document.getElementById('iframe');
iframe.setAttribute('src', slides[currentSlide].srcVideo);

let frame_title = document.getElementById('frame_title');
frame_title.textContent = slides[currentSlide].title;


// Carousel : slider vers la droite
let rightArrow = document.getElementById('right_arrow');
rightArrow.addEventListener('click', function() {
    if (currentSlide < maxSlide) {
        currentSlide++;
        iframe.setAttribute('src',slides[currentSlide].srcVideo);
        frame_title.textContent = slides[currentSlide].title;
    }else{
        currentSlide = 0;
    }
});


// Carousel : slider vers la gauche 
let leftArrow = document.getElementById('left_arrow');
leftArrow.addEventListener('click', function() {
    if (currentSlide > 0) {
        currentSlide--;
        iframe.setAttribute('src',slides[currentSlide].srcVideo);
        frame_title.textContent = slides[currentSlide].title;
    }else{
        currentSlide = maxSlide;
    }
});