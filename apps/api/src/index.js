const createServer = require("./server");

const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
	console.log(`server started on port ${port}`);
});
