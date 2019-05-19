function displayCSS() {
    $(".wall").css(
        {
            "width":"27px",
            "height":"27px",
            "display":"inline-block",
            "background-image":"url(\"assets/wall.png\")", 
            "background-repeat":"no-repeat",
            "background-position":"center",
            "background-size":"cover",
        }
    );

    $(".coin").css(
        {
            "width":"27px",
            "height":"27px",
            "display":"inline-block",
            "background-image":"url(\"/assets/coin.gif\")", 
            "background-repeat":"no-repeat",
            "background-position":"center",
            "background-color":"black",
        }
    );

    $(".ground").css(
        {
            "width":"27px",
            "height":"27px",
            "display":"inline-block",
            "background-repeat":"no-repeat",
            "background-position":"center",
            "background-color":"black",
        }
    );

    $("#pacman").css(
        {
            "width":"27px",
            "height":"27px",
            "display":"inline-block",
            "background-image":"url(\"/assets/pacman.gif\")", 
            "background-repeat":"no-repeat",
            "background-position":"center",
            "background-color":"black",
            "background-size":"cover",
        }
    );

    $(".ghost").css(
        {
            "width":"27px",
            "height":"27px",
            "display":"inline-block",
            "background-image":"url(\"/assets/ghost.gif\")", 
            "background-repeat":"no-repeat",
            "background-position":"center",
            "background-color":"black",
            "background-size":"cover",
        }
    );

    $(".cherries").css(
        {
            "width":"27px",
            "height":"27px",
            "display":"inline-block",
            "background-image":"url(\"/assets/cherries.png\")", 
            "background-repeat":"no-repeat",
            "background-position":"center",
            "background-color":"black",
            "background-size":"cover",
        }
    );

    $("#world").css(
        {
            "border" : "5px solid purple",
            "border-radius" : "10px",
            "padding": "20px",
            "text-align": "center",
            "float":"left",
            "width":"650px",
            "margin-right":"50px",
        }
    );

    $("#board").css(
        {
            "float":"left",
        }
    );

    $("body").css(
        {
            "background-color":"black",
            "font-family" : "\'Press Start 2P\', cursive",
            "color" : "yellow"
        }
    )

    $("#gameover").css(
        {
            "display":"none",
            "position":"absolute",
            "top" : "200",
            "left" : "50",
            "font-size":"70px",
        }
    )
}

function gameOver() {
    $("#gameover").css("display","block");
}