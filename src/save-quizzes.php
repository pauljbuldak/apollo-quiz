<?php
    $quizzes = $_POST["quizzes"];
    $myfile = fopen("quizzes.json", "w") or die("Unable to open file to write!");
    fwrite($myfile, $quizzes);
    fclose($myfile);
    echo "Quizzes saved";
?>