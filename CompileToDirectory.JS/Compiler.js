/* 
Compile To Directory JS
Version: 1.0
Author: byronbytes01
*/

const directoryPath = 'builds';

fetch('checkDirectory.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ directoryPath: directoryPath }),
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
    alert(result); // debug
  })
  .catch(error => {
    console.error('Error:', error);
    alert(result); // debug
  });

