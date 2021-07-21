const sequelize = require("sequelize");

const db = new sequelize("shopdb", "shopper", "shoppass", {
	host: "localhost",
	dialect: "mysql"
});

const Users = db.define("users", {
	id: {
		type: sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: sequelize.STRING,
		allowNull: false
	}
});

const Products = db.define("products", {
	id: {
		type: sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: sequelize.STRING,
		allowNull: false
	},
	manufacturer: {
		type: sequelize.STRING
	},
	price: {
		type: sequelize.FLOAT,
		allowNull: false,
		defaultValue: 0.0
	}
});

db.sync()
	.then(() => console.log("Database has been synced"))
	.catch((err) => console.error(err));

exports = module.exports = {
	Users, Products
}