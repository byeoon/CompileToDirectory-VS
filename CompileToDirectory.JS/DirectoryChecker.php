<?php
$directoryPath = $_POST['builds'];
/*
$directoryPathStable = $_POST['builds/stable'];
$directoryPathBeta = $_POST['builds/beta'];
*/

if (is_dir($directoryPath)) {
    echo 'Default build path directory exists.';
} else {
    echo 'Default build path directory does not exist.';
}
/*
if (is_dir($directoryPathStable)) {
    echo 'Stable build path directory exists.';
} else {
    echo 'Stable build directory does not exist.';
}

if (is_dir($directoryPathBeta)) {
    echo 'Beta build path directory exists.';
} else {
    echo 'Beta build directory does not exist. If you do not use this feature it is okay to dismiss.';
}
*/
?>
