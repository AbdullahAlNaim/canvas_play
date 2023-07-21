const canvas = document.querySelector('#play');
// allows us to draw on the canvas in 2d
const ctx = canvas.getContext('2d');

function draw() {
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(20, 30, 50, 50);
    }
}
draw();