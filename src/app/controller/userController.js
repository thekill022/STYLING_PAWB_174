const db = require('../infrastructor/database/database')

exports.create = (req, res) => {
    const {username, email, password} = req.body
    const sql = "INSERT INTO users(username, email, password) VALUES (?,?,?)"

    db.query(sql, [username, email, password], (err, result) => {
        if(err) {
            res.status(500).json({
                status : "error : " + err,
                pesan : "Error saat mencoba menambah user"                    
            })
        } else {
            if (result.length = 0) {
                res.json({
                    status : "Gagal",
                    pesan : "gagal membuat user"                    
                })
            } else {
                res.json({
                    status : "sukses",
                    pesan : "berhasil membuat user"
                })
            }
        }
    })
};

exports.readAll = (req, res) => { 
    const sql = "select * from users"

    db.query(sql, (err, result) => {
        if(err) {
            res.json({
                status : "error : " + err,
                pesan : "Error saat mencoba mengambil user"                    
            })
        } else {
            if (result.length = 0) {
                res.json({
                    status : "tidak ditemukan",
                    pesan : "user tidak ditemukan"                    
                })
            } else {
                res.json({
                    status : "sukses",
                    pesan : "berhasil mengambil user"
                })
            }
        }
    })
}

exports.readId = (req, res) => { 
    const id = req.params.id
    const sql = "select * from users where id = ?"

    db.query(sql, id, (err, result) => {
        if(err) {
            res.json({
                status : "error : " + err,
                pesan : "Error saat mencoba mengambil user"                    
            })
        } else {
            if (result.length = 0) {
                res.json({
                    status : "tidak ditemukan",
                    pesan : "user tidak ditemukan"                    
                })
            } else {
                res.json({
                    status : "sukses",
                    pesan : "berhasil mengambil user"
                })
            }
        }
    })
}

exports.updatePass = (req, res) => { 
    const id = req.params.id
    const pass = req.body
    const sql = "update users set password = ? where id = ?"

    db.query(sql, [pass, id], (err, result) => {
        if(err) {
            res.json({
                status : "error : " + err,
                pesan : "Error saat mencoba mengubah password"                    
            })
        } else {
            if (result.length = 0) {
                res.json({
                    status : "gagal",
                    pesan : "gagal merubah password"                    
                })
            } else {
                res.json({
                    status : "sukses",
                    pesan : "berhasil menrubah password"
                })
            }
        }
    })
}

exports.delete = (req, res) => { 
    const id = req.session.user.id
    const sql = "delete from users where id = ?"

    db.query(sql, [id], (err, result) => {
        if(err) {
            res.json({
                status : "error : " + err,
                pesan : "Error saat mencoba menghapus user"                    
            })
        } else {
            if (result.length = 0) {
                res.json({
                    status : "gagal",
                    pesan : "gagal menghapus usermerubah password"                    
                })
            } else {
                res.json({
                    status : "sukses",
                    pesan : "berhasil menghapus user"
                })
            }
        }
    })
}