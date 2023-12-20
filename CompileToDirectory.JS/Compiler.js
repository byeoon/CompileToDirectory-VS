/* 
Compile To Directory JS
Version: 0.0.7
Author: byronbytes01
*/
import { enableBetaDirectory } from './options.js'
import { verboseLogging } from './options.js'
import { extraVerboseLogging } from './options.js'

if(extraVerboseLogging == "true")
{
  alert("Extra verbose logging has been enabled.");
}

const directoryPath = 'builds';


function DoesDirectoryExist() {
fetch('checkDirectory.php', {
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

