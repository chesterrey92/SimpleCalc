function calculate() {
    // Get the values of the input fields
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
  
    // Perform the addition
    let sum = num1 + num2;
  
    // Display the result
    document.getElementById('result').innerText = `Result: ${sum}`;
  }
  