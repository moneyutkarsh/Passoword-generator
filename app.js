let passwordlength = 8;

let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;

const passwordpangeinput = document.getElementById("passrange");
const passrangevalueel = document.getElementById("passRangevvalue");
const genBtn = document.getElementById("genBtn");
const passwordEl = document.getElementById("password");

const generatepassword = (passlength) => {
    const lowercaseletters = "abcdefghijklmonpqrstuvwxyz";
    const uppercaseletters = isUpperCase?"ABCDEFGHIJKLMOPQRSTUVWXYZ": "";//ternary operator
    const numbers = isNumbers?"1234567890":"";//ternary operator
    const symbols = isSymbols?"!@#$%^&*()_+":"";//ternary operator

    const passwordchar = lowercaseletters + uppercaseletters + numbers + symbols;

     let password = "";
    for (let i =0;i < passlength;i++) {
        const charIndex = Math.floor(Math.random()* passwordchar.length);
        password+=passwordchar[charIndex];
    }
    return password;
}
passwordpangeinput.addEventListener("input",(e)=>{
    passwordlength = +e.target.value;            
passrangevalueel.innerText = passwordlength;
});
genBtn.addEventListener("click",() =>{
   
    const uppercaseEl = document.getElementById("uppercase");
    const numbersEl = document.getElementById("numbers");
    const symbolsEl = document.getElementById("symbols");

    isUpperCase = uppercaseEl.checked;
    isNumbers = numbersEl.checked;
    isSymbols = symbolsEl.checked;

    const passwordEl = document.getElementById("password");
    const password = generatepassword(passwordlength);
    passwordEl.innerHTML = password;
    console.log("password",password);
});


passwordEl.addEventListener("click", (e) => {
    if (e.target.innerText.length > 0) {
      navigator.clipboard
        .writeText(passwordEl.innerText)
        .then(() => {
          alert("Copied to clipboard");
        })
        .catch(() => {
          alert("could not copy");
        });
    }
  });