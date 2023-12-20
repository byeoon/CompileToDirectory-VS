/* 
Compile To Directory JS
Version: 0.0.3
Author: byronbytes01
*/

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
    return true;
  })
  .catch(error => {
    console.error('Error:', error);
    alert("There was an error." + error); // debug
    return false;
  });
  return;
}

DoesDirectoryExist();

if(!DoesDirectoryExist())
{
  alert("Unable to load CompileToDirectory, have you created the 'builds' directory?");
}



