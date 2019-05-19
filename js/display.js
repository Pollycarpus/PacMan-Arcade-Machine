function displayCSS() {
    $(".wall").css(
        {
            "width":"30px",
            "height":"30px",
            "display":"inline-block",
            // "background-image":"url(\"assets/coin.gif\")", 
            "background-repeat":"no-repeat",
            "background-position":"center",
            "background-color":"darkblue",
            "border" : "2px solid purple",
            "margin" : "-2px",
        }
    );

    $(".coin").css(
        {
            "width":"30px",
            "height":"30px",
            "display":"inline-block",
            "background-image":"url(\"/assets/coin.gif\")", 
            "background-repeat":"no-repeat",
            "background-position":"center",
            "background-color":"black",
        }
    );

    $(".ground").css(
        {
            "width":"30px",
            "height":"30px",
            "display":"inline-block",
            // "background-image":"url(\"assets/coin.gif\")", 
            "background-repeat":"no-repeat",
            "background-position":"center",
            "background-color":"black",
        }
    );

    $("#pacman").css(
        {
            "width":"30px",
            "height":"30px",
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
            "width":"30px",
            "height":"30px",
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
            "width":"30px",
            "height":"30px",
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
            "float":"left",
            "width":"650px",
        }
    );

    $("#board").css(
        {
            "float":"left",
        }
    );

    $("body").css(
        {
            "font-family" : "\'Press Start 2P\', cursive"
        }
    )
}