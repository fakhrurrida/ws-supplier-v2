'use strict';

var response = require('./res');
var connection = require('./koneksi');
const { connect } = require('./koneksi');

// exports.index = function(req, res){
//     response.ok("WS-Supplier REST-API", res)
// };

exports.tampilkanBahan = function(req, res){
    connection.query('SELECT nama_bahan, nama_supplier, harga_per_satuan, nama_supplier, satuan FROM bahan_supplier', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            //response.ok(rows, res)
            res.send(rows);
        }
    });
};

exports.tampilkanBahanTanpaHarga = function(req, res){
    connection.query('SELECT nama_bahan, nama_supplier FROM bahan_supplier', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            //response.ok(rows, res)
            res.send(rows);
        }
    });
};

exports.tambahkanBahan = function(req, res){
    var nama_bahan = req.body.nama_bahan;
    var harga_per_satuan = req.body.harga_per_satuan;
    var satuan = req.body.satuan;
    var nama_supplier = req.body.nama_supplier;

    connection.query('INSERT INTO bahan_supplier (nama_bahan, harga_per_satuan, satuan, nama_supplier) VALUES (?,?,?,?)', 
    [nama_bahan,harga_per_satuan, satuan, nama_supplier], function (error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok('Berhasil menambahkan data', res)
        }
    });
};

exports.transaksiBahan = function(req, res){
    var total = 0;
    var berhasil = false;
    var i = 0;

    var uang = req.body.uang;
    var daftarBahan = req.body.daftarBahan;
    var daftarJumlah = req.body.daftarJumlah;
    var arrayHarga = [];
    console.log(req.body);
    //console.log(daftarJumlah[0]);

    for (const belanja of daftarBahan){
        console.log(belanja);
        console.log(belanja.nama)
        connection.query('SELECT harga_per_satuan from bahan_supplier WHERE nama_bahan = ?', 
        [belanja.nama], function (error, rows){
            if (error){
                console.log(error);
            }else{
                total = total + (belanja.jumlah*rows[0].harga_per_satuan);
                console.log(total);
                if (belanja.nama == daftarBahan[daftarBahan.length-1].nama){
                    var kembalian = uang-total;
                    console.log(kembalian);
                    if(total>uang){
                        var kurang = total - uang;
                        res.json({
                            success: false,
                            total_harga: kurang,
                            pesan: "Transaksi anda gagal. Anda membutuhkan " + kurang + " agar transaksi Anda berhasil"
                        //response.ok("Uang kamu kurang", res)
                        });
                    } else{
                        //response.ok("Berhasil", res)
                        res.json({
                            success: true,
                            total_harga: total,
                            pesan: "Transaksi anda berhasil dengan total pengeluaran sebesar " + total
                        });
                    }
                }
            }
        });
    }

    // for (i; i < daftarBahan.length; i++){
    //     var bahan = daftarBahan[i];
    //     var query = 'SELECT harga_per_satuan from bahan_supplier WHERE nama_bahan = ?';
    //     connection.query(query, [bahan], function (error, rows, fields){
    //         if(error){
    //             console.log(error);
    //         }else{
    //             //console.log('Berhasil menambahkan barang');
    //             //console.log(rows);
    //             //console.log(rows[0].harga_per_satuan);
    //             arrayHarga.push(rows[0].harga_per_satuan);
    //             //console.log(arrayHarga);
    //         }
    //         return arrayHarga;
    //     });       
    // }
    
    // setTimeout(() => {
    //     console.log(arrayHarga);
    //     for (i = 0; i < daftarBahan.length; i++){
    //         total += daftarJumlah[i]*arrayHarga[i];
    //     } 
    //     console.log(total);
    //     var arrayResponse = [];
    //     if(uang>=total){
    //         arrayResponse.push("Berhasil");
    //         arrayResponse.push(uang-total);
    //         // res.json({
    //         //     success: true,
    //         //     total_harga: total,
    //         //     pesan: "Transaksi anda berhasil dengan total pengeluaran sebesar " + total
    //         // })
    //         response.ok("Tansaksi berhasil", res);
    //         //response.ok(arrayResponse, res);
    //         //res.send(uang-total);
    //         console.log(res);
    //         console.log("masuk");
    //         return;
    //     }
    //     else if(uang<total){
    //         var x = parseInt(uang);
    //         var kurang = total-x;
    //         arrayResponse.push("Gagal");
    //         arrayResponse.push(kurang);
    //         // res.json({
    //         //     success: false,
    //         //     total_harga: kurang,
    //         //     pesan: "Transaksi anda gagal. Anda membutuhkan " + kurang + " agar transaksi Anda berhasil"
    //         // })
    //         response.ok("Tansaksi Gagal", res);
    //         //response.ok(arrayResponse, res);
    //         //res.send(uang);
    //         //console.log(x);
    //         return;
    //     };
    // }, 1000);

    
};

