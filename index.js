

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