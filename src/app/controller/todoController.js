const db = require('../infrastructor/database/database')

exports.create = (req, res) => {
    const {kegiatan, deskripsi} = req.body
    const user_id = req.session.user.id
    const sql = "INSERT INTO todo_list(kegiatan, deskripsi, user_id) VALUES (?,?,?)"

    db.query(sql, [kegiatan, deskripsi, user_id], (err, result) => {
        if(err) {
            res.json({
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

exports.read = (req, res) => { 
    const sql = "select * from todo_list"

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

exports.update = (req, res) => { 
    const {kegiatan, deskripsi, id} = req.body
    const sql = "update todo_list set kegiatan = ?, deskripsi = ? where idList = ?"

    db.query(sql, [kegiatan, deskripsi, id], (err, result) => {
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
    const id = req.params.id
    const sql = 'delete from todo_list where idList = ?'

    db.query(sql, id, (err, result) => {
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