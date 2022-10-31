<?php
    include "function.php";

    $array1 = array("team1" => "Spain",
        "team2" => "Portugal",
        "gameTime" => "55:42"
    );
    $array2 = array("team1" => "Italy",
        "team2" => "France",
        "gameTime" => "60:38"
    );

    $array3 = array("team1" => "Germany",
        "team2" => "Poland",
        "gameTime" => "45:21"
    );
    $array4 = array("team1" => "Lithuania",
        "team2" => "Estonia",
        "gameTime" => "59:10"
    );
    $array5 = array("team1" => "United Kingdom",
        "team2" => "Norway",
        "gameTime" => "60:12"
    );
    
    $finalArray =array($array1, $array2, $array3, $array4, $array5);
    
    displayGames("EU Leauge", $finalArray);
?>