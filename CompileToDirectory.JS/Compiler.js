/* 
Compile To Directory JS
Version: 1.0
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
    alert(result); // debug
    return 1;
  })
  .catch(error => {
    console.error('Error:', error);
    alert("There was an error." + error); // debug
    return 0;
  });

  return;
}

DoesDirectoryExist();
if(DoesDirectoryExist() == 0)
{
  alert("Unable to load CompileToDirectory, there is an error.");
}



