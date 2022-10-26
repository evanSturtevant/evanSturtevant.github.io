<?php
    function displayGames($name, $gamesArray) {
        echo "<h2>" . $name . "</h2>";
        echo "<table>";
        echo ('<tr>');
        foreach (array_keys $gamesArray[0] as $ title){
            echo '<h1>' . $title . '</th>';
        }

        echo('</tr>');

        foreach($gamesArray as $row)
    }

?>

<?php

    include 'functions.php';

    