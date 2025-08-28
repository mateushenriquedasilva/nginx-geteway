const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

const containerId = os.hostname();

app.get("/", (req, res) => {
  console.log(`request received by the container: ${containerId}`);
  res.send(`
		<html>
			<body>
					<h1>Load Balancer!</h1>
					<p>this request was processed by the container: ${containerId}</p>
			</body>
		</html>
		`);
});

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta http://localhost:${PORT} no container ${containerId}`);
})