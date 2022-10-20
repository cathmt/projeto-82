var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfline = 2;

    var width = screen.width;

    newWidth = screen.width - 70;
    newHeight = screen.Height - 300;

    if(width < 992){
        document.getElementById("myCanvas").width = newWidth;
        document.getElementById("myCanvas").height = newHeight;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchStart", myTouchStart);

    function myTouchStart(e){
        console.log("myTouchStart");
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;

        lastPositionOfX = e.touches[0].clientX - canvas.offSetLeft;
        lastPositionOfY = e.touches[0].clientY - canvas.offSetTop;
        canvas.addEventListener("touchMove", myTouchMove);
    }

    function myTouchMove(e){
        console.log("myTouchMove");

        currentPositionOfTouchX = e.touches[0].clientX - canvas.offSetLeft;
        currentPositionOfTouchY = e.touches[0].clientY - canvas.offSetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("ultimas posiçoes das cordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("posição atual das cordenadas x e y = ");
        console.log("x = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
        ctx.moveTo(currentPositionOfTouchX, currentPositionOfTouchY);

        ctz.stroke();

        lastPositionOfX = currentPositionOfTouchX;
        lastPositionOfY = currentPositionOfTouchY;
    }

    function clearArea(){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }