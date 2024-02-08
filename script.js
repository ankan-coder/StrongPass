function generateRandomPasswordLength(minLength, maxLength) {
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  return length;
}

const randomPassLen = generateRandomPasswordLength(10, 25);

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  let randomPass = "";
  for (let i = 0; i < length; i++) {
    randomPass += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomPass;
}

const randomPass = generateRandomString(randomPassLen);

var pLen = document.getElementById("plen");
pLen.textContent = randomPassLen;

var pass = document.getElementById("password");
pass.textContent = randomPass;

function copyPass() {
  const passwordElement = document.getElementById("password");
  const passwordText = passwordElement.textContent;

  // Create a temporary input element
  const tempInput = document.createElement("textarea");
  tempInput.value = passwordText;
  document.body.appendChild(tempInput);

  // Select the text and copy it to the clipboard
  tempInput.select();
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  var copyAlert = document.getElementById("copyAlert");
  copyAlert.textContent = "Password copied to clipboard!";
}

function refreshPage(){
  window.location.reload();
}
