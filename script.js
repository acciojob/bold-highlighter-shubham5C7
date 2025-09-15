const link= document.getElementById("link");
const allStrong = document.querySelectorAll("#content strong");


link.addEventListener("mouseover", highlight);
link.addEventListener("mouseout", return_normal);

function highlight() {
    allStrong.forEach(element => {
        element.style.color = "rgb(0, 128, 0)";           
            
    });
}


function return_normal() {
    allStrong.forEach(element => {
        element.style.color = "rgb(0, 0, 0)"; 
                   
    });
}

