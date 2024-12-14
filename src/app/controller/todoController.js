const db = require('../infrastructor/database/database');
const user = require('../routes/user');

exports.create = (req, res) => {
    const {kegiatan, deskripsi, id} = req.body

    const sql = "INSERT INTO todo_list(kegiatan, deskripsi, user_id) VALUES (?,?,?)"

    db.query(sql, [kegiatan, deskripsi, id], (err, result) => {
        if(err) {
            res.json({
                status : "error : " + err,
                pesan : "Error saat mencoba menambah list"                    
            })
        } else {
            if (result.length = 0) {
                res.json({
                    status : "Gagal",
                    pesan : "gagal membuat list"                    
                })
            } else {
                res.json({
                    status : "sukses",
                    pesan : "berhasil membuat list"
                })
            }
        }
    })
};

exports.readAll = (req, res) => { 
    const sql = "select * from todo_list"

    db.query(sql, (err, result) => {
        if(err) {
            res.json({
                status : "error : " + err,
                pesan : "Error saat mencoba mengambil data"                    
            })
        } else {
            if (result.length = 0) {
                res.json({
                    status : "tidak ditemukan",
                    pesan : "data tidak ditemukan"                    
                })
            } else {
                res.json({
                    status : "sukses",
                    pesan : "berhasil mengambil data"
                })
            }
        }
    })
}

exports.readAccount = (req, res) => {
    const id = req.session.user.id
    const sql = "SELECT * FROM todo_list WHERE user_id = ?"
    db.query(sql, id, (err, result) => {
        if(err) {
            res.json({
                status : "error : " + err,
                pesan : "Error saat mencoba mengambil data"                    
            })
        } else {
            if (result.length == 0) {
                res.json({
                    status : "tidak ditemukan",
                    pesan : "data tidak ditemukan"                    
                })
            } else {
                res.json({
                    status : "sukses",
                    data : result,
                    pesan : "berhasil mengambil data"
                })
            }
        }
    })
}

exports.readById = (req, res) => { 
    const id = req.params.id
    const sql = "SELECT * FROM todo_list WHERE idList = ?"

    db.query(sql, [id], (err, result) => {
        if(err) {
            res.json({
                status : "error : " + err,
                pesan : "Error saat mencoba mengambil data"                    
            })
        } else {
            if (result.length == 0) {
                res.json({
                    status : "tidak ditemukan",
                    pesan : "data tidak ditemukan"                    
                })
            } else {
                res.json({
                    status : "sukses",
                    data : result,
                    pesan : "berhasil mengambil data"
                })
            }
        }
    })
}

exports.update = (req, res) => { 
    const id = req.params.id
    const {kegiatan, deskripsi} = req.body
    const sql = "update todo_list set kegiatan = ?, deskripsi = ? where idList = ?"

    db.query(sql, [kegiatan, deskripsi, id], (err, result) => {
        if(err) {
            res.json({
                status : "error : " + err,
                pesan : "Error saat mencoba mengubah list"                    
            })
        } else {
            if (result.length = 0) {
                res.json({
                    status : "gagal",
                    pesan : "gagal merubah list"                    
                })
            } else {
                res.json({
                    status : "sukses",
                    pesan : "berhasil menrubah list"
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
                    pesan : "Error saat mencoba menghapus list"                    
                })
            } else {
                if (result.length = 0) {
                    res.json({
                        status : "gagal",
                        pesan : "gagal menghapus list"                    
                    })
                } else {
                    res.json({
                        status : "sukses",
                        pesan : "berhasil menghapus list"
                    })
                }
            }
        })
 }