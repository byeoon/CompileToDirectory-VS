/* 
Compile To Directory JS - Compiler
Version: 0.0.11
Author: byronbytes01
*/


const directoryPath = 'builds';


function DoesDirectoryExist() {
fetch('DirectoryChecker.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ directoryPath: directoryPath }),
})
  .then(response => response.text())
  .then(result => {
    console.log("Success: " + result);
    alert("Success: " + result);
  })
  .catch(error => {
    console.error('Error: ', error);
    alert("Error: " + error);
  });
}

function SetVariables() {
  console.log("WIP");
}
console.log(directoryPath);
DoesDirectoryExist();

