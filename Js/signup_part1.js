

// var user = localStorage.getItem("lumen5")


let url = new URL(window.location.href)
let params = new URLSearchParams(url.search)
var name = params.get("name");
document.getElementById("signup-page1-username").textContent = name;
document.getElementById("display_me").textContent = name;


function myDashboard()
{
    let url = `after_login_2.html?name=${name}`
    location.assign(url)
}


