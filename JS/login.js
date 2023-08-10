const pw = document.getElementById("password");
const icon = document.getElementById("show-n-hide");

icon.addEventListener("click", function(){
    if(pw.type === "password"){
        pw.type = "text";
        icon.src = "../images/hide.png";
    } else {
        pw.type = "password";
        icon.src = "../images/show.png";
    }
})
