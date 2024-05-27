const hearts = document.getElementsByClassName("heart");

for (const heart of hearts) {
    heart.addEventListener("click", function () {
    heart.classList.toggle("red");
});
}