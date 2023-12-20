/* 
Compile To Directory JS
Version: 0.0.9
Author: byronbytes01
*/

const directoryPath = 'builds';

// Instead of the directory path being directly "/builds/YourExport", it will now split between  "/builds/beta/YourExport" and "/builds/stable/YourExport".
const enableBetaDirectory = 'false';

// Enables verbose logging to console.
const verboseLogging = 'false';

// Enables verbose logging via the 'alert' function.
const extraVerboseLogging = 'false';


if(extraVerboseLogging == "true")
{
  alert("Extra verbose logging has been enabled.");
}


function DoesDirectoryExist() {
fetch('https://cdn.jsdelivr.net/gh/byronbytes01/CompileToDirectory-VS@js-0.0.9/CompileToDirectory.JS/DirectoryChecker.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ directoryPath: directoryPath }),
})
  .then(response => response.text())
  .then(result => {
    console.log("Success: " + result);
    alert("Successful! " + result); // debug
  })
  .catch(error => {
    console.error('Error:', error);
    alert("There was an error." + error); // debug
  });
}

DoesDirectoryExist();

