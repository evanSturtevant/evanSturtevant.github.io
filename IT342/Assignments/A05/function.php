<?php
    function displayGames($name, $gamesArray) {
        echo "<h2>" . $name . "</h2>";
        echo "<table>";
        echo "<tr>";
        foreach ($gamesArray[0] as $key => $value){
        	echo '<th>' . $key . '</th>';
        }
        echo "</tr>";
        
        foreach($gamesArray as $row){
            echo ('<tr>');
            foreach ($row as $key => $value){
	            echo '<td>' . $value . '</td>';
	        }
	        echo('</tr>');
        }
            
    }

?>


    