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

<<<<<<< HEAD:Casehtml.js


document.querySelector("")
=======
document.querySelector("#msgbtn").addEventListener("click", messagediv)
function messagediv(){
    let div=document.querySelector("#msgbox")
    div.classList.toggle("hide")
}
>>>>>>> a2e99ab0974e76d6678efe36d0c81317497bb675:Js/Casehtml.js
