// ariketa-4.html




// ariketa-6.html
$(document).ready(function () {
    var kohete = $("#kohete");
    var position = { top: 0, left: 0 };
    var currentRotation = "kohete-gora";

    $(document).on("keydown", function (e) {
        switch (e.key) {
            case "ArrowLeft":
                position.left -= 10;
                currentRotation = "kohete-ezkerra";
                console.log("Left");
                break;
            case "ArrowRight":
                position.left += 10;
                currentRotation = "kohete-eskuma";
                console.log("Right");
                break;
            case "ArrowUp":
                position.top -= 10;
                currentRotation = "kohete-gora";
                console.log("Up");
                break;
            case "ArrowDown":
                position.top += 10;
                currentRotation = "kohete-behera";
                console.log("Down");
                break;
            default:
                break;
        }
        kohete.animate(position, 200);
        kohete.removeClass("kohete-gora kohete-eskuma kohete-behera kohete-ezkerra");
        kohete.addClass(currentRotation);
    });
});
