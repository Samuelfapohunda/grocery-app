const express = require("express");
const app = express();
const PORT = 6500;
const routes = require("./routes/auth");
const chatDB = require("./database/db")
const cors = require("cors")
const bodyParser = require("body-parser")






app.use(cors())

app.use(bodyParser.json());
app.use(routes)





chatDB().then(() => {
    app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});
});