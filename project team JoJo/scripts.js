let  nav = document.getElementById('nav');
      
window.onscroll = function(){

    if (window.pageYOffset >100) {

        document.getElementById('nav').style.background = "#007bff";
        document.getElementById('nav').style.boxShadow = "0px 4px 2px blue";
        
    }
    else{
        document.getElementById('nav').style.background = "rgba(0,0,0,0.2)";
        document.getElementById('nav').style.boxShadow = "0px 4px 2px rgba(0,0,0,0.4)";
        
    }
}