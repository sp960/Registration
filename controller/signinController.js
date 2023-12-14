const db = require("../database")
function registerUser (req, res) {
            const { userName, MobileNo, userPassword } = req.body;
const sql = 'SELECT * FROM userinfo WHERE  (userName = ? OR MobileNo = ?) AND userPassword = ?';
// console.log(sql);
  db.query(sql, [userName, userName, userPassword], (err, results) => {
    if (err) {
      throw err;
    }
    // console.log(results)
    console.log("Hello World");
    if (results.length > 0) {
      // Authentication successful - user found in the database
      res.redirect('https://weather-app-ooen.onrender.com') // Send the script along with the response
    } else {
      // Authentication failed - user not found or invalid credentials
      return res.status(401).send('User not found');
    }
  });
}

module.exports = {
            registerUser : registerUser
}