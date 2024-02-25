const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const teacherRoute = require("./Route/teacherRoute");
const childsRoute = require("./Route/childRouter");
const classesRoute = require("./Route/classRouter");
const loginRoute = require("./Route/loginRouter");
const authMW = require("./Core/auth/authenticationMiddleWare");
const port = process.env.PORT || 8080;
const server = express();

mongoose.set("strictQuery", true);
mongoose
	.connect("mongodb://127.0.0.1:27017/Nursery")
	.then(() => {
		console.log("BataBase Connection Success");
		server.listen(port, () => console.log(`listening on http://localhost:${port}`));
	})
	.catch((error) => {
		console.log("Connection Error: " + error);
	});

server.use(cors());
server.use(logger("dev"));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(loginRoute);
server.use(authMW);
server.use(teacherRoute);
server.use(childsRoute);
server.use(classesRoute);

server.use((require, result, next) => {
	result.status(404).json({ massage: "Not Found" });
});

server.use((error, require, result, next) => {
	let status = error.status || 500;
	result.status(status).json({ massage: error + "" });
});
