var likes = 3;
var changeLikes = document.querySelector(".row1 h2");

function likesGoUp(){
    likes++
    changeLikes.innerText = likes  + " like(s)"
    console.log(likes);
}
