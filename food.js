window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("arrow").style.bottom= "-90%";
    } 
    else{
      document.getElementById("arrow").style.bottom = "-100%";
    }
  }
function log(){
    console.log(document.body.scrollTop);
}