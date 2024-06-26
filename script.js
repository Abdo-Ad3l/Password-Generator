const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolsChars = "!-$^+";
const spaceChars = " ";
const generateBtn = document.getElementById("generate");



function getRandomChars(chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
};

function generatePassword() {
    const passwordInput = document.getElementById("password");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numberCheckbox = document.getElementById("number");
    const symbolsCheckbox = document.getElementById("symbols");
    const excludeDuplicateCheckbox = document.getElementById("exc-duplicate");
    const spacesCheckbox = document.getElementById("spaces");

    let characters = "";

    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (numberCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolsChars;
    if (spacesCheckbox.checked) characters += spaceChars;

    if (characters === "") {
        passwordInput.value = "";
        return;
    }

    let password = ""
    const length = document.getElementById("length").value;
    
    while (password.length < length) {
        let char = getRandomChars(characters);
        if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
        password += char;
    }

    passwordInput.value = password;
    console.log(password)
}
const copyBtn = document.getElementById("copy");


function copyPassword () {
    const passwordInput = document.getElementById("password");

    navigator.clipboard.writeText(passwordInput.value)
    .then(() => {
        copyBtn.textContent = "Copied";

        setTimeout(() => {
            copyBtn.textContent = "Copy";
        },2000);

    })
    .catch(err => {
        console.log(`Failed To Copy ${err}`);
    })


    // passwordInput.disabled = false;
    
    // passwordInput.select();
    // document.execCommand("copy")
    // passwordInput.disabled = true;

    // copyBtn.textContent = "Copied";

    // setTimeout (() => {
    //     copyBtn.textContent = "Copy";
    // }, 2000);
    
}


generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", copyPassword);
