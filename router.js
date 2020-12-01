'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    // app.route('/supplier-api')
    //     .get(jsonku.index);

    app.route('/supplier-api/tampil')
        .get(jsonku.tampilkanBahan);

    app.route('/supplier-api/tampil/tanpaharga')
        .get(jsonku.tampilkanBahanTanpaHarga);

    app.route('/supplier-api/tambah')
        .post(jsonku.tambahkanBahan);

    app.route('/supplier-api/transaksi')
        .post(jsonku.transaksiBahan);
}