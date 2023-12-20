<?php
$directoryPath = $_POST['directoryPath'];
if (is_dir($directoryPath)) {
    return 1;
} else {
    return 0;
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
