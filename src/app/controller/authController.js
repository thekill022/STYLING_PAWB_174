const db = require('../infrastructor/database/database')

 exports.login =   (req, res) => {
     const { email, password } = req.body;
    
        const sql = "SELECT * FROM users WHERE email = ? and password = ?";
        db.query(sql, [email, password], async (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: "error",
                    pesan: "Error saat mencoba mengambil user"
                });
            } else {
                        if (result.length == 0) {
                            return res.status(404).json({
                                status: "tidak ditemukan",
                                pesan: "password salah"
                            });
                        }
                        else  {
                            req.session.user = {
                                id: result[0].id,
                                email: result[0].email,
                                username: result[0].username
                            };
                            return res.redirect('/user/home');
                        }
            }
        });
 }

 exports.logout = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send('Failed to log out');
      }
      res.redirect('/auth/login')
    });
  };