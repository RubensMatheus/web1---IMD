window.onload = function () {
    var quadro = document.getElementById("myCanvas");
    var ctx = quadro.getContext("2d");

    var desenho = false;

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    quadro.onmousedown = function (e) {
        var pos = getMousePos(quadro, e);
        ctx.moveTo(pos.x, pos.y);
        desenho = true;
    }

    quadro.onmouseup = function (e) {
        desenho = false;
    }

    quadro.onmousemove = function (e) {
        if (desenho) {
            var pos = getMousePos(quadro, e);
            ctx.strokeStyle = "red";
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }
    }

    document.getElementById("myButton").onclick = function () {
        ctx.clearRect(0, 0, quadro.width, quadro.height);
        ctx.beginPath();
    }
}
