/// 2.4
window.addEventListener('mousemove', function(e) {
        document.getElementById("page__mouse-coords").textContent = "Координати курсора: x:" + String(e.pageX) + " y:" + String(e.pageY);
}
)

window.addEventListener('keydown', function(e) {
    document.getElementById("page__key-pressed").textContent = "Остання натиснута клавіша: " + String(e.key);
}
)