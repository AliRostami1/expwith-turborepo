const { json, urlencoded } = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

module.exports = createServer = () => {
	const app = express();
	app
		.disable("x-powered-by")
		.use(morgan("dev"))
		.use(urlencoded({ extended: true }))
		.use(json())
		.use(cors())
		.get("/message/:name", (req, res) => {
			return res.json({ message: `hello ${req.params.name}` });
		})
		.get("/healthz", (req, res) => {
			return res.json({ ok: true });
		});

	return app;
};
