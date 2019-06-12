var User_model = require("../models/user_model.js");

exports.reg = function (req, res, next) {
	res.render("reg.ejs");
}

exports.do_reg = function (req, res, next) {
	var name = req.body.uname;
	var pass = req.body.pass;
	//console.log(name);
	//console.log(pass);

	//验证用户名是否重名
	User_model.checkName(name, function (err, data) {
		if (data.length > 0) {
			res.redirest('/reg');
		} else {
			User_model.insert_data(name, pass, function (err, data) {
				//console.log(data);
				if (data.affectedRows > 0) {
					res.redirect('/login');
				}
			})
		}
	})
}

exports.login = function (req, res, next) {
	res.render("login.ejs");
}

exports.do_login = function (req, res, next) {
	var name = req.body.uname;
	var pass = req.body.pass;

	User_model.sel_name_by_pass(name, pass, function (err, data) {
		console.log(data);
	})

}