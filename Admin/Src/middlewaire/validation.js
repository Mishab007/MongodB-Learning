const commonController = require("../controllers/commonController")
// 

    function middleware(req, res, next) {
      const { usename, email, password } = req.body; //requested from body
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email validation
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; //password validation
      
      const isValidEmail = emailRegex.test(email); //test is using for test email
      const isValidPassword = passwordRegex.test(password);//test is using for test password
      
       if(!isValidEmail || !isValidPassword){
        return res.status(400).send("invalid email or password format")
       } // if fails show this message
      next();//if correct go to next
      }
      
      module.exports = middleware; //exports this result

      // function middleware(req, res, next) {
      //    //     const { usename, email, password } = req.body; //requested from body
             
      //    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email validation
      //    //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; //password validation
             
      //    //     const isValidEmail = emailRegex.test(email); //test is using for test email
      //    //     const isValidPassword = passwordRegex.test(password);//test is using for test password
             
      //    //     function validateFormData(username, email, password) {
      //    //         // Your validation logic here
      //    //         // For simplicity, let's assume basic presence validation for all fields
      //    //         return username && email && password;
      //    //      }
      //    //      if (!validateFormData( email, password)) {
      //    //         // If validation fails, render the form with error messages
      //    //         return res.render('form', { error: 'Please fill in all fields.' });
      //    //      }
      //    //     next();//if correct go to next
      //    //     }
             
      //    //     module.exports = middleware; //exports this result