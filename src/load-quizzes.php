<?php
    header("Content-Type: application/json; charset=UTF-8");
    $myfiler = fopen("quizzes.json", "r") or die("Unable to open file to read!");
    $obj = fread($myfiler,filesize("quizzes.json"));
    fclose($myfiler);
    echo $obj;
?>