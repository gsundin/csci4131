var imageArray = ["assets/images/JavascriptCookbook.jpg",
                  "assets/images/learningPerl.jpg",
                  "assets/images/modernPHP.jpg",
                  "assets/images/mysqlCookbook.jpg"];

var imageIndex = 0;

function nextImage () {
    myPhoto.setAttribute("src", imageArray[imageIndex]);
    myLink.setAttribute("href", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

function prevImage () {
    myPhoto.setAttribute("src", imageArray[imageIndex]);
    myPhoto.setAttribute("href", imageArray[imageIndex]);
    imageIndex--;
    if (imageIndex <= -1) {
        imageIndex = imageArray.length - 1;
    }
}

var duration = 1000;
var intervalHandle = setInterval(getDuration, duration);

function getDuration () {
    nextImage();
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
    //alert(duration);
    intervalHandle = setInterval(getDuration, duration);
}

myPhoto.onclick = function() {
    clearInterval(intervalHandle);
}

document.getElementById("next").onclick = function() {
    nextImage();
}

document.getElementById("prev").onclick = function() {
    prevImage();
}