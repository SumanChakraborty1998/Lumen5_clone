

window.document.onkeydown = function (e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_close();
    }
}

function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}

function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}


// window.onscroll=function(){
//     console.log(scrollY)
// var div= document.querySelector('#caseNav')
// div.classList.add('styckynav');
// var imagnav= document.querySelector('#logo')
// imagnav.classList.add("logo1")
// if(scrollY<=50){
//     div.classList.remove('styckynav');
//     imagnav.classList.remove("logo1")
// }
// }

document.querySelector("")

function redirectMeToSignUp()
{
    location.assign("signup.html")
}



// Mangesh Part 5********************



//   var figure = $(".video-block-video").hover(hoverVideo, hideVideo);

//   function hoverVideo(e) {
//     $("video", this).get(0).play();
//   }

//   function hideVideo(e) {
//     $("video", this).get(0).pause();
//   }

//   video.on("mouseover", function () {
//     video.get(0).play();
//   });

//   video.on("mouseout", function () {
//     video.get(0);
//   });

//   function playVideo() {
//     video.play();
//   }
//   function pauseVideo() {
//     video.pause();
//   }

//   video.addEventListener("mouseover", playVideo);
//   video.addEventListener("mouseout", pauseVideo);













// var video = document.querySelectorAll("video");

// video.forEach((video) => {
// video.addEventListener("mouseover", function () {
//     this.play();
// });
// video.addEventListener("mouseout", function () {
//     this.pause();
// });

// });

// function toggel() {
// video.classList.toggel("active");
// video.pause();
// video.currentTime = 0;
// }


// Mangesh Part 5******************** END
