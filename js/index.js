let raf;

let x1 = 500, y1 = 500, x2 = 520, y2 = 520;
let speed = 1;

function calc(data) {

}

function getData() {
    const data = [
        {
            name: "test1",
            children: []
        },
        {
            name: "test2",
            children: []
        }
    ];
    calc(data);

    return data;
}

function draw(canvas, ctx, data) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let randomSpeed = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 2);

    speed = random2 === 0 ? -randomSpeed : randomSpeed;
    console.log(speed);

    x1 += speed;
    y1 += speed;
    x2 += speed;
    y2 += speed;

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(x1, y1, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(x2, y2, 55, 50);

    raf = window.requestAnimationFrame(() => {
        draw(canvas, ctx, getData());
    });
}

function init() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    raf = window.requestAnimationFrame(() => {
        draw(canvas, ctx, getData());
    });
}

window.addEventListener("load", init);