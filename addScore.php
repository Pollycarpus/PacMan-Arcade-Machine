<?php
    $content = file_get_contents('ajax/score.json');
    $json = json_decode($content, true);
    $extra = array(
        "name" => $_POST["name"],
        "score" => number_format($_POST["score"])
    );
    $json[]= $extra;
    $final = json_encode($json);
    file_put_contents('ajax/score.json', $final);
?>
