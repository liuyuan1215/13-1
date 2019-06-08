var mysql = require('mysql');
var pool = mysql.createPool({
    connnectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'node1'
});

exports.query = function (sql, params, callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(sql, params, function (error, results, fields) {
            connection.release();
            if (error) throw error;
            callback(error, results);
        });
    });
}