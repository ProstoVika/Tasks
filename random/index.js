// Task render password and colour
const password = document.getElementById("password");
let copyText = document.getElementById("password");
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;

const genPassword = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector('.password').style.backgroundColor = '#' + randomColor;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}


const copyPassword = () => {
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
    console.log("New password:" , copyText.value )
}

// Task palindrome
const checkPalindrome = () => {
    const word = document.getElementById("word").value.trim().toLowerCase();
    if (word === "") {
        document.getElementById("result").innerText = " ";
        return; 
    }
 
    const reversedWord = word.split('').reverse().join('');
    
    if (word === reversedWord) {
        document.getElementById("result").innerText = ` ${word} is a palindrome`;
    } else {
        document.getElementById("result").innerText = `${word} is not a palindrome.`;
    }
}


// Task Check converter
const checkConverter = () => {
    const sourceCurrency = document.getElementById("sourceCurrency").value;
    const targetCurrency = document.getElementById("targetCurrency").value;
    let result;
    const amountInput = document.getElementById("amountInput").value;
        if (amountInput.trim() === "") {
        document.getElementById("finalAmount").innerHTML = "Please enter an amount";
        return; 
    }
    const amount = parseFloat(amountInput);
    if (isNaN(amount)) {
        document.getElementById("finalAmount").innerHTML = "Please enter a valid number";
        return; 
    }
    
    switch (targetCurrency) {
        case "USD":
            result = amount * 1.0; 
            break;
        case "EUR":
            result = amount * 0.94; 
            break;
        case "GBP":
            result = amount * 0.81; 
            break;
        default:
            result = "Invalid currency";
    }
    
    document.getElementById("finalAmount").innerHTML = `Converted amount: ${result.toFixed(2)} ${targetCurrency}`;
}

// Task Mortgage Approval Checker
  const checkMortgage = () => {
    const salaryInput = document.getElementById("salaryInput").value;
    
    if (salaryInput.trim() === "") {
        document.getElementById("borrow").innerHTML = "Please enter a value";
        return;
    }

    const salary = parseFloat(salaryInput.replace('£', '').replace(',', ''));
    if (isNaN(salary)) {
        document.getElementById("borrow").innerHTML = "Please enter a valid number";
        return;
    }

    const mortgageAmount = salary * 5; 
    document.getElementById("borrow").textContent = `You could borrow up to £${mortgageAmount.toFixed(2)}`;
}


