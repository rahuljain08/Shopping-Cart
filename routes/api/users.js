const route = require("express").Router();
const Users = require("../../db.js").Users;

route.get("/", (req, res) => {

	Users.findAll()
	.then((users) => {
		res.status(200).send(users);
	})
	.catch((err) => {
		res.status(500).send({
			error: "Could not retrieve users"
		})
	})

});

route.post("/", (req, res) => {
	// console.log(req);
	// let name = req.body.name;
	Users.create({
		name: req.body.name
	}).then((user) => {
		res.status(201).send(user);
	}).catch((err) => {
		res.status(501).send({
			error: "Could not add user"
		})
	});
})


exports = module.exports = route;