var userName = document.getElementById("tree");
var submitBtn = document.querySelector(".button");

window.onload = function() {
    userName.focus();
};

function SubmitBtn() {
    alert(userName.value);
}

submitBtn.addEventListener("click", SubmitBtn);