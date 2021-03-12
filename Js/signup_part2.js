var video = document.querySelectorAll("video");

video.forEach((video) => {
  video.addEventListener("mouseover", function () {
    this.play();
  });
  video.addEventListener("mouseout", function () {
    this.load();
  });
});


let url = new URL(window.location.href)
let params = new URLSearchParams(url.search)
var name = params.get("name")
document.getElementById("display_me").textContent = name;