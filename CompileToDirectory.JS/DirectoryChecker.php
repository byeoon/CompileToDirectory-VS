<?php
$directoryPath = $_POST['directoryPath'];
if (is_dir($directoryPath)) {
    echo 'Default build path directory exists.';
    return true;
} else {
    echo 'Default build path directory does not exist.';
    return false;
}

/*
$directoryPathStable = $_POST['builds/stable'];
$directoryPathBeta = $_POST['builds/beta'];

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
