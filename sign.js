const fakeAccounts = [
    { email: 'tannu@gmail.com', password: '1111' },
    { email: 'unnat@gmail.com', password: '2222' },
    { email: 'abc@gmail.com', password: '3333' }
  ];
  
  // Function to  sign-up 
  function signUp(event) {
    event.preventDefault(); 
  
    // Get the email and password 
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
  
    // Check  the email
    const accountExists = fakeAccounts.some(acc => acc.email === emailInput);
  
    const messageElement = document.getElementById('message');
  
    if (accountExists) {
       
        messageElement.textContent =`Account created successfully! Welcome, ${emailInput}.`;
        messageElement.style.color = 'green';
        window.location.href='./user.html';
    } else {
        fakeAccounts.push({ email: emailInput, password: passwordInput });
        messageElement.textContent = `Incoreect email "${emailInput}"use different email.`;
        messageElement.style.color = 'red';
  
        document.getElementById('signupForm').reset();
    }
  }
  
  document.getElementById('signupForm').addEventListener('submit', signUp);