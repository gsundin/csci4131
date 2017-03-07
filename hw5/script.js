var imageArray = ["assets/images/JavascriptCookbook.jpg",
                  "assets/images/learningPerl.jpg",
                  "assets/images/modernPHP.jpg",
                  "assets/images/mysqlCookbook.jpg"];

var imageIndex = 0;

function nextImage () {
    myPhoto.setAttribute("src", imageArray[imageIndex]);
    myLink.setAttribute("href", imageArray[imageIndex]);
    myPhoto.setAttribute("title", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

function prevImage () {
    myPhoto.setAttribute("src", imageArray[imageIndex]);
    myLink.setAttribute("href", imageArray[imageIndex]);
    myPhoto.setAttribute("title", imageArray[imageIndex]);
    imageIndex--;
    if (imageIndex <= -1) {
        imageIndex = imageArray.length - 1;
    }
}

var duration = 0;
var intervalHandle = setInterval(getDurationNext, duration);

function getDurationNext () {
    nextImage();
    clearInterval(intervalHandle);
    switch (imageIndex) {
        case 0:
            duration = 7000;
            break;
        case 1:
            duration = 3000;
            break;
        case 2:
            duration = 5000;
            break;
        case 3:
            duration = 3000;
            break;
    }
    intervalHandle = setInterval(getDurationNext, duration);
}

function getDurationPrev () {
    prevImage();
    clearInterval(intervalHandle);
    switch (imageIndex) {
        case 0:
            duration = 3000;
            break;
        case 1:
            duration = 5000;
            break;
        case 2:
            duration = 3000;
            break;
        case 3:
            duration = 7000;
            break;
    }
    intervalHandle = setInterval(getDurationNext, duration);
}

myPhoto.onclick = function() {
    clearInterval(intervalHandle);
}

document.getElementById("next").onclick = function() {
    getDurationNext();
}

document.getElementById("prev").onclick = function() {
    getDurationPrev();
}