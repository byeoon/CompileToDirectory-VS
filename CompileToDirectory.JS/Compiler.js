/* 
Compile To Directory JS
Version: 0.0.6
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
  })
  .catch(error => {
    console.error('Error:', error);
    alert("There was an error." + error); // debug
  });
}

DoesDirectoryExist();

