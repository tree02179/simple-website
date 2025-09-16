var userName = document.getElementsById('name');
var submitBtn = document.querySelector(".button");
console.log(userName.value);

window.onload = function() {
    document.getElementById('name').focus();
};

function SubmitBtn(value) {
    alert(userName.value);
}

submitBtn.addEventListener("click", SubmitBtn);