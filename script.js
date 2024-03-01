const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Функция для рисования заполненного шестигранника
function drawFilledHexagon(x, y, sideLength, fillColor) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const angle = 2 * Math.PI * i / 6;
        const dx = sideLength * Math.cos(angle);
        const dy = sideLength * Math.sin(angle);
        ctx.lineTo(x + dx, y + dy);
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
}

// Обработчик события click
canvas.addEventListener("click", (event) => {
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;

    // Очистка канваса
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисование заполненного шестигранника по клику
    drawFilledHexagon(x, y, 50, "lightblue"); // Замените "lightblue" на нужный цвет
});

