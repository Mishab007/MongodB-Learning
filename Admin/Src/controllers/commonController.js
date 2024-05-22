const userDetails = require("../models/userScheema");
const bycrpt = require("bcrypt");


const object = {
  getHome: (req, res) => {
    if(req.session.username){
      res.render("user/home");
    }else{
      res.redirect('/login')
    }
    
  },
  getSignup: (req, res) => {
    if(req.session.username){
      res.render("user/home");
    }else{
      res.render("user/signup");
    }
  },
  getLogin: (req, res) => {
    if(req.session.username){
      res.render("user/home");
    }else{
      res.render("user/login");
    }
  },
  postSignup: async (req, res) => {
    const { email, username, password, confirm_password } = req.body;
    console.log(email);
    console.log(password);
    console.log(username);

    // checking the user already exist
    const userExits = await userDetails.findOne({ email: email });

    if (userExits) {
      console.log("you are already signed once! please do login");
    } else {
      if (password == confirm_password) {
        // hashing password to bycrpt
        const saltrounds = 10;
        //  number of saltrounds for hash password
        const hashedpassword = await bycrpt.hash(password, saltrounds);

        userDetails.password = hashedpassword;
        // replaced with hashed password
        const datab = {
          email: email,
          username: username,
          password: hashedpassword,
        };
        userDetails.insertMany(datab);
        console.log("success");
        req.session.username = username
        res.redirect("/");
      } else {
        res.redirect("/signup");
      }
    }
  },
  // login user
  postLogin: async (req, res) => {
    try {
      const check = await userDetails.findOne({ username: req.body.username });
      if(check.role=='string'){
        
      }
      if (!check) {
        res.send("user name cannot find");
      } else {
        // compare the hash password from the database with the the palin text
        const ispasswordmatch = await bycrpt.compare(
          req.body.password,
          check.password
        );
        if (ispasswordmatch) {
          req.session.username= check.username
          res.redirect("/");
        } else {
          res.send("wrong password");
        }
      }
    } catch {
      res.send("wrong Details");
    }
  },
  // getLogout : (req,res)=> {
  //   req.session.destroy((err)=>{
  //     if(err){
  //       console.log(distroying);
  //     }else{
  //       res.redirect('/')
  //     }
  //   })
  // }
  getLogout : (req, res) => {
    // Destroy the session or remove the authentication token
    
    // For sessions
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        res.status(500).send('Error logging out');
      } else {
        res.redirect('/login'); // Redirect to the login page after logout
      }
    });

} 
};

module.exports = object;
