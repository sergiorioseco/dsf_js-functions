let ele = document.getElementById("ele1");
function pintar(color = 'green') {
    ele.style.backgroundColor = color;
};
ele.addEventListener("click", function() {
pintar('yellow');
});