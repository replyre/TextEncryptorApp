const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+= ";

function encryption(text, key) {
  let encryptText = "";
  for (let i = 0; i < text.length; i++) {
    const textChar = text[i];
    const keyChar = key[i % key.length];
    const textIndex = alphabet.indexOf(textChar);
    const keyIndex = alphabet.indexOf(keyChar);

    if (textIndex === -1) {
      encryptText += textChar;
    } else {
      const newIndex = (textIndex + keyIndex) % alphabet.length;
      encryptText += alphabet[newIndex];
    }
  }
  return encryptText;
}

function decryption(encryptedText, key) {
  let decryptedText = "";
  for (let i = 0; i < encryptedText.length; i++) {
    const encryptedChar = encryptedText[i];
    const keyChar = key[i % key.length];

    const encryptedIndex = alphabet.indexOf(encryptedChar);
    const keyIndex = alphabet.indexOf(keyChar);

    if (encryptedText === -1) {
      decryptedText += encryptedChar;
    } else {
      let newInd = encryptedIndex - keyIndex;
      if (newInd < 0) newInd += alphabet.length;
      decryptedText += alphabet[newInd];
    }
  }
  return decryptedText;
}

function updateResult(isEncrpting) {
  const text = document.getElementById("message").value;
  const key = document.getElementById("key").value;

  let res = "";
  if (isEncrpting) {
    res = encryption(text, key);
  } else {
    res = decryption(text, key);
  }

  document.getElementById("result").innerHTML = res;
}

document.getElementById("encryptBtn").addEventListener("click", () => {
  updateResult(true);
});
document.getElementById("decryptBtn").addEventListener("click", () => {
  updateResult(false);
});

document.addEventListener("DOMContentLoaded", () => {
  updateResult(true);
});
