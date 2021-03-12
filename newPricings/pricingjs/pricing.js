  window.onscroll=function(){
var div= document.querySelector('#caseNav')
div.classList.add('styckynav');
var imagnav= document.querySelector('#logo')
imagnav.classList.add("logo1")
if(scrollY<=50){
    div.classList.remove('styckynav');
    imagnav.classList.remove("logo1")
}
}

window.addEventListener("load",function(){
  var pricemontly = document.getElementById("pricemontly");
  pricemontly.addEventListener("click",loadData);  
  var priceYearly = document.getElementById("priceYearly");
  priceYearly.addEventListener("click",loadDatayearly);  
});
function loadData(){
    // event.preventDefault()
    // document.getElementById("priceValue").value;
    // document.getElementById("percentage").textContent = "upto 27% free"
    document.getElementById("priceValue20").innerHTML = "0";
    document.getElementById("priceValue11").innerHTML = "11";
    document.getElementById("priceValue89").innerHTML = "89";
    document.getElementById("priceValue199").innerHTML = "199";
        // document.getElementById("percentage").textContent = ""
        // document.querySelector(".percentageMonth").textContent = ""
    
}

function loadDatayearly(){
        // document.getElementById("percentage").textContent = ""
        // document.querySelector(".percentageMonth").textContent = ""
    
    document.getElementById("priceValue20").innerHTML = " 0";
    document.getElementById("priceValue11").innerHTML = "50";
    document.getElementById("priceValue89").innerHTML = "70";
    document.getElementById("priceValue199").innerHTML = "90";
    
    var saveSomepercent =  document.getElementsByClassName("saveSomepercent");
    for(var i=1;i<saveSomepercent.length;i++){
        saveSomepercent[i].innerHTML = ""        
    }
    var savepermonth =  document.getElementsByClassName("savepermonth");
    for(var i=1;i<savepermonth.length;i++){
        saveSomepercent[i].innerHTML = "25% free"        
        savepermonth[i].innerHTML = "permonth billed yearly"
    }
}

