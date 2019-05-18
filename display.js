$(".wall").css(
    {
        "width":"20px",
        "height":"20px",
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
        "width":"20px",
        "height":"20px",
        "display":"inline-block",
        "background-image":"url(\"assets/coin.gif\")", 
        "background-repeat":"no-repeat",
        "background-position":"center",
        "background-color":"black",
    }
);

$(".ground").css(
    {
        "width":"20px",
        "height":"20px",
        "display":"inline-block",
        // "background-image":"url(\"assets/coin.gif\")", 
        "background-repeat":"no-repeat",
        "background-position":"center",
        "background-color":"black",
    }
);

$(".pacman").css(
    {
        "width":"20px",
        "height":"20px",
        "display":"inline-block",
        "background-image":"url(\"assets/pacman.gif\")", 
        "background-repeat":"no-repeat",
        "background-position":"center",
        "background-color":"black",
        "background-size":"cover",
    }
);

$(".ghost").css(
    {
        "width":"20px",
        "height":"20px",
        "display":"inline-block",
        "background-image":"url(\"assets/ghost.gif\")", 
        "background-repeat":"no-repeat",
        "background-position":"center",
        "background-color":"black",
        "background-size":"cover",
    }
);

$(".cherries").css(
    {
        "width":"20px",
        "height":"20px",
        "display":"inline-block",
        "background-image":"url(\"assets/cherries.png\")", 
        "background-repeat":"no-repeat",
        "background-position":"center",
        "background-color":"black",
        "background-size":"cover",
    }
);

$("#board").append("<p id=\"score\">Score : " + pacman.score + "</p>");