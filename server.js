const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", express.static(__dirname + "/public"));
app.use("/api", require("./routes/api").route)

app.listen(2345, ()=>{
	console.log("Server started at port 2345");
})