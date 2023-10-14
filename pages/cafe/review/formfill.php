<?php
if(isset($_POST['name']) && isset($_POST['email'])) {
    $data = $_POST['name'] . '-' . $_POST['email'] . "\n";
    $filename = date('YmdHis').".txt";
    $ret = file_put_contents($filename, $data, FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
        echo "$ret bytes written to file";
    }
}
else {
   die('no post data to process');
}
?>