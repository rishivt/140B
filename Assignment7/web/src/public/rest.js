window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        2000 
    )
});


function click_close() {
  
    document.querySelector(".popup").style.display = "none";
}