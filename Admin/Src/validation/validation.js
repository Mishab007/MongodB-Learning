function validateForm() {
  const email = document.getElementById("user").value;
  const password = document.getElementById("password").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; //password validation
  
  const isValidEmail = emailRegex.test(email); //test is using for test email
  const isValidPassword = passwordRegex.test(password);//test is using for test password
  
   if(!isValidEmail || !isValidPassword){
    return res.status(400).send("invalid email or password format")
   } // if fails show this message
  next();//if correct go to next
  }
  
  module.exports = validateForm; //exports this result
